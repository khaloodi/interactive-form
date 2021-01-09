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
    if (e.target.value === 'paypal') {
        paypal.style.display = ""
        creditCard.style.display = "none"
        bitcoin.style.display = "none"
    } else if (e.target.value === 'credit-card') {
        paypal.style.display = "none"
        creditCard.style.display = ""
        bitcoin.style.display = "none"
    } else if (e.target.value === 'bitcoin') {
        paypal.style.display = "none"
        creditCard.style.display = "none"
        bitcoin.style.display = ""
    }
})

// form validation
const form = document.querySelector('form')
const email = document.getElementById('email')

function nameValidator() {
    const nameValue = name.value
    console.log('Name value is: ', `${nameValue}`)

    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue)
    return nameIsValid
}

function emailValidator() {
    const emailValue = email.value
    console.log('Email value is: ', `${emailValue}`)

    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue)
    return emailIsValid
}

function activitiesValidator() {
    const activitiesIsValid = totalCost > 0
    console.log((`Activities section validation test evaluates to ${activitiesIsValid}`))
    return activitiesIsValid
}

function paymentValidator() {
    const paymentIsValid = payment.value === 'credit-card' ? true : false
    console.log((`Payment section validation test evaluates to ${paymentIsValid}`))
    return paymentIsValid
}

function zipcodeValidator() {
    const zipcode = document.getElementById('zip').value
    const zipcodeIsValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode)
    console.log((`Zipcode value is: ${zipcode}`))
    return zipcodeIsValid
}

function cvvValidator() {
    const cvv = document.getElementById('cvv').value
    const cvvIsValid = /^[0-9]{3,4}$/.test(cvv)
    console.log((`CVV value is: ${cvv}`))
    return cvvIsValid
}



form.addEventListener('submit', e => {
    if (!nameValidator()) {
        console.log('Name validator prevented submission')
    }

    if (!emailValidator()) {
        console.log('Email validator prevented submission')
    }

    if (!activitiesValidator()) {
        console.log('Activities validator prevented submission')
    }

    if (!paymentValidator()) {
        console.log('Activities validator prevented submission')
    }

    if (!zipcodeValidator()) {
        console.log('Zipcode validator prevented submission')
    }

    if (!cvvValidator()) {
        console.log('CVV validator prevented submission')
    }

    e.preventDefault()
})