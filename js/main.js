const openBtn = document.getElementById('navbar__btnOpen')
const closeBtn = document.getElementById('navbar__btnClose')
const menu = document.querySelector('.navbar__list')

openBtn.addEventListener('click',  () => {
    menu.style.display = 'block'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

const closeMenu = () => {
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeMenu)
