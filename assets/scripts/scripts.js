// toggle nav bar

    // Look for .hamburger and #menu
    var hamburger = document.querySelector(".hamburger");
    var menu = document.getElementById("menu")
    // On click
    hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Toggle class "hidden"
        menu.classList.toggle("hidden")
    });

