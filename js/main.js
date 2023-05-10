
const navbar = document.getElementById('navbar')
const navbaIitems = document.getElementById('navbar')
const overlay = document.getElementById('overlay')
const navbarItem = document.getElementsByClassName('navbar-item')
const text = document.querySelector('.what-am-i');

function openNavBar() {
    overlay.style.display = 'block'
    navbar.style.width = '250px'
}

function closeNavBar() {
    overlay.style.display = 'none'
    navbar.style.width = '0px'
}

hamburger.addEventListener('click', function() {
    openNavBar()

})

overlay.addEventListener('click', function() {
    closeNavBar()
})

for (var itemIndex = 0 ; itemIndex < navbarItem.length; itemIndex++) {
    navbarItem[itemIndex].addEventListener('click', function() {
        closeNavBar()
    })
}

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Mechatronic Engineering Student";
    }, 0);
    setTimeout(() => {
        text.textContent = "Music Producer";
    }, 4050);

    
}

textLoad();
setInterval(textLoad,8000);