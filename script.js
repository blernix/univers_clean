document.addEventListener("DOMContentLoaded", () => {
    // Gestion des accordéons avec transition fluide
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentElement;
            const content = parent.querySelector('.accordion-content');
            
            if (parent.classList.contains('active')) {
                content.style.maxHeight = null;
                content.style.padding = "0 10px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
            }
            parent.classList.toggle('active');
        });
    });

    // Gestion des sous-accordéons avec transition fluide
    document.querySelectorAll('.sub-accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentElement;
            const content = parent.querySelector('.sub-accordion-content');
            
            if (parent.classList.contains('active')) {
                content.style.maxHeight = null;
                content.style.padding = "0 10px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
            }
            parent.classList.toggle('active');
        });
    });

    // Gestion du changement automatique des images avant/après
    document.querySelectorAll(".prestation-image").forEach(slider => {
        let images = slider.querySelectorAll("img");
        let index = 0;

        setInterval(() => {
            images.forEach(img => img.style.opacity = "0");
            index = (index + 1) % images.length;
            images[index].style.opacity = "1";
        }, 5000); // Changement toutes les 5 secondes
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    // Gestion du menu hamburger
    menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });

    // Fermeture du menu lors du scroll
    window.addEventListener("scroll", () => {
        if (mobileNav.classList.contains("active")) {
            mobileNav.classList.remove("active");
        }
    });

    // Fermeture du menu au clic sur un lien
    document.querySelectorAll(".mobile-nav a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
        });
    });
});