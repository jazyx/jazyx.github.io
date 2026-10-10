/**
 * assets/script.js
 */


let userName = ""
let guilty = false

const story = document.getElementById("story")
const checkIfGuilty = (choice) => choice.guilty === undefined
                               || choice.guilty === guilty;

fetch('./storyMap.json')
.then(raw => raw.json())
.then(tellStory)

  
  
function tellStory(storyMap) {
  function showScene(key) {
    const step = storyMap[key]
    const { title, text, action, choices } = step

    if (title) {
      const h = document.createElement("h1")
      h.textContent = title
      story.append(h)
      guilty = false
    }

    const line = text.split("\n\n")
    line.forEach(line => {
      const p = document.createElement("p")
      p.textContent = line.replaceAll("%s", userName)
      story.append(p)
    })
    if (action) {
      perform(action)
    }

    showChoices(choices, action)

    story.scrollTop = story.scrollHeight
  }

  function showChoices(choices, action) {
    if (action && !choices) {
      return
    }
    
    if (!choices) {
      choices = [{
        "text": "That's what happend in one universe. Play again?",
        "action": "reload"
      }]
    }
    choices = choices.filter(checkIfGuilty)
    if (!choices.length) {
      choices = [{
        "text": "Play again?",
        "action": "reload"
      }]
    }

    const div = document.createElement("div")
    choices.forEach(choice => {
      const { text, next, action, color="#090" } = choice
      const button = document.createElement("button")
      button.textContent = text
      button.onclick = ({ target }) => {
        target.style.backgroundColor = color
        target.style.borderColor = color
        target.style.borderStyle = "inset"
        div.classList.add("disabled")
        if (action) {
          return perform(action)
        }
        showScene(next)
      }
      div.append(button)
    })
    story.append(div)
  }

  function perform(action) {
    switch (action) {
      case "enterName": {
        const form = document.createElement("form")
        const span = document.createElement("span")
        span.textContent = "Enter username:"
        const input = document.createElement("input")
        input.type = "text"
        form.onsubmit = event => {
          event.preventDefault()
          if (userName) { return }
          userName = input.value || "Nameless One"
          showScene("audience")
        }
        form.append(span)
        form.append(input)
        story.append(form)  
        
        input.focus()   
        break
      }

      case "steal":
        return (guilty = true)

      case "reload":
        return location.reload()
    }
  }

  showScene("start")
}