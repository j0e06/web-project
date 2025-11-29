document.addEventListener("DOMContentLoaded", function () {

    // Select the Tracks menu item
    const tracksDropdown = document.querySelector(".dropdown-item");
    const tracksLink = document.getElementById("tracksDropdown");

    // Add click event listener
    tracksLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from jumping to top of page

        // Toggle the 'active' class on the list item
        tracksDropdown.classList.toggle("active");
    });

    // Close the dropdown if the user clicks anywhere else on the screen
    window.addEventListener("click", function (event) {
        if (!tracksDropdown.contains(event.target)) {
            tracksDropdown.classList.remove("active");
        }
    });
});