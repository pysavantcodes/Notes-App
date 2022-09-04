function add(){
    document.getElementById("addnote").style.display ="none";
    document.querySelector(".notearea").style.display ="block";
}

document.getElementById("delete").addEventListener("click", function(){
    document.getElementById("input").value = "";
})

document.getElementById("right").addEventListener("click", function(){
    document.getElementById("input").style.textAlign = "right";
})

document.getElementById("left").addEventListener("click", function(){
    document.getElementById("input").style.textAlign = "left";
})

document.getElementById("center").addEventListener("click", function(){
    document.getElementById("input").style.textAlign = "center";
})

function save(){
    
    let val = document.getElementById("input").value;
    let name = document.getElementById("name").value;
    document.getElementById("link").download = name + ".txt";
    document.getElementById("link").href = "data:text/plain;charset=utf-11,"+ encodeURIComponent(val);
    
   
}

function pop(){
    document.querySelector(".modalcont").style.display = "flex";
}

window.onclick = function(event){
    if(event.target == document.querySelector(".modalcont")){
        document.querySelector(".modalcont").style.display = "none";
    }
}