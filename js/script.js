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

const skill = document.getElementsByClassName("about-skills-skill")[0]
skill