const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

// toggleMenu.addEventListener('click', ()=>{
//     navLinks.classList.toggle("active")
// })
toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    console.log("clicked")
    console.log(navLinks.classList)
})

const skills = document.querySelectorAll(".about-skills-skill")
const skillIcons = document.querySelectorAll(".skill-icon")

for (let i = 0; i < skills.length; i++) {
    skills[i].addEventListener("mouseenter", () => {
        console.log("mouseenter")
        skills[i].classList.add("hovered")
        skillIcons[i].classList.add("white-icon")
    })
    skills[i].addEventListener("mouseleave", () => {
        skills[i].classList.remove("hovered")
        skillIcons[i].classList.remove("white-icon")
    })
}

const body = document.querySelector("body")
const themeDiv = document.querySelector(".theme-icon")
const themeIcon = document.querySelector("#change-theme-icon")

themeDiv.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
    let currentTheme = localStorage.setItem("theme", body.classList)
    if (themeIcon.classList.contains("fa-moon")) {
        themeIcon.classList.remove("fa-moon")
        themeIcon.classList.add("fa-sun")
    }
    else if (themeIcon.classList.contains("fa-sun")) {
        themeIcon.classList.remove("fa-sun")
        themeIcon.classList.add("fa-moon")
    }
    console.log(currentTheme)
})

document.addEventListener("DOMContentLoaded", () => {
    theme = localStorage.getItem("theme")
    if (theme){
        themeIcon.className = "fa-solid fa-sun"
        body.classList.add("dark-theme")
    }
})