
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8215485543887410"
     crossorigin="anonymous"></script>

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  // Select the arrow element by its id
  let arrow = document.getElementById("arrow");
  
  // Add a click event listener to the arrow element
  arrow.addEventListener("click", function() {
    // Scroll the page to the top
    window.scrollTo(0, 0);
  });
