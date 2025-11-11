// Animate section fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(40px)";
        section.style.transition = "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)";
    });

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

// Animate nav links with a staggered fade-in and slight slide
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li");
    navLinks.forEach((li, i) => {
        li.style.opacity = 0;
        li.style.transform = "translateY(-20px)";
        li.style.transition = "opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)";
        setTimeout(() => {
            li.style.opacity = 1;
            li.style.transform = "translateY(0)";
        }, 200 + i * 120);
    });
});