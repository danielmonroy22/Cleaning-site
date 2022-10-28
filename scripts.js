
// Home-page section
const homeSection = document.querySelector('.home-page');
// NAVBAR VARIABLES
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.sidenav');
const dropdwonactive = document.querySelector('main');
const BookNowButton = document.getElementById('bookNowBtn');
const bookNowLink = document.getElementById('BookNowButtonNavbar');
// Hero Section Variables
const wrapper = document.querySelector('.wrapper');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    if (menuLinks.className === 'sidenav active') {
        // dropdwonactive.style.marginLeft = '160px';

        dropdwonactive.style.transition = ' all 0.5s ease-out';


    }
    else {
        dropdwonactive.style.marginLeft = '0px';
    }
};

menu.addEventListener('click', mobileMenu);

// Book Now Button
const bookNowEvent = () => {
    wrapper.classList.toggle('active');

}
const HomePage = () => {
    wrapper.className = 'wrapper';

}

BookNowButton.addEventListener('mouseover', bookNowEvent);
BookNowButton.addEventListener('mouseleave', HomePage)
bookNowLink.addEventListener('mouseover', bookNowEvent);

bookNowLink.addEventListener('mouseleave', HomePage)
// home page event listener




// FORM VARIABLES
var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");



var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");



var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");


var form_2_progessbar = document.querySelector(".form_2_progessbar");


var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");


// FORM EVENT LISTENERS

form_1_next_btn.addEventListener("click", function () {
    form_1.style.display = "none";
    form_2.style.display = "block";

    form_1_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function () {
    form_1.style.display = "block";
    form_2.style.display = "none";

    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function () {

    modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function () {
    modal_wrapper.classList.remove("active");
})


