document.getElementById('currentYear').textContent = new Date().getFullYear();

// සියලුම sections සහ navigation links තෝරා ගැනීම
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Scroll කරන ප්‍රමාණය අනුව අදාළ section එක හඳුනා ගැනීම
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        // අදාළ href එක section id එක සමඟ සමාන නම් active class එක එකතු කරන්න
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});