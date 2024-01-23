document.addEventListener('DOMContentLoaded', function () {
    var sidemenu = document.getElementById("sidemenu");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");
    var iconElement = openBtn.querySelector('i'); // Assuming the icon is an <i> tag

    openBtn.addEventListener('click', openmenu);
    closeBtn.addEventListener('click', closemenu);

    function openmenu() {
        console.log("Opening menu");
        sidemenu.style.opacity = "1";
        sidemenu.style.pointerEvents = "auto";
        // Change the color of the icon
        iconElement.style.opacity = "0";
    }

    function closemenu() {
        console.log("Closing menu");
        sidemenu.style.opacity = "0";
        sidemenu.style.pointerEvents = "none";
        // Change the color of the icon back to its original color
        iconElement.style.opacity = "1";
    }
});
