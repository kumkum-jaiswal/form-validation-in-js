function fun1(){
    let c = document.getElementById('num1').value ;
    let d = document.getElementById('num2').value ;
    
    if(c=="" ){
    alert("please fill all the fields number1");
    document.getElementById('num1').focus() ;
    return false;
    }
   else if(d==""){
        alert("please fill all the fields number2");
        document.getElementById('num2').focus() ;
        return false;
        }
    else{
        var a= parseInt(c);
        var b= parseInt(d);
        alert(a+b)
    }
 }