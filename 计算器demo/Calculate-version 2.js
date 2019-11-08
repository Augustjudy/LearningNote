//显示计算过程
function get(num){
    var showingbox = document.getElementById("show");
    showingbox.value+=num;
}

//清零
var cc = document.getElementById("clear");
function clear(){
     document.getElementById("show").value = "";
}
cc.addEventListener("click",clear,false);

//回删
var dd = document.getElementById("delete");
function backone(){
    var x = document.getElementById("show");
    x.value = x.value.substring(0,x.value.length-1);
}
dd.addEventListener("click",backone,false);

//计算
var result = document.getElementById("cal");
function calculate(){
    var x = 0;
    x = document.getElementById("show").value;
    document.getElementById("show").value = eval(x);  //系统函数eval，将()里面的表达式进行计算
}
result.addEventListener("click",calculate,false);

//实时显示时间
function showTime(){
    var today = new Date ();
    var y = today.getFullYear();
    var M = today.getMonth()+1;
    var d = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    m = checktime(m);
    s = checktime(s);
    var week = today.getDay();
    var w = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
    document.getElementById("time").innerHTML = y+"年"+M+"月"+d+"日"+"</br>"+h+":"+m+":"+s+"  "+w[week];
    setTimeout("showTime()",1000);
}   

//更新
function checktime(i){
    if(i<10){
        i = "0"+i;
    }
    return i;
}
window.onload = function(){
    showTime();
};