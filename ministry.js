 var myVar;
function myfunc() {
  myVar = setTimeout(showPage, 2500);
}
function showPage() {
  document.getElementById("loader-container").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
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
 
 