const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger")
const cross = document.querySelector(".header__cross")
const burgerButton = document.querySelector(".header__burger-button")
const menu = document.querySelector(".header__menu")
const body = document.querySelector("body")
const dropItems = document.querySelectorAll(".dropdown")

if (window.innerWidth < 768) {
    header.classList.add('scroll')
} 

window.onscroll = function() {
    if (window.innerWidth > 768) {
        scrollFunction()
    } 
}

function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            header.classList.add('scroll')
            burger.classList.remove('hidden')
            cross.classList.add('hidden')
        } else {
            header.classList.remove('scroll')
            burger.classList.add('hidden')
            header.classList.remove('menu-active')
        }
}  

burgerButton.onclick = function(event) {menuToggle()}

function menuToggle() {
    for (let item of dropItems) {
        item.classList.remove('dropdown-active')
    }
    if (cross.classList.contains('hidden')) {
        burger.classList.add('hidden')
        cross.classList.remove('hidden')
        header.classList.add('menu-active')
        body.classList.add('disabled')
        for (let item of dropItems) {
            item.addEventListener('click', dropdown)
        }
    } else {
        burger.classList.remove('hidden')
        cross.classList.add('hidden')
        header.classList.remove('menu-active')
        body.classList.remove('disabled')
        for (let item of dropItems) {
            item.removeEventListener('click', dropdown)
        }
    }
}

function dropdown(event) {
    event.preventDefault()
    if (event.target.parentElement.classList.contains('dropdown-active')) {
        event.target.parentElement.classList.toggle('dropdown-active')
        return
    }
    for (let item of dropItems) {
        item.classList.remove('dropdown-active')
    }
    event.target.parentElement.classList.add('dropdown-active')
}
