let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');


function goToSecond(){
    window.location.href = "second.html";
}


function goToThird(){
  window.location.href = "third.html";
}


function subBtn(){
  let subValue = confirm("Do you want to submit the form ?");
  if (subValue) {alert("Form submitted successfully");}
}

