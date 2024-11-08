const contact=()=>{
    const FullName=document.getElementById("FullName").value;
    const PhoneNum=document.getElementById("PhoneNum").value;
    const Email=document.getElementById("Email").value;
    const Comment=document.getElementById("Comment").value;

    const FullNameError=document.getElementById("FullNameError");
    const PhoneNumError=document.getElementById("PhoneNumError");
    const EmailError=document.getElementById("EmailError");
    const CommentError=document.getElementById("CommentError");

    let namestat=numberstat=emailstat=commentstat=false;

    if(FullName===""){
        FullNameError.innerHTML="*Name is required";
    }else if(FullName.match(/^[a-zA-Z]+$/)){
        FullNameError.innerHTML="";
        namestat=true;
    }else{
        FullNameError.innerHTML="*Name must be alphabets"
    }

    if(PhoneNum===""){
        PhoneNumError.innerHTML="*Phone number is required"
    }else if(PhoneNum.match(/^[0-9]+$/)){
        if(PhoneNum.length===10){
            PhoneNumError.innerHTML=""
            numberstat=true;
        }else{
            PhoneNumError.innerHTML="*Phone number must be 10 digits"
        }
    }else{
        PhoneNumError.innerHTML="*Phone number must be numbers"
    }

    if (Email === ""){
        EmailError.innerHTML = "*Email is required";
      }else {
        if(Email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
          emailstat = true;
        }else {
          EmailError.innerHTML = "*Email format is wrong"
        }
      }

    if(Comment===""){
        CommentError.innerHTML="*Query is required"
    }else{
        CommentError.innerHTML="";
        commentstat=true
    }

    if(namestat&&commentstat&&numberstat&&emailstat){
        return true
    }else{
        return false
    }
}