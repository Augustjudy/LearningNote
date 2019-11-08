//获取运算符元素
var add = document.getElementById("addbtn");
var sub = document.getElementById("subbtn");
var mul = document.getElementById("mulbtn");
var div = document.getElementById("divbtn");
//获取段落元素
var show = document.getElementById("re");
//定义一个全局变量用来存放结果
var result;

//处理函数
function addtion(a,b){
    return a+b;
}
function substraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    if(b==0){
        alert("0不可以做被除数");
        return null;
    }else{
        return a/b;
    }
}
function getInputNum(){
    //获取输入框里的数字
    var shownum1 = document.getElementById("num1").value;
    var shownum2 = document.getElementById("num2").value;
    shownum1_float = parseFloat(shownum1);
    shownum2_float = parseFloat(shownum2);
}
function showResult(r){
    show.innerHTML = r;
}

//绑定元素、事件和处理函数
add.onclick = function(){
    getInputNum();
    result = addtion(shownum1_float,shownum2_float);
    showResult(result);
};
sub.onclick = function(){
    getInputNum();
    result = substraction(shownum1_float,shownum2_float);
    showResult(result);
};
mul.onclick = function(){
    getInputNum();
    result = multiplication(shownum1_float,shownum2_float);
    showResult(result);
};
div.onclick = function(){
    getInputNum();
    result = division(shownum1_float,shownum2_float);
    showResult(result);
};