const mobileBtn = document.getElementById('mobile-cta')
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById('mobile-exit')

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})


// remover navbar quando clicar no link
window.onscroll = () => {
    nav.classList.remove('menu-btn')
}