//alert("Connected");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");

var ts = document.getElementById("ts");

var user = document.getElementById("user");
user.addEventListener("input",function(){
    ts.textContent = user.value;
})

p1.addEventListener("click",function(){
    user.disabled = true;
    var curr = Number(document.getElementById("p1s").textContent) ;
    var curr2 = Number(document.getElementById("p2s").textContent) ;
    if(curr<Number(ts.textContent)&&curr2<Number(ts.textContent))
    document.getElementById("p1s").textContent = curr+1;
    if(curr+1===Number(ts.textContent)){
        document.getElementById("p1s").classList.add("green");
        document.getElementById("p2s").classList.add("red");
    }
})

p2.addEventListener("click",function(){
    user.disabled = true;
    var curr = Number(document.getElementById("p2s").textContent) ;
    var curr2 = Number(document.getElementById("p1s").textContent) ;
    if(curr<Number(ts.textContent)&&curr2<Number(ts.textContent))
    document.getElementById("p2s").textContent = curr+1;
    if(curr+1===Number(ts.textContent)){
        document.getElementById("p2s").classList.add("green");
        document.getElementById("p1s").classList.add("red");
    }
})

reset.addEventListener("click",function(){
    user.disabled = false;
    document.getElementById("p1s").textContent = 0;
    document.getElementById("p2s").textContent = 0;
    document.getElementById("p2s").classList.remove("green");
    document.getElementById("p1s").classList.remove("green");
    document.getElementById("p2s").classList.remove("red");
    document.getElementById("p1s").classList.remove("red");
})

