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
console.log(themeOptions)

design.addEventListener("change", e => {
    color.style.display = "inline-block"

    if (e.target.value === "js puns") {
        console.log(e.target.value)
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