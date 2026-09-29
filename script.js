document.addEventListener("DOMContentLoaded", () => {

    /*
     * Smooth scrolling
     */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", event => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /*
     * Mobile navigation
     */

    const mobileButton =
        document.querySelector(".mobile-menu");

    const navbar =
        document.querySelector(".navbar");

    if (mobileButton && navbar) {

        mobileButton.addEventListener("click", () => {

            navbar.classList.toggle("mobile-open");

        });

    }

});
