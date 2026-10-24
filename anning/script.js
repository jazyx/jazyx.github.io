/**
 * script.js
 */


const main = document.getElementsByTagName("main")[0]

fetch('./images.json')
.then(response => response.json())
.then(start)


const DEPOT = "https://raw.githubusercontent.com/jazyx/depot/refs/heads/main/"
const DOTS_REGEX = /(.*)\s+?(\.\.\.)/
let level = 0
let depth = 0



function start(json) {
  console.log("json:", json)

  generatePage()


  function generatePage() {

    const sequence = json[level]
    const frame = sequence[depth]
    const { text, src } = frame


    while (main.firstChild) {
      main.removeChild(main.lastChild);
    }
    const img = document.createElement("img")
    img.src = `${DEPOT}${src}`
    main.append(img)
    const p = document.createElement("p")
    const button = document.createElement("button")
    const match = DOTS_REGEX.exec(text)

    if (match) {
      const span = document.createElement("span")
      span.textContent = match[1]
      button.textContent = "..."
      button.onclick = () => {
        depth += 1
        generatePage()
      }
      p.append(span)
      p.append(button)
      main.append(p)

    } else {
      p.textContent = text
      button.textContent = "Next"
      button.onclick = () => {
        level += 1
        depth = 0
        generatePage()
      }
      main.append(p)
      main.append(button)
    }

  }
}