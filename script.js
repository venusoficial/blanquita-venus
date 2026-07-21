/* ==========================================================
   BLANQUITA VENUS
   SCRIPT.JS PREMIUM 5.0 FINAL
========================================================== */



/* ==========================
   MENU MOVIL
========================== */


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if(menuToggle){


menuToggle.addEventListener("click",()=>{


navLinks.classList.toggle("active");


const icon =
menuToggle.querySelector("i");



if(navLinks.classList.contains("active")){


icon.classList.remove("fa-bars");

icon.classList.add("fa-xmark");


}else{


icon.classList.remove("fa-xmark");

icon.classList.add("fa-bars");


}


});


}





document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


navLinks.classList.remove("active");


const icon =
menuToggle.querySelector("i");


icon.classList.remove("fa-xmark");

icon.classList.add("fa-bars");


});


});








/* ==========================
   ANIMACIONES SCROLL
========================== */


const elements =
document.querySelectorAll(".fade-up");



function reveal(){


elements.forEach(element=>{


const position =
element.getBoundingClientRect().top;


if(position <
window.innerHeight - 100){


element.classList.add("show");


}


});


}



window.addEventListener(
"scroll",
reveal
);



reveal();








/* ==========================
   BOTON SUBIR
========================== */


const backTop =
document.querySelector(".back-top");





window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


backTop.classList.add("show");


}else{


backTop.classList.remove("show");


}


});





if(backTop){


backTop.addEventListener("click",()=>{


window.scrollTo({


top:0,

behavior:"smooth"


});


});


}








/* ==========================
   LIGHTBOX PREMIUM 5.0
========================== */


const galleryImages =
document.querySelectorAll(
".gallery-item img"
);



const lightbox =
document.querySelector(".lightbox");



const lightboxImage =
document.querySelector(".lightbox-image");



const closeLightbox =
document.querySelector(".close-lightbox");



const nextButton =
document.querySelector(".next-image");



const prevButton =
document.querySelector(".prev-image");



const currentImage =
document.querySelector("#current-image");



const totalImages =
document.querySelector("#total-images");





let images = [];

let currentIndex = 0;






galleryImages.forEach((img,index)=>{


images.push(img.src);



img.addEventListener("click",()=>{


currentIndex=index;


openLightbox();


});



});





if(totalImages){


totalImages.textContent =
images.length;


}








function openLightbox(){



lightbox.classList.add("active");


document.body.style.overflow="hidden";



changeImage();



}







function changeImage(){



lightboxImage.style.opacity="0";



setTimeout(()=>{


lightboxImage.src =
images[currentIndex];



currentImage.textContent =
currentIndex + 1;



lightboxImage.style.opacity="1";



},150);



}









function closeBox(){



lightbox.classList.remove("active");


document.body.style.overflow="auto";


}








if(closeLightbox){


closeLightbox.addEventListener(
"click",
closeBox
);


}







/* cerrar tocando fondo */


if(lightbox){


lightbox.addEventListener(
"click",
(e)=>{


if(e.target === lightbox){


closeBox();


}


});


}









/* siguiente */


if(nextButton){


nextButton.addEventListener(
"click",
(e)=>{


e.stopPropagation();



currentIndex++;



if(currentIndex >= images.length){


currentIndex=0;


}



changeImage();



});


}








/* anterior */


if(prevButton){


prevButton.addEventListener(
"click",
(e)=>{


e.stopPropagation();



currentIndex--;



if(currentIndex < 0){


currentIndex =
images.length-1;


}



changeImage();



});


}










/* ==========================
   TECLADO PC
========================== */


document.addEventListener(
"keydown",
(e)=>{



if(!lightbox.classList.contains("active"))

return;




if(e.key==="Escape"){


closeBox();


}



if(e.key==="ArrowRight"){


nextButton.click();


}



if(e.key==="ArrowLeft"){


prevButton.click();


}



});










/* ==========================
   PREVENIR ARRASTRE
========================== */


document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener(
"dragstart",
e=>e.preventDefault()
);


});








console.log(
"Blanquita Venus Premium 5.0 Loaded ✔"
);