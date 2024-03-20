// JavaScript code for form validation on login page
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["password"].value;
  if (x == "" || y == "") {
    alert("Please enter the username and password");
    return false;
  }else if ((x.length > 4 && x.length < 13) && (y.length > 4 && y.length < 13)) {
      makeCookies();
    } else{
      alert("Username and password must be between 5 and 12 characters");
    }
}
// JavaScript code for form validation on signup page
function validatesignupform() {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var x = document.forms["myForm1"]["name"].value;
  var y = document.forms["myForm1"]["email"].value;
  var z = document.forms["myForm1"]["password"].value;
  if (x == "" || y == "" || z == "") {
    alert("Please enter all the fields");
    return false;
  }else if (!regName.test(x)){
    alert('Invalid name given.');
    } else if (z.length > 4 && z.length < 13) {
      makeCookies();
    }
    else{
      alert("Username and password must be between 5 and 12 characters");
    }
   
}
