const burgerMenu = document.getElementById('burger');
const navMobile = document.getElementById('navbarMenu');
const heroInput = document.getElementById('heroInput');

function heroNumber(){
    heroInput.value = "+380";
}
function mobileMenu() {

    if (navMobile.style.display === "flex") {
        navMobile.style.display = "none";
      burgerMenu.classList.remove('active');
    } else {
        burgerMenu.classList.add('active');

        navMobile.style.display = "flex";
    }
  }
function smoothScroll(){
    const anchors = document.querySelectorAll('a[href*="#"]');
    console.log(anchors)
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href').substr(1)
          
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      }
}
