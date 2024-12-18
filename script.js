// Get all tab links and content sections
var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname, event) {
    // Remove the 'active-links' class from all tab links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-links");
    }

    // Hide all tab content
    for (var content of tabcontent) {
        content.classList.remove("active-tab");
    }

    // Show the tab content corresponding to the clicked tab
    document.getElementById(tabname).classList.add("active-tab");

    // Add the 'active-links' class to the clicked tab
    // Loop through all tab links and add active class to the clicked one
    for (var tablink of tablinks) {
        if (tablink.innerText.toLowerCase() === tabname) {
            tablink.classList.add("active-links");
        }
    }
}
