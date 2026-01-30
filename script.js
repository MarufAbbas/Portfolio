// UPDATE YEAR DYNAMICALLY IN FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

// Add a small greeting alert when the page loads
window.onload = function () {
    console.log("Welcome to Maruf's Portfolio 🤖")
};