

function myfun(){
    document.querySelector("#changecity").style.width="100%";
}
function myfun2(){
    document.querySelector("#changecity").style.width="0%";
}
document.addEventListener("DOMContentLoaded",() =>{
   const nav = document.querySelector(".nav");

   document.querySelector("#bar").addEventListener("click",() =>{
     nav.classList.add("nav--open");
   });

   document.querySelector(".overlay").addEventListener("click", () =>{
       nav.classList.remove("nav--open");
   })
});

function myfun3(){
    document.querySelector("#lala").innerText="dvvevaec";
}
function myfu(){
     document.querySelector("#container6").style.height="200px"
    
}