/* Expirince page JS codesurce */



console.log('portfolio.js loaded');
const fongola = document.getElementById('fongola');

const kanga = document.getElementById('kanga');

//query selector ENDS in .NAME always!
const container = document.querySelector('.genesis');

//console.log('fongola:', fongola);
//console.log('kanga:', kanga);
//console.log('genesis:', genesis);

fongola.addEventListener('click', ()=> container.classList.add('lakisa-menu'));		


kanga.addEventListener('click', ()=> container.classList.remove('lakisa-menu'));








