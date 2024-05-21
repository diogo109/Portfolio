

function emailSend(){
  var submitButton = document.querySelector("input[type='submit']");
  submitButton.disabled = true;
  submitButton.value = "Sending Email...";
	var params = {
    name: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
  const serviceID = "service_vy62w0j";
const templateID = "template_od330hr"

emailjs.send(serviceID, templateID, params)
                .then(
                    res => {
                        console.log(res);
                        document.getElementById("contact_form").reset();
                    }
                )
                .catch(err => {
                    console.error(err);
                })
                .finally(() => {
                  submitButton.disabled = false;
                  submitButton.value = "Send Email";
              });
}

