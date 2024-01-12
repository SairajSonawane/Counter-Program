// document.getElementById("myH1").textContent="SJDGAIUS";
// document.getElementById("myp").textContent="s";

// let x;
// x=10;
// console.log(typeof x);

// let firstname="sairaj";
// console.log(`you name is ${firstname}`);

// let name="sairraj";
// let age=21;
// document.getElementById("myp").textContent = name;
// document.getElementById("p1").textContent = age;

// let student = 30;
// student**=2;
// alert(student);
//  let result= 1+2*3+16;
//  alert(result);

// let username = prompt("what is your name?");
// console.log(`hello ${username}`);
// let username;
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("text").value;
//     document.getElementById("myid").textContent=`helo ${username}`;
// }

// let age=window.prompt("what ur age");
// age=Number(age);
// age+=1;
// alert(`ur age is ${age}`);

// let x="21";
// let y="apple";
// let z="chalore"

// x=Number(x);
// y=Number(y);
// z=Number(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

const pi=3.14;
let radius;
let circumference;

// radius=window.prompt("enter the radius");
// radius=Number(radius);
// circumference=28*pi*radius;
// console.log(circumference);

// document.getElementById("mysubmit").onclick=function(){
    
//     radius=document.getElementById("text").value;
//     radius=Number(radius);
//     circumference= 2*pi*radius;
//     document.getElementById("h3").textContent=circumference + " cm";
// }

const decrease= document.getElementById("decrease");
const increase= document.getElementById("increase");
const reset = document.getElementById("reset");
let count=0;
const number=document.getElementById("number");

increase.onclick=function(){
    count++;
    number.textContent=count;
}
decrease.onclick=function(){
    count--;
    number.textContent=count;
}
reset.onclick=function(){
    count=0;
    number.textContent=count;
}
