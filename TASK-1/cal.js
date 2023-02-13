let screen=document.getElementById("os");
function dis(num){
    screen.value+=num;
}
function Calculate(){
    try{
        screen.value=eval(screen.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}
function Clear(){
    screen.value="";
}
function del(){
    screen.value=screen.value.slice(0,-1);
}
function sin(){
    screen.value=Math.sin(screen.value);
}
function cos(){
    screen.value=Math.cos(screen.value);
}
function tan(){
    screen.value=Math.tan(screen.value);
}