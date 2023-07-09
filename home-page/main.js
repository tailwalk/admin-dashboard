const nav = document.querySelector('ul')
const navButton = document.querySelector('.hamburger') 

navButton.addEventListener('click', showSlider)

function showSlider(){
   if(nav.classList.contains('visible')){
    nav.classList.toggle('visible')
    navButton.style.setProperty('--beforeDisplay', 'block')
    navButton.style.setProperty('--rotate', '0deg')
    navButton.style.setProperty('--afterRotate', '0deg')
    navButton.style.setProperty('--bottom', '-10px')
    navButton.style.setProperty('--top', '-9px')
   }else{
    nav.classList.toggle('visible')
    navButton.style.setProperty('--beforeDisplay', 'none')
    navButton.style.setProperty('--rotate', '135deg')
    navButton.style.setProperty('--afterRotate', '-270deg')
    navButton.style.setProperty('--bottom', '0px')
    navButton.style.setProperty('--top', '0px')
   }
}