var myVar;
function myfunc() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader-container").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
(function () {
    "use strict";
    /*
     * Form Validation
     */
  
    // Fetch all the forms we want to apply custom validation styles to
    const forms = document.querySelectorAll(".needs-validation");
    const result = document.getElementById("result");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
  
            form.querySelectorAll(":invalid")[0].focus();
          } else {
            /*
             * Form Submission using fetch()
             */
  
            const formData = new FormData(form);
            event.preventDefault();
            event.stopPropagation();
            const object = {};
            formData.forEach((value, key) => {
              object[key] = value;
            });
            const json = JSON.stringify(object);
            result.innerHTML = "Please wait...";
  
            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            })
              .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-green-500");
                } else {
                  console.log(response);
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-red-500");
                }
              })
              .catch((error) => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
              })
              .then(function () {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                  result.style.display = "none";
                }, 5000);
              });
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
 
const nav = document.getElementById("nav");
const navMenu = document.getElementById("nav_menu");
const navClose = document.getElementById("nav_close");
function show() {
 nav.style.height = "100vh";
 navMenu.style.opacity = "0";
}
function hide() {
 nav.style.height = "0vh";
 navMenu.style.opacity = "3";
 
}
document.addEventListener('DOMContentLoaded', function() {
    var themeButton = document.getElementById('themeButton');
    var con =  document.getElementById('container');
    var body = document.getElementById("body");
  
    themeButton.addEventListener('click', function() {
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');

        
      } else {
        body.classList.add('dark-theme');
        con.style.backgroundColor = "#333";
        con.style.color = "white";
        
      }
    });
  });