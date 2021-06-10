//pip3 install flask && python3 server.py
//git add -A asa adaugam tot
//git push
//npm install now -g pentru a instala cite mai incolo apoi scriem now apoi dinou now si iar now  --prod ca sa facem deploy la changes


//Step 1 select the form with javascript 
let form=document.querySelector("form");
//step 2 atach the function send to the form submit event
form.onsubmit=send
//step 3 declace the fuction send and call it
function send(){//with e we prevent that the page wil lrefresh afer we introduce the email
  //  e.preventDefault()
alert ("ati apasat subimt")
sendEmail()
}
//step 4 Get the email from the imput 
//send the client mail to you r mail
//thank the client
function sendEmail(){
    email =document.querySelector("input")
    alert("mailu introdus este" + email.value);
    form.innerHTML="multumim"
}