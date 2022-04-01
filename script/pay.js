var cartad = JSON.parse(localStorage.getItem("cartadd"));

var total = cartad.reduce(function(sum,elem){
    return sum + elem.rs;

    
},0)

document.querySelector("#pas").innerText= total;
document.querySelector("#pas1").innerText= total+55;
document.querySelector("#pas2").innerText= total+55;
document.querySelector("#pas4").innerText=  total +55;


cartad.map(function(elem,index){
      document.querySelector("#jol").innerText=elem.name;
})

localStorage.setItem("cartds",JSON.stringify(cartad));