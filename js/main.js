
const navbar = document.getElementById('navbar')
const overlay = document.getElementById('overlay')
const hamburger = document.getElementById('hamburger')
let menuOpened = false


function openNavBar() {
    menuOpened = true
    overlay.style.display = 'block'
    navbar.style.width = '250px'
}

function closeNavBar() {
    const hamburger = document.getElementById('hamburger')
    menuOpened = false
    overlay.style.display = 'none'
    navbar.style.width = '0px'
}

hamburger.addEventListener('click', function() {
    if (!menuOpened) {
        openNavBar()
    }

})

overlay.addEventListener('click', function() {
    if (menuOpened) {
        closeNavBar()
    }

})