function ValidateForm(){
    var name= document.getElementById("Name").value;
    var email= document.getElementById("Email").value;
    var password= document.getElementById("pass").value;
    var cpassword= document.getElementById("cpass").value;
    var remarks=document.getElementById("Remarks").value;
    var gender= document.getElementsByName("usergender").value;
    console.log(gender);
    //var hobby= document.querySelector('.Hobbies:checked').value;
    // var city= document.getElementById("city").value;
    var regemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    var regname=/\d+$/g;
    
    if (name == ""||regname.test(name) ) {
           document.getElementById("name").innerHTML="Please enter proper name";     
        }
        else{
            document.getElementById("name").innerHTML="";
        }
    if (email == ""||!regemail.test(email)
     ) {
                document.getElementById("email").innerHTML="Please enter proper email";     
        }
        else{
            document.getElementById("email").innerHTML="";
        }
        if (password == "") {
            document.getElementById("password").innerHTML="Please enter password"; 
           
        }
        else{
            document.getElementById("password").innerHTML="";
        }
    
        if(password.length <8 || password.length>20){
            document.getElementById("password").innerHTML= "Password should be atleast 8 character long and max 20";
         
    
        }
        else{
            document.getElementById("password").innerHTML="";
        }
        
    
        if(password !== cpassword){
            document.getElementById("cpassword").innerHTML="Please enter password same as password"; 
        }
        else{
            document.getElementById("cpassword").innerHTML="";
        }
    
        if(remarks.length > 20){
            document.getElementById("remark").innerHTML="remark size should be maximum 20 characters.";
        }
        else{
            document.getElementById("remark").innerHTML="";
        }
        if(gender == false){
            document.getElementById("genders").innerHTML="remark size should be maximum 20 characters.";
        }
    
        var ele = document.getElementsByName('usergender');
                  var count = 0;
                for(i = 0; i < ele.length; i++) {
                    if(ele[i].checked){
                    count +=1; 
                    }}
                    if(count == 0){
                    document.getElementById("genders").innerHTML
                            = "gender field is required";
                            }
                            else{
                                document.getElementById("genders").innerHTML
                                = ""; 
                            }
             
                            var ele = document.getElementsByName('Hobbies');
                            var c = 0;
                          for(i = 0; i < ele.length; i++) {
                              if(ele[i].checked){
                              c +=1; 
                              }}
                              if(c == 0){
                              document.getElementById("hobby").innerHTML
                                      = "hobby field is required";
                                      }
                                      else{
                                        document.getElementById("hobby").innerHTML
                                      = "";
                                      }
    
    
    }
    