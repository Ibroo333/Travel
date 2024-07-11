const navMenu= document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")


if(navToggle){
    navToggle.addEventListener('click',
        function() {navMenu.classList.add('show-menu')}
    )
}

if(navClose){
    navClose.addEventListener('click',
       function(){navMenu.classList.remove('show-menu')}
    )
}


const navlink = document.querySelectorAll(".nav_link")

const linkaction = () => {
    const navMenu = document.getElementById("nav-menu")

    navMenu.classList.remove('show-menu')
}
navlink.forEach((n) => n.addEventListener('click',linkaction))



// ISSUE HAI 

const blurheader = () =>
    {const header = document.getElementById("header")
        this.blurY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')  

                     
    }

 window.addEventListener('scroll',blurheader)   



 const scrollup = 
 function() {
    const scrollup = document.getElementById("scroll-up");

    this.scrollY >= 600 ? scrollup.classList.add('show-scroll')
    : scrollup.classList.remove('show-scroll')

 }

 window.addEventListener('scroll',scrollup)



const sr = ScrollReveal({

    origin:'top',
    distance:'60px',
    duration:3000,
    delay:300,
    // reset:true



})

sr.reveal('.home_data, .explore_data, .explore_user, .footer_container')
sr.reveal('.home_card',{delay:600, distance:'100px',interval:100})
sr.reveal('.about_data, .join_image',{origin:'right'})
sr.reveal('.about_image, .join_data',{origin:'left'})
sr.reveal('.popular_card',{interval:100})

