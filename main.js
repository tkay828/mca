var myVar;
function myfunc() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader-container").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
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

const nam = document.getElementById("write");
const intro ="Comfort Acheampong";
const speed = 200;
let i = 0;
if (i < intro.length) {
    setInterval(() => {
        nam.innerHTML += intro.charAt(i);
        i++; 
    }, speed);

    }
    if (i = intro.length) {
        
        i = 0;    
} 
 
(function (){
    var submitButton = document.getElementById("submit");
    var clickButton = document.getElementById("open");
    var Dialog = document.getElementById("dialog");
    clickButton.addEventListener('click', function(){
        dialog.showModal();
    });
    submitButton.addEventListener('click',function(){
        dialog.close();
    });  
        })();
        $(document).ready(function() {
            var currentYear = new Date().getFullYear();
            var nextYear = new Date(currentYear + 0, 9, 1);
            var countdown = setInterval(function() {
              var now = new Date().getTime();
              var distance = nextYear - now;
              var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
              var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              document.getElementById("countdown").innerHTML = months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds";
              document.getElementById("currentYear").innerHTML = currentYear;
              if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("countdown").innerHTML = "Happy New Year!";
              }
            }, 1000);
          });
          if (typeof jQuery == 'undefined') {
            alert("JavaScript is disabled. Please enable JavaScript to view this page.");

          }
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
            

          