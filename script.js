const btnincrement=document.querySelector(".btn-increment");
const btndecrement=document.querySelector(".btn-decrement");
const number=document.querySelector("h2");
const btnchange=document.querySelector(".bg-color");
const body=document.querySelector("body");

let counter=0;

btnincrement.addEventListener('click',function(){
counter++;
number.textContent=counter;
})

btndecrement.addEventListener('click',function(){
  counter--;
})

btnchange.addEventListener('click',function(){
  number.style.backgroundColor="Red";
})

btnchange.addEventListener('click',function(){
  body.style.backgroundImage='url(goho.jpg)';
})