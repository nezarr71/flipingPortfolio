/* Expirince page JS codesurce */


const fongola = document.getElementById('fongola');

const kanga = document.getElementById('kanga');

//query selector ENDS in .NAME always!
const container = document.querySelector('.genesis');

//console.log('fongola:', fongola);
//console.log('kanga:', kanga);
//console.log('genesis:', genesis);

fongola.addEventListener('click', ()=> container.classList.add('lakisa-menu'));		


kanga.addEventListener('click', ()=> container.classList.remove('lakisa-menu'));


///scroll menu

let scrollContainer = document.querySelector(".gallery");  

let backBtn = document.getElementById("backBtn");

let nextBtn = document.getElementById("nextBtn");



scrollContainer.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	scrollContainer.scrollLeft += evt.deltaY;

});


nextBtn.addEventListener("click", ()=>{
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft += 900;


})


backBtn.addEventListener("click", ()=>{
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft -= 900;


})




