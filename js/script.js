const name = document.getElementById("name")
name.focus()

const jobRole = document.getElementById("title")
const otherRole = document.getElementById("other-job-role")

otherRole.style.display = "none"
jobRole.addEventListener("change", e => {
    console.log(e.target.value)
    if (e.target.value === "other") {
        otherRole.style.display = "inline-block"
    } else {
        otherRole.style.display = "none"
    }
})