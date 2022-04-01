var jj = JSON.parse(localStorage.getItem("cartds"));

jj.map(function(elem,index){
    document.querySelector("#jol").innerText=elem.name;
});