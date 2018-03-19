window.onscroll = function() {myStickyFunc()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myStickyFunc(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }
}