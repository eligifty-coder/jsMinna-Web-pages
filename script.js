const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const aside = document.querySelector("aside")
const cover =document.querySelector('.cover')
const nav = document.querySelector("nav")

function displayFn() {
   this.style.display = 'none'
   close.style.display = 'block'
   cover.style.display="block"
   aside.classList.add('show')
}
function closeFn(){
   this.style.display="none"
   hamburger.style.display="block"
   cover.style.display = 'none'
   aside.classList.remove('show')
}
hamburger.onclick = displayFn
close.onclick = closeFn
window.onscroll= function(){
   if(pageYOffset>=50){
      nav.classList.add('fixedBar')
   }else{
      nav.classList.remove('fixedBar')
   }
}