const next = document.querySelector('.next')
const previous = document.querySelector('.previous')
const search = document.querySelector('.search input')
const collapse = document.querySelectorAll('.collapse')
const side_navbar = document.querySelector('.side-navbar')
const search_icon = document.querySelector('.search-icon')
const payment = document.querySelector('.payment')
const section = document.querySelector('.section')
const pay_icon = document.querySelector('.pay')
next.addEventListener('click',function(){
    search.classList.add('active')
    collapse.forEach((collapse) => {
        collapse.classList.add('active')
    })
    side_navbar.classList.add('active')
    next.classList.add('inactive')
    previous.classList.add('active')
})
previous.addEventListener('click',function(){
    search.classList.remove('active')
    collapse.forEach((collapse) => {
        collapse.classList.remove('active')
    })
    side_navbar.classList.remove('active')
    next.classList.remove('inactive')
    previous.classList.remove('active')

})
search.addEventListener('click',function(){
    search.classList.add('active')
    collapse.forEach((collapse) => {
        collapse.classList.add('active')
    })
    side_navbar.classList.add('active')

})
search_icon.addEventListener('click',function(){
    search.classList.add('active')
    collapse.forEach((collapse) => {
        collapse.classList.add('active')
    })
    side_navbar.classList.add('active')
})
pay_icon.addEventListener('click',function(){
    section.classList.add('inactive')
})
