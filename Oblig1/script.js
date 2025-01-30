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
        button.classList.toggle("selected", button === selectedButton)
    })

    const filteredResources = resources.filter(resource => resource.category === category)

    mainContent.innerHTML = filteredResources.map(resource =>
        `<article>
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source =>
                    `<li><a href="${source.url}">${source.title}</a></li>`
                ).join("")}
            </ul>
        </article>`
    )   
}

const startPage = resources[0].category;
const filteredPage = Array.from(buttons).filter(button => button.textContent === startPage);
if (filteredPage.length > 0) {
    updateMainContent(startPage, filteredPage[0]);
}