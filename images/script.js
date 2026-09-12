/**
 * script.js
 */


const strip = document.getElementById("strip")
const image = document.querySelector("#frame img")
const items = document.getElementById("items")
const check = document.getElementById("check")
const arrows = document.getElementById("arrows")
let imageArray = []


items.addEventListener("click", selectFile)
strip.addEventListener("click", showInFrame)
arrows.addEventListener("click", adjacentImage)

;(function getJSON() {
  fetch("./json/index.json")
    .then(response => {
      if (!response.ok) {
        return console.log("error loading images")
      }
      return response.json()
    })
    .then(createMenu)
})()


function createMenu(json) {
  json.forEach( file => {
    // "json/colours.json"
    let name = file.replace("json/", "")
                  .replace(".json", "")
    name = name[0].toUpperCase() + name.slice(1)
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.textContent = name
    li.dataset.url = file
    li.append(btn)
    items.append(li)
  })

  const random = Math.floor(Math.random() * json.length)
  const url = json[random]
  // selectFile({ target: { dataset: url} })
  getImages(json[0], true)
}


function selectFile({target}) {
  if (target.closest) {
    target = target.closest("li")
  }
  const file = target.dataset.url
  getImages(file)
  check.checked = false
}


function getImages(file, first) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        return console.log("error loading images")
      }
      return response.json()
    })
    .then(json => fillStrip(json, first))
}


function fillStrip(images, first) {
  imageArray = images
  while(strip.firstChild){
    strip.removeChild(strip.firstChild)
  }
  images.forEach(src => {
    const img = document.createElement("img")
    img.src = src
    strip.append(img)
  })

  const random = (first)
    ? 0
    : Math.floor(Math.random() * images.length)
  const image = images[random]
  showInFrame({ target: { src: image }})
}


function showInFrame({target}) {
  const src = target.src
  image.src = src
}


function adjacentImage({ target }) {
  const id = target.id
  const direction = id === "previous" ? -1 : 1
  const name = getFileName(image.src)

  const index = imageArray.findIndex(src => (
    getFileName(src) === name
  ))

  const maxIndex = imageArray.length - 1
  let adjacent = index + direction
  if (adjacent < 0) {
    adjacent = maxIndex
  } else if (adjacent >= maxIndex) {
    adjacent = 0
  }

  const src = imageArray[adjacent]
  showInFrame({ target: { src }})

  const thumbs = Array.from(strip.children)
  const thumb = thumbs.find(img => (
    getFileName(img.src) === name
  ))
  const options = {
    inline: "center",
    block: "center"
  }
  thumb.scrollIntoView(options)
}


function getFileName(path) {
  return path.replace(/^.+\//, "")
}