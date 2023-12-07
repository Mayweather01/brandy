// script.js

// Function to update the West African Time (WAT) with seconds
function updateDateTime() {
    const now = new Date();
    const options = {
        timeZone: 'Africa/Lagos',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit', // Include seconds
    };
    const watTime = now.toLocaleTimeString('en-US', options);
    
    document.getElementById('wat-time').textContent = watTime;
}

// Update the WAT time with seconds initially and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Function to reveal the white cloud overlay after 3 seconds
function revealCloud() {
    setTimeout(function () {
        document.querySelector('.cloud-overlay').style.opacity = 1;
    }, 3000);
}

// Reveal the white cloud overlay when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    revealCloud();
});
