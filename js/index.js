let btn = document.getElementById('switche');
var images = document.getElementById("img");
let store = localStorage.getItem('dark-mode');
btn.onclick = function darkMode() {
   document.body.classList.toggle('dark-mode')
   if ( document.body.classList.contains('dark-mode')) {
      images.src = '../images/moon-solid.svg';
   } else {
      images.src = '../images/sun-regular.svg';
   }
}

