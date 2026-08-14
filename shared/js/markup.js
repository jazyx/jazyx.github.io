/** markup.js **
 *
 * To use this script, the HTML page must have an <article> element,
 * a <div class="tooltip"> element. and an array of expressions. This
 * script will turn all the strings in the expressions array into
 * <span>string</span> elements which will appear highlighted and will
 * interact with the mouse.
 *
 * String.prototype.splice should be provided by a polyfill:
 *
 *  if (!String.prototype.splice) {
 *    String.prototype.splice = function(
 *      start = 0
 *    , delCount = 0
 *    , newSubStr = "") {
 *      return this.slice(0, start)
 *           + newSubStr
 *           + this.slice(start + Math.abs(delCount))
 *    }
 *  }
 *
 *
 * Create an instance of the MarkUp class with an array of strings as
 * the argument. The strings should have the format...
 *
 *   "regular_expression;url_query!xyz®N"
 *
 *  ... where :
 *  -`regular_expression` be used to find strings in the HTML of the
 *     page
 *   - url_query will be  used for creating queries to Cambridge
 *     English dictionary, Викисловарь, Tatoeba, Google images and
 *     perhaps Wikipedia.
 *   - xyz can include any of the letters
 *     • d — don't show Cambridge Russian-English dictionary
 *     • D — show Cambridge **English** dictionary instead
 *     • w — don't show Викисловарь
 *     • W — show Wiktionary instead of Викисловарь
 *     • t — don't show Tatoeba
 *     • i — don't show Google images
 *     • e — DO show Wiktionary
 *     • m — DO show Merriam-Webster instead of Cambridge
 *   - ® means
**/



