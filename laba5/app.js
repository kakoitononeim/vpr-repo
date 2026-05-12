import PhotoCard from "/components/PhotoCard.js";

const { createApp } = Vue;

createApp({

    components: {
        PhotoCard
    },

    data() {

        return {

            currentIndex: 0,

            lightboxOpen: false,

            photos: [

                {
                    title: "Portrait - $10",

                    type: "portrait",

                    description:
                        "captures personality and emotions.",

                    src: "img1.jpg",

                    alt: "Portrait photo",

                    caption:
                        "Example of portrait photography",

                    style: "Classic portrait",

                    lighting: "Studio light",

                    price: "$10"
                },

                {
                    title: "Landscape - $15",

                    type: "landscape",

                    description:
                        "captures nature and scenery.",

                    src: "img2.jpg",

                    alt: "Landscape photo",

                    caption:
                        "Example of landscape photography",

                    style: "Landscape",

                    lighting: "Natural light",

                    price: "$15"
                }

            ]
        }
    },

    methods: {

        openLightbox(index) {

            this.currentIndex = index;

            this.lightboxOpen = true;
        },

        closeLightbox() {

            this.lightboxOpen = false;
        },

        closeOnBackground(event) {

            if (
                event.target.classList.contains(
                    "lightbox"
                )
            ) {
                this.closeLightbox();
            }
        },

        nextImage() {

            this.currentIndex =
            (this.currentIndex + 1)
            % this.photos.length;
        },

        prevImage() {

            this.currentIndex =
            (this.currentIndex - 1 + this.photos.length)
            % this.photos.length;
        },

        handleKeydown(event) {

            if (!this.lightboxOpen) return;

            if (event.key === "Escape") {

                this.closeLightbox();
            }

            if (event.key === "ArrowRight") {

                this.nextImage();
            }

            if (event.key === "ArrowLeft") {

                this.prevImage();
            }
        }
    },

    mounted() {

        document.addEventListener(

            "keydown",

            this.handleKeydown
        );
    }

}).mount("#app");