/**
 * script.js
 */

const strip = document.getElementById("strip")
const image = document.querySelector("#frame img")


;(function getImages(){
  fetch("./images.json")
    .then(response => {
      if (!response.ok) {
        return console.log("error loading images")
      }
      return response.json()
    })
    .then(fillStrip)
})()


function fillStrip(images) {
  images.forEach(src => {
    const img = document.createElement("img")
    img.src = src
    strip.append(img)
  })

  const random = Math.floor(Math.random() * images.length)
  const image = images[random]
  showInFrame({ target: { src: image }})
}


strip.addEventListener("click", showInFrame)

function showInFrame({target}) {
  const src = target.src
  image.src = src
}