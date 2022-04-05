let admin=prompt("Enter the password", "");

if(admin=="TheMaster"){
  alert("Welcome!");
} else if(admin){
  alert("Wrong password");
} else{
  alert("Canceled");
}
