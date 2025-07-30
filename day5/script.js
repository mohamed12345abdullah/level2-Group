

var screen=document.querySelector(".screen")
function clickButton(num){
    console.log(num);
    screen.innerHTML+=num
    
}


function equal(){
    var x="";
    x = screen.innerHTML;
    console.log(x);
    screen.innerHTML=eval(x);
    

}



function del(){
    console.log("clear");
    
    screen.innerHTML=""
    
}