;(function (){
  var red = document.getElementById("red")
  var yellow = document.getElementById("yellow")
  var blue = document.getElementById("blue")
  var redgray = document.getElementById("redgray")
  var yellowgray = document.getElementById("yellowgray")
  var bluegray = document.getElementById("bluegray")
  var cycleCheckBox = document.getElementById("cycleFocus")
  var range = document.getElementById("focus")
  var focusRange = document.getElementById("range")
  var resetButton = document.getElementById("reset")
  var colourObjectArray = getColourObjectArray()
  var delay = 20
  var redToBlue = true
  var timeOut = 0
  var maxBlur = 5

  range.oninput = changeFocus

  focusRange.oninput = changeRange
  cycleCheckBox.onchange = toggleCycle
  resetButton.onclick = reset

  function getColourObjectArray() {
    var objectArray = []

    objectArray.push(new ColourObject(red, 0))
    objectArray.push(new ColourObject(yellow, 50))
    objectArray.push(new ColourObject(blue, 100))

    objectArray.push(new ColourObject(redgray, 0))
    objectArray.push(new ColourObject(yellowgray, 50))
    objectArray.push(new ColourObject(bluegray, 100))

    return objectArray
  }

  function changeFocus(event) {
    var value = range.value

    if (event) {
      toggleCycle(false)
    }

    colourObjectArray.forEach(setFocus)

    function setFocus(object) {
      object.setFocus(value) 
    }
  }

  function ColourObject(image, focalPoint) {
    this.image = image
    this.focalPoint = focalPoint
  }

  ColourObject.prototype.setFocus = function setFocus(value) {
    var blur = Math.abs(this.focalPoint - value) // 0 - 2500
    blur = maxBlur * blur * blur / 2500  // 0 - maxBlur
    
    this.image.style["-webkit-filter"] = "blur(" + blur + "px)"
    this.image.style["filter"] = "blur(" + blur + "px)"
  }


  ColourObject.prototype.resetFocus = function resetFocus() {    
    this.image.style["-webkit-filter"] = "none"
    this.image.style["filter"] = "none"
  }

  function toggleCycle(event) {
    var on = (event && event.target) ? event.target.checked : !!event

    clearTimeout(timeOut)

    if (on) {
       cycleFocus()
    } else {
      cycleCheckBox.checked = false
      window.clearTimeout(timeOut)
      timeOut = 0
    }
  }

  function cycleFocus() {
    var value = parseInt(range.value, 10) + (redToBlue ? 1 : -1)

    if (value < 0) {
      value = 0
      redToBlue = true
    } else if (value > 100) {
      value = 100
      redToBlue = false       
    }

    range.value = value
    changeFocus()

    timeOut = window.setTimeout(cycleFocus, delay)
  } 

  function changeRange(event) {
    maxBlur = focusRange.value
    changeFocus()
  }


  function reset() {
    window.clearTimeout(timeOut)
    range.value = 50
    colourObjectArray.forEach(resetFocus)


    function resetFocus(object) {
      object.resetFocus() 
    }
  }

  // changeFocus()
  // toggleCycle(true)
})()