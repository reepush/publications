var angle = 0
var logo = document.querySelector('.home-logo')

setInterval(function() {
    angle = (angle + 20) % 360
    logo.style.transform = 'rotate(' + angle + 'deg)'
}, 100)
