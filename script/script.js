const coords = { x: 0, y: 0 }
const circles = document.querySelectorAll('.circle')
const firstCircle = document.querySelector('#uno')
const openMenu = document.querySelector('.open-menu')
const closedMenu = document.querySelector('.closed-menu')
const menu = document.querySelector('.list-menu')
const links = document.querySelectorAll('.list-menu .text a')
let isClicked = false

openMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

closedMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
});

circles.forEach(function(circle){
    circle.x = 0
    circle.y = 0
})

window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX
    coords.y = e.clientY
})

window.addEventListener("mousedown", () => {
    isClicked = true
});

window.addEventListener("mouseup", () => {
    isClicked = false
});

function animatedCircles() {
    const RADIUS = 12
    let x = coords.x
    let y = coords.y

    circles.forEach(function(circle, index) {
        circle.style.left = (x - RADIUS) + 'px'
        circle.style.top = (y - RADIUS) + 'px'

        firstCircle.style.left = x - 20 + 'px'
        firstCircle.style.top = y - 20 + 'px'

        circle.style.scale = (circles.length - index) / circles.length

        if (isClicked) {
            firstCircle.style.visibility = 'visible'
        } else {
            firstCircle.style.visibility = 'hidden'
        }

        circle.x = x
        circle.y = y

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x) * 0.3
        y += (nextCircle.y - y) * 0.3
    })

    requestAnimationFrame(animatedCircles)
}

animatedCircles()