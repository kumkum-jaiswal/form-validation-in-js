function fun(){
    
        let a = document.getElementById('n1').value ;
        let b = document.getElementById('n2').value ;
        let c = document.getElementById('n3').value ;
        let d = document.getElementById('n4').value ;
        let e = document.getElementById('n5').value ;
        
        if(a=="" ){
        alert("please fill name");
        document.getElementById('n1').focus() ;
        return false;
        }
       else if(b==""){
            alert("please fill last-name");
            document.getElementById('n2').focus() ;
            return false;
            }
            else if(c="10"){
           
                alert("required 10 digit")
                document.getElementById('n3').focus() ;
                return false;
              }
                else if(d==""){
                    alert("please fill email");
                    document.getElementById('n4').focus() ;
                    return false;
                    }
                    else if(e==""){
                        alert("please fill address");
                        document.getElementById('n5').focus() ;
                        return false;
                        }
       
     }
