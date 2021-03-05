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
function postToGoogle() {
  var field1 = $("#nameField").val();
  var field2 = $("#mobField").val();
  var field3 = $("#emailField").val();
  var field4 = $("#heroInput").val()




  $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeKEpFSn9anMKaSXArhHctyQXtz_fCzgKKDxWlmtBoWUuVWOg/formResponse?",
      data: { "entry.396730978": field1, "entry.444131703": field2, "entry.1352816657": field3, "entry.444131703": field4 },
      type: "POST",
      dataType: "xml",
      success: function(d)
{
},
error: function(x, y, z)
{

window.location = "/thanks.html"


}
  });
return false;
}