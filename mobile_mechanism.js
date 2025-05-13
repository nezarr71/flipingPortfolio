// This is a new JavaScript for mobile site.

const fongola = document.getElementById('fongola');
const kanga = document.getElementById('kanga');
const container = document.querySelector('.container');
console.log("Hello, world!");


fongola.addEventListener('click',()=> container.classList.add('lakisa-menu'));
kanga.addEventListener('click',()=> container.classList.remove('lakisa-menu')); 


///sideScroller component.


let scrollContainer = document.querySelector(".gallery");

let backBtn =  document.getElementById("backBtn");

let nextBtn =  document.getElementById("nextBtn");





nextBtn.addEventListener("click",()=>{
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft += 900; 
})

backBtn.addEventListener("click",()=>{
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft -= 900; 
})

//In God We Trust