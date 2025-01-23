const nav = document.querySelector("nav")

const ul = document. createElement("ul")
ul.innerHTML = resources.map(
    (resource, index) => 
    `<li>
        <button id="${index}Btn">${resource.category}</button>
    </li>`
).join("")

nav.appendChild(ul)