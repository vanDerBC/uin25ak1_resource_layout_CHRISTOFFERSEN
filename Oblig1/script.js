const nav = document.querySelector("nav")

const ul = document. createElement("ul")
ul.innerHTML = resources.map(
    (resource, index) => 
    `<li>
        <button id="${index}Btn">${resource.category}</button>
    </li>`
).join("")

nav.appendChild(ul)

const buttons = document.querySelectorAll("nav button")

buttons.forEach(button => {
    button.addEventListener("click", function() {
        updateMainContent(this.textContent, this)
    })
})

const mainContent = document.getElementById("content")

function updateMainContent(category, selectedButton) {

    buttons.forEach(button => {
        button.classList.remove("selected")
    })

    selectedButton.classList.add("selected")
}