// make it so that on page hole the form focuses on name input field
const name = document.getElementById("name")
name.focus()

// make it so that the other dropdown disappears unless clicked
const jobRole = document.getElementById("title")
const otherRole = document.getElementById("other-job-role")
otherRole.style.display = "none"

jobRole.addEventListener("change", e => {
    if (e.target.value === "other") {
        otherRole.style.display = "inline-block"
    } else {
        otherRole.style.display = "none"
    }
})

// only show color options for the selected design
const design = document.getElementById("design")
const color = document.getElementById("shirt-colors")
color.style.display = "none"
const themeOptions = document.querySelectorAll("select#color option")

design.addEventListener("change", e => {
    color.style.display = "inline-block"

    if (e.target.value === "js puns") {
        for (let i = 1; i < themeOptions.length; i++) {
            if (themeOptions[i].dataset.theme !== "js puns") {
                themeOptions[i].style.display = "none"
            } else {
                themeOptions[i].style.display = ""
            }
        }
    } else if (e.target.value === "heart js") {
        console.log(e.target.value)
        for (let j = 1; j < themeOptions.length; j++) {
            if (themeOptions[j].dataset.theme !== "heart js") {
                themeOptions[j].style.display = "none"
            } else {
                themeOptions[j].style.display = ""
            }
        }
    }
})

// total up the "Register for Activities" section
const activities = document.getElementById('activities')
let total = document.getElementById('activities-cost')

let totalCost = 0
activities.addEventListener("change", e => {
    let cost = +e.target.getAttribute('data-cost')

    if (e.target.checked) {
        totalCost += cost
    } else if (e.target.checked === false) {
        totalCost -= cost
    }
    total.innerHTML = `Total: $ ${totalCost}`
})

// payment info section
const payment = document.getElementById('payment')
const creditCard = document.getElementById('credit-card')
const paypal = document.getElementById('paypal')
const bitcoin = document.getElementById('bitcoin')

paypal.style.display = "none"
bitcoin.style.display = "none"

payment.value = "credit-card"
payment.children[1].selected = true
payment.addEventListener("change", e => {
    console.log(e.target.value)
})