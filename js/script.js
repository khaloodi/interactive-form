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

// only color options for selected design
const design = document.getElementById("design")
const color = document.getElementById("shirt-colors")
color.style.display = "none"

const colorOptions = document.querySelectorAll('[data-theme]')

design.addEventListener("change", e => {
    if (e.target.value === "js puns") {
        color.style.display = "inline-block"
        return null
    } else if (e.target.value === "heart js") {
        color.style.display = "inline-block"
        return null
    }
})