// document.addEventListener('DOMContentLoaded', function() {
    // Your existing JavaScript code here
  
      if (typeof window !== 'undefined') {
        window.addEventListener('load', function() {
          // Your main.js code here
          var popupOverlay = document.getElementById("popup-overlay");
          var popBox = document.getElementById("pop-box");
          var searchBox = document.getElementById("search-box");
          var searchBoxPopup = document.getElementById("search-box-popup");
          var cancelBtn = document.getElementById("cancelbtn");
          var menuButton = document.getElementById('menu');
          var navbarNav = document.getElementById('navbarNav');
  
          function showPopup() {
            popupOverlay.style.display = "block";
            popBox.style.display = "block";
          }
  
          function hidePopup() {
            popupOverlay.style.display = "none";
            popBox.style.display = "none";
          }
  
          if (searchBox) searchBox.addEventListener("focus", showPopup);
          if (searchBoxPopup) searchBoxPopup.addEventListener("focus", showPopup);
          if (cancelBtn) cancelBtn.addEventListener("click", hidePopup);
  
          document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
              hidePopup();
            }
          });
  
          if (popupOverlay) {
            popupOverlay.addEventListener("click", function(event) {
              if (event.target === popupOverlay) {
                hidePopup();
              }
            });
          }
  
          if (menuButton && navbarNav) {
            menuButton.addEventListener('click', function() {
              navbarNav.classList.toggle('show');
              if (navbarNav.classList.contains('show')) {
                navbarNav.style.transition = 'transform 0.8s ease';
              } else {
                navbarNav.style.transition = 'none';
              }
            });
          }
  
          // Initialize AOS
         
        });
      }
// });
