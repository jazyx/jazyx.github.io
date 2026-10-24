/**
 * script.js
 */


const svg = document.getElementsByTagName("svg")[0]
svg.addEventListener("click", toggleFill)

function toggleFill(param) {
  svg.classList.toggle("fill")
}