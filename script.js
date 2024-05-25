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


var buttons = document.querySelectorAll('.hire');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

var buttons = document.querySelectorAll('.services');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
      document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  });
});


const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})
const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))


const myObserver2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show-slide');
    }else{
      entry.target.classList.remove('show-slide');
    }
  });
});

const elements2 = document.querySelectorAll('.slide');
elements2.forEach((element) => myObserver2.observe(element));


const myObserver3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show_drop');
    }else{
      entry.target.classList.remove('show_drop');
    }
  });
});

const elements3 = document.querySelectorAll('.drop');
elements3.forEach((element) => myObserver3.observe(element));


let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    document.getElementById("nav").classList.add("navbar-hidden");
    document.getElementById("nav").classList.remove("navbar-show-bg");
  } else {
    document.getElementById("nav").classList.remove("navbar-hidden");
    if (currentScroll === 0) {
      document.getElementById("nav").classList.remove("navbar-show-bg");
    } else {
      document.getElementById("nav").classList.add("navbar-show-bg");
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);
