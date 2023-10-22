//time
const today = new Date()
const [month, day, year] = [
    today.getMonth(),
    today.getDate(),
    today.getFullYear(),
]
let time = document.querySelector(".day").textContent = ` : ${year} - ${day} - ${month + 1} `

const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector("#list-container")


const add = document.querySelector('.add').addEventListener('click', function () {

    if (inputBox.value === '') { }
    else {
        let li = document.createElement('li');
        li.textContent = inputBox.value
        listContainer.appendChild(li)
        const span = document.createElement("span")
        span.textContent = "X"
        li.appendChild(span)
    }
    inputBox.value = ''
    save()
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        save()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        save()
    }
}, false)

function save() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function show() {
    listContainer.innerHteTML = localStorage.getItem("data")
}
show()