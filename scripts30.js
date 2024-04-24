// JavaScript code for the e-learning website

// Function to handle click event on course links
function handleCourseClick(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Get the course title from the clicked link
    var courseTitle = event.target.innerText;
    
    // Display a confirmation message
    var confirmation = confirm("Do you want to enroll in the course: " + courseTitle + "?");
    
    // If user confirms, redirect to course page
    if (confirmation) {
        window.location.href = event.target.href;
    }
}

// Attach click event listeners to course links
var courseLinks = document.querySelectorAll('.course a');
courseLinks.forEach(function(link) {
    link.addEventListener('click', handleCourseClick);
});
