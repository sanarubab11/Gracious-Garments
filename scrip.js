function validation(){
    if(document.formfill.Username.value==""){
       document.getElementById("result").innerHTML="Enter Username";
       return false;
    }
    else if(document.formfill.Username.value.length<6){
       document.getElementById("result").innerHTML="Atleast six letter";
       return false;
    }
    else if(document.formfill.Email.value==""){
       document.getElementById("result").innerHTML="Enter your email";
       return false;
    }
    else if(document.formfill.Password.value==""){
       document.getElementById("result").innerHTML="Enter your password";
       return false;
    }
    else if(document.formfil.CPassword.value.length<6){
       document.getElementById("result").innerHTML="Password must be 6.digit";
       return false;
    }
    else if(document.formfil.CPassword.value==""){
       document.getElementById("result").innerHTML="Enter confirm password";
       return false;
    }
   
    else if(document.formfill.Password.value==document.formfil.CPassword.value){
       document.getElementById("result").innerHTML=" Password does'n matched";
       return false;
    }
 }
   