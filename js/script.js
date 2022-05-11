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

for (let i = 0; i <skills.length; i++){
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