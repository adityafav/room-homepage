const burger = document.querySelector("#burger");
const cross = document.querySelector("#cross");
const navbar = document.querySelector("#navbar");
const links = document.querySelectorAll("#navbar a");
const logo = document.querySelector("#logo");
const head = document.querySelector("#head");

const background_images_mobile = ["url('../images/mobile-image-hero-1.jpg')" , "url('../images/mobile-image-hero-2.jpg')" , "url('../images/mobile-image-hero-3.jpg')"];
const background_images_desktop = ["url('../images/desktop-image-hero-1.jpg')" , "url('../images/desktop-image-hero-2.jpg')" , "url('../images/desktop-image-hero-3.jpg')"];

const topleft = document.querySelector("#top-left");

const topright_active = document.querySelector("#top-right #active");
const topright_one = document.querySelector("#top-right #one");
const topright_two = document.querySelector("#top-right #two");
const topright_three = document.querySelector("#top-right #three");
const topright = [topright_one, topright_two, topright_three];

const nav_button_left_mobile = document.querySelector("#buttons-mobile #button-left");
const nav_button_right_mobile = document.querySelector("#buttons-mobile #button-right");
const nav_button_left_desktop = document.querySelector("#buttons-desktop #button-left");
const nav_button_right_desktop = document.querySelector("#buttons-desktop #button-right");


function init(){
    // navbar menu
    burger.addEventListener('click', () => {
        burger.classList.add("hidden");
        cross.classList.remove("hidden");
        navbar.style.backgroundColor = "hsl(0, 0%, 100%)";
        head.style.gridTemplateColumns = "1fr 1fr 1fr 1fr" ;
        head.style.marginLeft = "0" ;
        logo.classList.add("hidden");
        links.forEach(link => link.style.display = 'block');
    })
    cross.addEventListener('click', () => {
        burger.classList.remove("hidden");
        cross.classList.add("hidden");
        navbar.style.backgroundColor = "unset";
        head.style.marginLeft = "30%" ;
        logo.classList.remove("hidden");
        links.forEach(link => link.style.display = 'none');
    })

    // navigation buttons
    var mark = 0;
    nav_button_right_mobile.addEventListener('click', () => {
        if(mark == 2){
            mark = 0
        }
        else{
            mark += 1;
        }    
        topleft.style.backgroundImage = background_images_mobile[mark];
        topright_active.innerHTML = topright[mark].innerHTML;
    })
    nav_button_left_mobile.addEventListener('click', ()=>{
        if(mark == 0){
            mark = 2
        }
        else{
            mark -= 1;
        }    
        topleft.style.backgroundImage = background_images_mobile[mark];
        topright_active.innerHTML = topright[mark].innerHTML;
    })
    nav_button_right_desktop.addEventListener('click', ()=>{
        if(mark == 2){
            mark = 0
        }
        else{
            mark += 1;
        }    
        topleft.style.backgroundImage = background_images_desktop[mark];
        topright_active.innerHTML = topright[mark].innerHTML;
    })
    nav_button_left_desktop.addEventListener('click', ()=>{
        if(mark == 0){
            mark = 2
        }
        else{
            mark -= 1;
        }    
        topleft.style.backgroundImage = background_images_desktop[mark];
        topright_active.innerHTML = topright[mark].innerHTML;
    })
}

init();