let num =0;
let min;
let max;

document.getElementById(`submit`).onclick=function(){
min = document.getElementById(`min`).value;
max = document.getElementById(`max`).value;
num = Math.floor(Math.random()*(max-min));
document.getElementById(`num`).textContent=Number(num)+Number(min);
}