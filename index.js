// // document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count  = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let totalCount = count + " - "
    saveEl.textContent += totalCount
    countEl.innerText = 0
    count = 0
}
