
// Welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Welcome to my portfolio website!");
});

// Display current year in the footer
const footer = document.querySelector("footer");

footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()}
    My Personal Portfolio. All Rights Reserved.</p>
`;
