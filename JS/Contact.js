function sendEmail() {

  }
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("form-group form-button").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
	Email.send({
	Host: "smtp.gmail.com",
	Username : "",
	Password : "",
	To : "",
	From : "",
	Subject : document.getElementById("name").value + " send a query via " + document.getElementById("email").value,
	Body : document.getElementById("msg").value,
	}).then(
		message => alert("mail sent successfully")
	);
	document.getElementById("email").value="";
    document.getElementById("msg").value="";
    document.getElementById("name").value="";

   }