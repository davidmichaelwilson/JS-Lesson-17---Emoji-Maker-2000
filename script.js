const myEmojis = ["🎈", "🦆", "💩"]


// ===== PRACTICE 1.1 =====
// for (let i = 0; i < myEmojis.length; i++) {
//   console.log(myEmojis[i])
// }

    // === OR ALTERNATIVE ===

// for (item of myEmojis) {
//   console.log(item)
// }


// ===== PRACTICE 1.2 =====
const emojiBank = document.getElementById("emoji-element")

function displayEmojis() {
for (let i = 0; i < myEmojis.length; i++) {
  const emoji = document.createElement("span")
  emoji.textContent = myEmojis[i]
  emojiBank.append(emoji)
  
  }
}  

displayEmojis()


const pushButton = document.getElementById("push-button")
pushButton.addEventListener("click", function() {
	const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    emojiBank.innerHTML = ""
    displayEmojis()
      console.log(emojiInput.value)
    }
})

// ===== PRACTICE 1.3 =====
const unshiftButton = document.getElementById("unshift-button")
unshiftButton.addEventListener("click", function() {
  const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
      myEmojis.unshift(emojiInput.value)
      emojiInput.value = ""
      emojiBank.innerHTML = ""
      displayEmojis()
        console.log(emojiInput.value)
    }
  
})

// ===== ADDITIONAL PRACTICE =====

const shiftButton = document.getElementById("shift-button")
shiftButton.addEventListener("click", function() {
  const emojiInput = document.getElementById("emoji-input")
      myEmojis.shift()
      emojiInput.value = ""
      emojiBank.innerHTML = ""
      displayEmojis()
  
})

const popButton = document.getElementById("pop-button")
popButton.addEventListener("click", function() {
    const emojiInput = document.getElementById("emoji-input")
    myEmojis.pop()
    emojiInput.value = ""
    emojiBank.innerHTML = ""
    displayEmojis()
})



// ===== ORIGINAL =====
// const emojiBank = document.getElementById("emoji-element")

// console.log(emojiBank)

// for (let i = 0; i < myEmojis.length; i++) {
//     const emoji = document.createElement('span')
//     emoji.textContent = myEmojis[i]
//     emojiBank.append(emoji)
// }


