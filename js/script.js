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
const select = document.getElementById("color")
const themeOptions = document.querySelectorAll("select#color option")

design.addEventListener("change", e => {
    color.style.display = "inline-block"
    select.firstElementChild.remove()

    if (e.target.value === "js puns") {
        for (let i = 1; i < themeOptions.length; i++) {
            if (themeOptions[i].dataset.theme !== "js puns") {
                themeOptions[i].style.display = "none"
            } else {
                themeOptions[i].style.display = ""
            }
        }
    } else if (e.target.value === "heart js") {
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

// payment.value = "credit-card"
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
    const cardNumber = document.getElementById('cc-num')
    const cardNumberIsValid = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(cardNumber)
    payment.value === 'credit-card' ? true : false

    let paymentIsValid;
    if (cardNumberIsValid && payment.value) {
        paymentIsValid = true;
    } else {
        paymentIsValid = false;
    }

    console.log((`Payment section validation test evaluates to ${paymentIsValid}`))
    return paymentIsValid
}

const zipcode = document.getElementById('zip')

function zipcodeValidator() {
    const zipcodeIsValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode.value)
    console.log((`Zipcode value is: ${zipcode.value}`))
    return zipcodeIsValid
}

function cvvValidator() {
    const cvv = document.getElementById('cvv').value
    const cvvIsValid = /^[0-9]{3,4}$/.test(cvv)
    console.log((`CVV value is: ${cvv}`))
    return cvvIsValid
}



form.addEventListener('submit', e => {
    // e.preventDefault()
    if (!nameValidator()) {
        console.log('Name validator prevented submission')
        name.parentElement.classList.add("not-valid")
        name.parentElement.classList.remove("valid")
        name.parentElement.lastElementChild.style.display = ""
        e.preventDefault()
    } else if (nameValidator()) {
        name.parentElement.classList.add("valid")
        name.parentElement.classList.remove("not-valid")
        name.parentElement.lastElementChild.style.display = "none"
    }

    if (!emailValidator()) {
        console.log('Email validator prevented submission')
        email.parentElement.classList.add("not-valid")
        email.parentElement.classList.remove("valid")
        email.parentElement.lastElementChild.style.display = ""
        e.preventDefault()
    } else if (emailValidator()) {
        email.parentElement.classList.add("valid")
        email.parentElement.classList.remove("not-valid")
        email.parentElement.lastElementChild.style.display = "none"
    }

    if (!activitiesValidator()) {
        console.log('Activities validator prevented submission')
        activities.classList.add("not-valid")
        activities.classList.remove("valid")
        activities.lastElementChild.style.display = ""
        e.preventDefault()
    } else if (activitiesValidator()) {
        activities.classList.add("valid")
        activities.classList.remove("not-valid")
        activities.lastElementChild.style.display = "none"
    }

    if (!paymentValidator()) {
        console.log('Activities validator prevented submission')
        creditCard.parentElement.classList.add("not-valid")
        creditCard.parentElement.classList.remove("valid")
            // the line below was causing the bitcoin option to be displayed on form submission
            // creditCard.parentElement.lastElementChild.style.display = ""
        e.preventDefault()
    } else if (paymentValidator()) {
        creditCard.parentElement.classList.add("valid")
        creditCard.parentElement.classList.remove("not-valid")
        creditCard.parentElement.lastElementChild.style.display = "none"
    }

    if (!zipcodeValidator()) {
        console.log('Zipcode validator prevented submission')
        zipcode.parentElement.classList.add("not-valid")
        zipcode.parentElement.classList.remove("valid")
        zipcode.parentElement.lastElementChild.style.display = ""
        e.preventDefault()
    } else if (zipcodeValidator()) {
        zipcode.parentElement.classList.add("valid")
        zipcode.parentElement.classList.remove("not-valid")
        zipcode.parentElement.lastElementChild.style.display = "none"
    }

    if (!cvvValidator()) {
        console.log('CVV validator prevented submission')
        cvv.parentElement.classList.add("not-valid")
        cvv.parentElement.classList.remove("valid")
        cvv.parentElement.lastElementChild.style.display = ""
        e.preventDefault()
    } else if (cvvValidator()) {
        cvv.parentElement.classList.add("valid")
        cvv.parentElement.classList.remove("not-valid")
        cvv.parentElement.lastElementChild.style.display = "none"
    }

    // e.preventDefault()
})

// accessibility
document.querySelectorAll('#activities input').forEach(cb => {
    cb.addEventListener('focus', e => cb.parentElement.classList.add('focus'));

    cb.addEventListener('blur', e => {
        const active = document.querySelector('.focus');
        if (active) active.classList.remove('focus');
    })
});

// error indicators