function showForm(person){
    document.getElementById("userform").style.display='none';
    document.getElementById("adminform").style.display='none';
    if(person=='user'){
        document.getElementById("userform").style.display='block';        
    }
    else{
        document.getElementById("adminform").style.display='block';
}}
function login(person){
    if(person==='user'){
    const useremail=document.getElementById('useremail').value;
    const password=document.getElementById('userpassword').value;
    if(useremail==="user@123.com" && password==="1234"){
        window.location.href="home.html";
    }
    else{
        alert("Invalid User Credentials!");
    }
    return false;}
    else{
    const adminemail=document.getElementById('adminemail').value;
    const password=document.getElementById('adminpassword').value;
    if(adminemail==="admin@123.com" && password==="1234"){
        window.location.href="adminhome.html";
    }
    else{
        alert("Invalid Admin Credentials!");

    }
    return false;
}}