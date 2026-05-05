document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.getElementById("gallery");
    const images = Array.from(gallery.querySelectorAll("img"));

    let lightbox = null;
    let currentIndex = 0;

    gallery.addEventListener("click", (event) => {
        const img = event.target.closest("img");
        if (!img) return;

        currentIndex = images.indexOf(img);
        openLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

    function openLightbox() {
        if (lightbox) return;

        lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");

        const img = document.createElement("img");
        img.src = images[currentIndex].src;

        const prevBtn = document.createElement("button");
        prevBtn.textContent = "←";
        prevBtn.classList.add("nav-btn", "prev");

        const nextBtn = document.createElement("button");
        nextBtn.textContent = "→";
        nextBtn.classList.add("nav-btn", "next");

        lightbox.appendChild(prevBtn);
        lightbox.appendChild(img);
        lightbox.appendChild(nextBtn);

        document.body.appendChild(lightbox);

        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            img.src = images[currentIndex].src;
        });

        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            img.src = images[currentIndex].src;
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    function closeLightbox() {
        if (!lightbox) return;

        document.body.removeChild(lightbox);
        lightbox = null;
    }

});