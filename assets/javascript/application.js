console.log('ok');
 const modal = document.getElementById("myModal");
 const btn = document.getElementById("openModal");
 const span = document.getElementById("closeModal");

 btn.onclick = function() {
     modal.style.display = "block";
 }

 span.onclick = function() {
     modal.style.display = "none";
 }

 window.onclick = function(event) {
     if (event.target === modal) {
         modal.style.display = "none";
     }
 }