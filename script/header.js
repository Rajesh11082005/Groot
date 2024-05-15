document.getElementById("menu_icon").addEventListener("click",(event)=>{
    document.getElementById("nav_holder").style.right="0%";
})

const MENU_ICON = document.getElementById(REEL_DOM.id.menu_icon);
const NAV_HOLDER = document.getElementById(REEL_DOM.id.nav_holder);
const PROJECT_TRIG = document.getElementById(REEL_DOM.id.project);
const PROJECT = document.querySelector("."+REEL_DOM.class.project);
const CONVERTER_TRIG = document.getElementById(REEL_DOM.id.converter);
const CONVERTER = document.querySelector("."+REEL_DOM.class.converter);
const SET_TRIG = document.getElementById(REEL_DOM.id.set);
const LOGO = document.getElementById(REEL_DOM.id.logo);
const BEAUTIFIER_TRIG = document.getElementById(REEL_DOM.id.beautifier);
const NAV =document.querySelectorAll(REEL_DOM.class.nav);
const NAV1 =document.querySelectorAll(REEL_DOM.class.nav1);
const USER_I = document.getElementById("user");

BACK_FROM_USER.addEventListener("click",()=>{
    USER_DISPLAY.style.transform = "translateX(100%)";
})

USER_I.addEventListener("click",()=>{
    USER_DISPLAY.style.transform = "translateX(0%)";
})

MENU_ICON.addEventListener("click",()=>{
    NAV_HOLDER.style.right = "0%";
    setTimeout(()=>{
        NAV_HOLDER.focus();
    },700);
});


NAV_HOLDER.addEventListener("blur",(event)=>{
    event.target.style.right = "-100%";
})


PROJECT_TRIG.addEventListener("click",(event)=>{
    if(CURRENT_DISPLAY){
        CURRENT_DISPLAY.style.display="none";
    }
    PROJECT.style.display="block";
    // PC_PROJECT.innerHTML="";
    // get_data_from_db();
    if(document.querySelector(".nav2")){
        document.querySelector(".nav2").classList.remove("nav2");
    }
    PROJECT_TRIG.querySelector(".nav1").classList.add("nav2");
    CURRENT_DISPLAY = PROJECT;
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth>400){
        NAV_HOLDER.style.right = "-100%";
    }
});


CONVERTER_TRIG.addEventListener("click",()=>{
    initial_convert();
    
    if(CURRENT_DISPLAY){
        CURRENT_DISPLAY.style.display="none";
    }
    if(document.querySelector(".nav2")){
        document.querySelector(".nav2").classList.remove("nav2");
    }
    CONVERTER_TRIG.querySelector(".nav1").classList.add("nav2");
    CONVERTER.style.display="block";
    CURRENT_DISPLAY = CONVERTER;
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth>400){
        NAV_HOLDER.style.right = "-100%";
    }
})

BEAUTIFIER_TRIG.addEventListener("click",()=>{
    if(CURRENT_DISPLAY){
        CURRENT_DISPLAY.style.display="none";
    }
    BEAUTIFIER.style.display="block";
    CURRENT_DISPLAY = BEAUTIFIER;
    if(document.querySelector(".nav2")){
        document.querySelector(".nav2").classList.remove("nav2");
    }
    BEAUTIFIER_TRIG.querySelector(".nav1").classList.add("nav2");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth>400){
        NAV_HOLDER.style.right = "-100%";
    }
})


SET_TRIG.addEventListener("click",()=>{
    if(CURRENT_DISPLAY){
        CURRENT_DISPLAY.style.display="none";
    }
    CURRENT_DISPLAY = "";
    if(document.querySelector(".nav2")){
        document.querySelector(".nav2").classList.remove("nav2");
    }    
    SET_TRIG.querySelector(".nav1").classList.add("nav2");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth>400){
        NAV_HOLDER.style.right = "-100%";
    }
})

LOGO.addEventListener("click",()=>{
    SET_TRIG.click();
})


SET_TRIG.click();
