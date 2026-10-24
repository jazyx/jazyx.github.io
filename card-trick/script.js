/**
 * script.js
 */

// Offsets for getting sprite images from main image
//   J Q K
// H
// D
// C
// S
const width   = 185
const height  = 278
const hOffset =  18
const qOffset =  18
const kOffset =  35


const divs = Array.from(document.getElementsByTagName("div"))
const button = document.getElementsByTagName("button")[0]
const h2 = document.getElementsByTagName("h2")[0]
button.addEventListener("click", doTrick)

const topLefts = {
  JH: [ 2,                         2],
  QH: [ 2,                         qOffset + width],
  KH: [ 2,                         kOffset + width * 2],

  JD: [ hOffset + height,         2],
  QD: [ hOffset + height,         qOffset + width],
  KD: [ hOffset + height,         kOffset + width * 2],

  JC: [ hOffset * 2 + height * 2, 2],
  QC: [ hOffset * 2 + height * 2, qOffset + width ],
  KC: [ hOffset * 2 + height * 2, kOffset + width * 2],
  
  JS: [ hOffset * 3 + height * 3, 2],
  QS: [ hOffset * 3 + height * 3, qOffset + width],
  KS: [ hOffset * 3 + height * 3, kOffset + width * 2]
}

const pairs = [
  shuffle(["JH", "JD"]),
  shuffle(["QH", "QD"]),
  shuffle(["KH", "KD"]),
  shuffle(["JC", "JS"]),
  shuffle(["QC", "QS"]),
  shuffle(["KC", "KS"]),
]


function dealCards(phase) {
  // if (phase) { // remove one card
  //   divs[0].style.display = "none"
  // } else {
  //   divs[0].style.display = ""
  // }

  const fiveRandomPairs = shuffle(pairs).slice(1)
  divs.forEach(( div, index ) => {
    const card = fiveRandomPairs[index][phase]
    const [ top, left ] = topLefts[card]
    div.style.backgroundPosition = `-${left}px -${top}px`
    div.style.backgroundImage = "url(img/facecards.webp)"
    div.style.borderWidth = "0"

  })

  if (phase) { // turn over one card
    const random = Math.floor(Math.random() * 5)
    const div = divs[random]
    div.style.backgroundImage = "url(img/bg.gif)"
    div.style.backgroundPosition = "center"
    div.style.borderWidth = "3px"

    h2.textContent = "Check to make sure: your card is gone..."
  } else {
    h2.textContent = " "
  }
}


let phase = 0
dealCards(phase)


function doTrick(param) {
  phase = !phase + 0
  dealCards(phase)
  button.textContent = [
    "Shuffle and Hide Your Card",
    "Play again with different cards"
  ][phase]
}


function shuffle (a) {
  let ii = a.length

  while (ii) {
    const jj = Math.floor(Math.random() * ii)
    ii -= 1;
    [a[ii], a[jj]] = [a[jj], a[ii]]
  }

  return a // for chaining
}