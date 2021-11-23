const navMenu = document.getElementById('nav_menu'),
toggleMenu = document.getElementById('toggle_menu'),
closeMenu = document.getElementById('close_menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})