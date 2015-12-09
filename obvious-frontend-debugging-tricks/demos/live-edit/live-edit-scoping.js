var counter = 0
console.log('outer scope')

;(function() {
    console.log('IIFE executed', ++counter, 'time')
    // >> breakpoint
    var body = document.querySelector('body')
    var isItEasy = false

    body.classList.add(isItEasy ? 'done' : 'failed')
}())
