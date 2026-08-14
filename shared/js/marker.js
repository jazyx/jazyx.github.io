/** marker.js **
 *
 * 
**/



;(function markerLoaded(lx){
  "use strict"

  if (!lx) {
    lx = window.lexogram = {}
  }




  class Marker {
    constructor(expressions) {
      this.expressions = expressions
      this.updatedArray = expressions.slice()

      this.article = document.querySelector("article")

      this.regexField = document.getElementById("regex")
      this.wordField = document.getElementById("word-look-up")
      this.imageField = document.getElementById("image-look-up")
      this.flagsField = document.getElementById("flags")
      this.levelField = document.getElementById("level")

      this.showWord = document.getElementById("show-word")
      this.showImage = document.getElementById("show-image")
      this.showFlags = document.getElementById("show-flags")

      this.dictionary = document.getElementById("dictionary")
      this.wiktionary = document.getElementById("wiktionary")
      this.tatoeba = document.getElementById("tatoeba")
      this.imageCheck = document.getElementById("images")
      this.wikipedia = document.getElementById("wikipedia")

      this.nextButton = document.getElementById("next")
      this.backButton = document.getElementById("back")
      this.upButton = document.getElementById("up")
      this.downButton = document.getElementById("down")
      this.showButton = document.getElementById("show-markup")

      this.spans = [].slice.call(document.querySelectorAll("span"))

      let listener = this.initialize.bind(this)
      this.showButton.addEventListener("change", listener, false)

      listener = this.goExpression.bind(this)
      this.nextButton.addEventListener("mouseup", listener, false)
      this.backButton.addEventListener("mouseup", listener, false)

      listener = this.scrollToOccurrence.bind(this)
      this.upButton.addEventListener("mouseup", listener, false)
      this.downButton.addEventListener("mouseup", listener, false)

      listener = this.newSelection.bind(this)
      this.showWord .addEventListener("change", listener, false)
      this.showImage.addEventListener("change", listener, false)
      this.showFlags.addEventListener("change", listener, false)

      this.dictionary.addEventListener("change", listener, false)
      this.wiktionary.addEventListener("change", listener, false)
      this.tatoeba   .addEventListener("change", listener, false)
      this.imageCheck.addEventListener("change", listener, false)
      this.wikipedia .addEventListener("change", listener, false)

      this.regexField.addEventListener("change", listener, false)
      this.wordField .addEventListener("change", listener, false)
      this.imageField.addEventListener("change", listener, false)
      this.flagsField.addEventListener("change", listener, false)
      this.levelField.addEventListener("change", listener, false)

      this.parseRegex = /([^;¡!0-9]+)(;([^!¡0-9]*))?(¡([^!0-9]*))?(!([^!0-9]+))?(\d+)?/
      // **** NEED TO ADD ¿image-src DETECTION **** //

      this.regex = ""
      this.wordLookUp = ""
      this.imageLookUp = ""
      this.flags = ""
      this.level = ""

      // this.expression
    }
  

    initialize(event) {
      this.article.classList.add("marker")

      if (this.updatedArray.index === undefined) {
        this.goExpression({target: {}})
      } else if (!(event.target.checked)) {
        this._showUpdatedArray()
        this.article.classList.remove("markup")
      }
    }


    goExpression(event) {
      let delta = 1 - ((event.target.id==="back") * 2) // -1 | +1
      let match
        , temp

      this.expression = this._loopThrough(this.updatedArray, delta)
      // "skid(?:ding|s|ded);skid¡car skid!DW4"
      match = this.parseRegex.exec(this.expression)

      this._showInputs(match)
      this._showFlags()
      this._showOccurrences()
    }


    newSelection(event) {
      let target = event.target

      switch (target) {
        case this.showWord:
          this._updateLookUp("wordField", target.checked)
        break
        case this.showImage:
          this._updateLookUp("imageField", target.checked)
        break
        case this.showFlags:
          this._updateLookUp("flagsField", target.checked)
        break

        case this.dictionary:
          this._updateDictionary(target.value)
        break
        case this.wiktionary:
          this._updateWiktionary(target.value)
        break
        case this.tatoeba:
          this._updateTatoeba(target.checked)
        break
        case this.imageCheck:
          this._updateImages(target.checked)
        break
        case this.wikipedia:
          this._updateWikipedia(target.value)
        break

        case this.regexField:
          this._updateRegex(target.value)
        break
        case this.wordField:
          this._updateField("wordLookUp", target.value)
        break
        case this.imageField:
          this._updateField("imageLookUp", target.value)
        break
        // case this.flagsField:
        //   this._updateField("flags", target.value)
        // break
        // case this.levelField:
        //   this._updateField("level", target.value)
      }

      // console.log(target.id, target.checked || target.value)
    }


    _loopThrough(array, delta) {
      if (array.index === undefined) {
        array.index = (delta > 0)
                    ? -1
                    : array.length
      }

      array.index += delta

      if (array.index < 0) {
        array.index = array.length - 1
      } else if (array.index > array.length - 1) {
        array.index = 0
      }

      return array[array.index]
    }


    _showInputs(match) {

      // console.log(match)
      // 0: "expression;link:image+link!Wit7"
      // 1: "expression"
      // 2: ";link"
      // 3: "link"
      // **************** REMEMBER TO ADD image-src ***************
      // 4: ":image+link"
      // 5: "image+link"
      // 6: "!Wit"
      // 7: "Wit"
      // 8: "7"
      // groups: undefined
      // index: 0
      // input: "expression;link¡image+link!Wit7"

      this.showWord.checked = !!(this.wordLookUp = match[3] || "")
      this.wordField.value = this.wordLookUp
      
      this.showImage.checked = !!(this.imageLookUp = match[5] || "")
      this.imageField.value = this.imageLookUp
      
      this.showFlags.checked = !!(this.flags = match[7] || "")
      this.flagsField.value = this.flags

      this.levelField.value = this.level = match[8]

      // And finally...
      this.regex = this._updateRegex((match[1]))
    } 


    _showFlags() {
      let select = this.dictionary
      if (this.flags.indexOf("d") + 1) {
        select.value = "none"
      } else if (this.flags.indexOf("m") + 1) {
        select.value = "m"
      } else if (this.flags.indexOf("D") + 1) {
        select.value = "D"
      } else {
        select.value = "cre"
      }

      select = this.wiktionary
      if (this.flags.indexOf("w") + 1) {
        select.value = "none"
      } else if (this.flags.indexOf("W") + 1) {
        select.value = "en"
      } else {
        select.value = "ru"
      }

      select = this.wikipedia
      if (this.flags.indexOf("e") + 1) {
        select.value = "en"
      } else if (this.flags.indexOf("E") + 1) {
        select.value = "ru"
      } else {
        select.value = "none"
      }

      this.tatoeba.checked = (this.flags.indexOf("t") < 0)
      this.imageCheck.checked = (this.flags.indexOf("i") < 0)
    }


    _showOccurrences() {
      this.occurrences = this.spans.filter((span) => {
        let isMatch = this.regex.test(span.innerText)
        if (isMatch) {
          span.classList.add("highlight")
        } else {
          span.classList.remove("highlight")
        }

        return isMatch
      })

      this.scrollToOccurrence({target: {}})
    }


    scrollToOccurrence(event) {
      let delta = 1 - (event.target.id === "up") * 2
      let occurrence = this._loopThrough(this.occurrences, delta)

      occurrence.scrollIntoView()
    }


    _updateLookUp(field, value) {
      if (value) {
        this.flags = this[field].value
      } else {
        this.flags = ""
      }

      this._updateArray()
    }


    _updateDictionary(value) {
      switch (value) {
        case "cre":
          this._modifyFlags("", "dDm")
        break
        case "D":
          this._modifyFlags("D", "dm")
        break
        case "m":
          this._modifyFlags("m", "dD")
        break
        case "none":
          this._modifyFlags("d", "Dm")
        break
      }
    }


    _updateWiktionary(value) {
      switch (value) {
        case "ru":
          this._modifyFlags("", "wW")
        break
        case "en":
          this._modifyFlags("W", "w")
        break
        case "none":
          this._modifyFlags("w", "W")
        break
      }      
    }


    _updateTatoeba(value) {
      if (value) {
        this._modifyFlags("", "t")
      } else {
        this._modifyFlags("t", "")
      }    
    }


    _updateImages(value) {
      if (value) {
        this._modifyFlags("", "i")
      } else {
        this._modifyFlags("i", "")
      }
    }


    _updateWikipedia(value) {
      switch (value) {
        case "ru":
          this._modifyFlags("E", "e")
        break
        case "en":
          this._modifyFlags("e", "E")
        break
        case "none":
          this._modifyFlags("", "eE")
        break
      }
    }


    _updateRegex(value) {
      let color = "#000"
      let bgColor = "#fff"
      let regex
        , index

      try {
        regex = new RegExp("^" + value + "$", "i")
        index = value.indexOf("(")

        if (index < 0) {

        } else {
          if (value.indexOf("?:") !== index + 1) {
            value = value.splice(index + 1, 0, "?:")
            color = "#060"
            bgColor = "#efe"
          }
        }

        this._updateField("regex", value)

      } catch (error) {
        regex = /$^/ // no matches
        color = "#900"
        bgColor = "#fdd"
      }

      this.regexField.style.color = color
      this.regexField.style.backgroundColor = bgColor

      return regex
    }


    _updateField(property, value) {
      let field = property.replace("LookUp", "") + "Field"
      this[property] = value
      this[field].value = value
      this._updateArray()
    }


    _modifyFlags(add, remove) {
      let char

      remove = remove.split("")
      while (char = remove.pop()) {
        this.flags = this.flags.replace(char, "")
      }

      this.flags += add

      this.flagsField.value = this.flags

      this.showFlags.checked = !!this.flags

      this._updateArray()
    }


    _updateArray() {
      let newItem = this.regex

      if (this.showWord.checked && this.wordLookUp) {
        newItem += ";" + this.wordLookUp
      }

      if (this.showImage.checked && this.imageLookUp) {
        newItem += "¡" + this.imageLookUp
      }

      if (this.showFlags.checked && this.flags) {
        newItem += "!" + this.flags
      }

      newItem += this.level

      this.updatedArray[this.updatedArray.index] = newItem
      // console.log(newItem)
    }


    _showUpdatedArray() {
      let noChange = this.expressions.every((expression, index) => {
        return this.updatedArray[index] === expression
      })

      if (noChange) {
        return console.log("No changes made")
      } else {
        // console.log(this.updatedArray)
      }
    }
  }


  lx.Marker = Marker
  
})(window.lexogram)