;(function markupLoaded(lx){
  "use strict"

  if (!lx) {
    lx = window.lexogram = {}
  }



  class MarkUp {
    constructor(expressions = []) {
      this.expressions = expressions

      this.article = document.querySelector("article")

      this.spanRegex = /<\/?span[^>]*?>/g
      this.skipRegex = /([^!¡]+)(¡([^!]+))?(!(.*))?/
      this.cambridge = "https://dictionary.cambridge.org/dictionary/english-russian/"
      this.english = "https://dictionary.cambridge.org/dictionary/english/"
      this.merriam = "https://www.merriam-webster.com/dictionary/"
      this.словарь1 = "https://ru.wiktionary.org/wiki/"
      this.словарь2 = "#Английский"
      this.wiki1 = "https://en.wiktionary.org/wiki/"
      this.wiki2 = "#English"
      this.tatoeba = "https://tatoeba.org/rus/sentences/search?from=eng&to=rus&query="
      this.images = "https://www.google.ru/search?tbm=isch&q="
      this.wikipedia = "https://en.wikipedia.org/wiki/"

      this.tooltipDiv = document.querySelector("div.tooltip")
      this.show = true
      this.activeDelay = 250
      this.clickPause = 0

      this._prepareToolTip()
      this.addSpansToHTML(expressions)

      this._connectToExtension()

      // this.timeout
    }

    // EVENTS // EVENTS // EVENTS // EVENTS // EVENTS // EVENTS //

    treatMouseDown (event) {
      this.timeout = setTimeout(() => {
        this._showToolTip(event)
      }, this.clickPause)
    }


    _showToolTip(event) {
      if (this.show) {
        let span = this._getElement(event, "SPAN")
        let text
          , html

        if (!span) { return }

        text = span.dataset.link
        html = this._getHTMLForTooltip(text)

        if (!html) { return }

        this.tooltipDiv.innerHTML = html

        this.show = false

      } else {
        let link = this._getElement(event, "A")

        if (!link) {
          this.show = true
          this.tooltipDiv.innerHTML = ""
        }
      }
    }


    // CONNECTION TO EXTENSION // CONNECTION TO EXTENSION //

    _connectToExtension() {
      if (!chrome.runtime) {
        return
      }

      let extensionId = "egmplbjkfbbodfhdjpcdihegmgghmpdb"
      //                "noilnblhemoefcoaekdcfnpaomligejh"
      let connectInfo = {}
      let listener = this.messageFromExtension.bind(this)
      this.port = chrome.runtime.connect(extensionId, connectInfo)

      // console.log(port)
      //  { name: (...)
      // , onDisconnect: (...)
      // , onMessage: (...)
      // }

      this.port.onMessage.addListener(listener)
    }


    messageFromExtension(message, port) {
      // console.log("messageFromExtension", ...arguments)
      let method = this[message.subject]
      if (method) {
        method.bind(this)(message)
      } else {
        console.log("Unhandled: messageFromExtension", ...arguments)
      }
    }


    resetHTMLSpans(message) {
      let expressions

      try {
        expressions = JSON.parse(message.expressions)

      } catch (error) {
        return console.log(
          "ERROR with resetHTMLSpans"
        , ...arguments
        , error
        )
      }

      // this.expressions = expressions
      this._removeAllSpans()
      this.addSpansToHTML(expressions)

      this.port.postMessage({ subject: "htmlSpansReset" })
    }


    actionIconClicked() {
      this.clickPause = this.activeDelay

      // Add data-index to each span
      this._removeAllSpans()
      this.addSpansToHTML(this.expressions)

      this.port.postMessage({
        subject: "setTooltipDelay"
      , value: this.activeDelay
      })
    }


    preventDefault() {
      clearTimeout(this.timeout)
    }


    /**
     * Called by:
     * * showNewList in Alias game.js
     * + constructor
     * + resetHTMLSpans
     * + actionIconClicked
     *
     * @param  {array}  expressions  [
     *   "regex;lemma-link¿image-src¡image-search-link!flags°level"
     * , ...
     * ]
     */
    addSpansToHTML(expressions) {
      let html = this.article.innerHTML
      // let linkRegex = /([^;¡!°]+)(?:;([^!¡°]*))?(¡[^!°]*)?(![^°]+)?(?:°(\d+))?/
      let linkRegex = /([^;¿¡!°]+)(?:;([^;!¡°]*))?(?:;([^!¡°]*))?(¡[^!°]*)?(![^°]+)?(?:°(\d+))?/
      let tail = "(?!(['+¡]|<\/span|\\.(jpg|png|gif)))"

      let link
        , imageSrc
        , imageLink
        , flags
        , level
        , noBounds
        , regex
        , match
        , find
        , length
        , span

      expressions.forEach((expression, index) => {
        // A | character in the regex part of the expression will have
        // been encoded as ||. Replace this here with %, and later
        // replace % with %7C which is the encoded version of |.
        // OR WHY NOT just escape it as \| ?
        expression = expression.replace("||", "%")
        link = linkRegex.exec(expression)

        // 0: "expression;link:image+link!Wit7"
        // 1: "expression"
        // 2: "lemma-link"
        // 3: "image-src"
        // 4: "¡image+link"
        // 5: "!Wit"
        // 6: "7"
        // groups: undefined
        // index: 0
        // input: "expression;link:image+link!Wit7"

        expression = link[1]
        imageSrc = link[3] || ""
        imageLink = link[4] || ""
        flags = link[5]
        level = link[6] || 0
        link = link[2]
        // Ensure we get matches for expressions like Prof. and B.C.
        noBounds = expression.substring(expression.length - 1)
        noBounds = noBounds === ">" || noBounds === "."

        level = [
          ""
        , " class='A1'"
        , " class='A2'"
        , " class='B1'"
        , " class='B2'"
        , " class='C1'"
        , " class='C2'"
        , " class='unknown'"
        ][parseInt(level, 10)]

        // An endless loop will occur if we simply look for
        // `expression` and then replace it with ...
        //
        // <span data-link='expression' data-index='x'>expression</span>
        //
        // ... since there will now be new occurences of `expression`.
        // We need to deliberately exclude words surrounded by single
        // quote (') marks, and by <span> tags. The easiest way to do
        // this is to check for a preceding "'" character and use
        // lookahead for a closing span tag, and then trim the
        // first char.
        // This also allows for cases where the expression to find is
        // enclosed in a <li> list tag.

        if (noBounds) {
          regex = new RegExp("[^'+¡/-]" + expression + tail, "gi")
        } else {
          regex = new RegExp("[^'+¡/-]\\b"+expression+"\\b" + tail, "gi")
        }

        while (match = regex.exec(html)) {
          find = match[0].substring(1)
          length = find.length
          find = find.replace(/<\/?\w+>/g, "")
          let dataLink = link || find.toLowerCase()

          dataLink += imageLink
          dataLink = dataLink.replace(/ /, "+")
          dataLink = dataLink.replace(/%/, "%7C")

          if (flags) {
            dataLink += flags
          }

          find = find.replace(/!.*/, "")

          span = "<span data-link='" + dataLink + "'"
               + (this.clickPause
                  ? " data-index='" + index + "'"
                  : ""
                  )
               + level + ">"
               + find
               + "</span>"

          html = html.splice(match.index + 1, length, span)
        }
      })


      this.article.innerHTML = html
    }


    // INTERNAL // INTERNAL // INTERNAL // INTERNAL // INTERNAL //



    _removeAllSpans() {
      let html = this.article.innerHTML
      html = html.replace(this.spanRegex, "")
      this.article.innerHTML = html
    }


    _prepareToolTip() {
      let listener = this.treatMouseDown.bind(this)
      document.body.addEventListener("mousedown", listener, true)
    }


    _getElement(event, nodeName) {
      let target = event.target

      while (target && target.nodeName !== nodeName) {
        target = target.parentNode
      }

      return target
    }


    _getHTMLForTooltip(text) {
      let skip = this.skipRegex.exec(text)
      text = skip[1]
      let img  = skip[3] || text
      skip = skip[5] || ""

      let html = "<div><h2>"
               + unescape(text.replace(/[_+]/g, " "))
               + "</h2>"
      let link

      if (skip.indexOf("m") < 0) {

        if (skip.indexOf("D") > -1) {
          link = (this.english + text).replace(/\+/, "-")
          link = "<a target='dico' href='" + link + "'>Dictionary</a>"
          html += link
        } else if (skip.indexOf("d") < 0) {
          link = (this.cambridge + text).replace(/\+/, "-")
          link = "<a target='dico' href='" + link + "'>Dictionary</a>"
          html += link
        }
      } else {
        link = this.merriam + text
        link = "<a target='dico' href='" + link + "'>Dictionary</a>"
        html += link
      }

      if (skip.indexOf("W") < 0) {
        if (skip.indexOf("w") < 0) {
          link = this.словарь1  + text.replace(/\+/, "_") + this.словарь2
          link = "<a target='wiki' href='" + link + "'>Викисловарь</a>"
          html += link
        }
      } else {
        link = this.wiki1  + text.replace(/\+/, "_") + this.wiki2
        link = "<a target='wiki' href='" + link + "'>Wiktionary</a>"
        html += link
      }

      if (skip.indexOf("t") < 0) {
        link = this.tatoeba + text
        link = "<a target='tata' href='" + link + "'>Examples</a>"
        html += link
      }

      if (skip.indexOf("i") < 0) {
        link = this.images + img
        link = "<a target='imag' href='" + link + "'>Images</a>"
        html += link
      }

      if (skip.indexOf("e") > -1) {
        link = this.wikipedia + img
        link = "<a target='pedi' href='" + link + "'>Wikipedia</a>"
        html += link
      }

      html += "</div>"

      return html
    }
  }



  lx.MarkUp = MarkUp
  

})(window.lexogram)