<script setup lang="ts">

import { ref } from 'vue'

import { useGalleryStore } from '../stores/useGalleryStore'

import PhotoCard from '../components/PhotoCard.vue'

const galleryStore = useGalleryStore()

const lightboxOpen = ref(false)

const currentImage = ref('')

function openLightbox(url: string) {

    currentImage.value = url

    lightboxOpen.value = true
}

function closeLightbox() {

    lightboxOpen.value = false
}

</script>

<template>

    <div>

        <h1>
            Gallery
        </h1>

        <!-- FILTERS -->

        <div class="filters">

            <select
                @change="
                    galleryStore.setTypeFilter(
                        ($event.target as HTMLSelectElement).value
                    )
                "
            >

                <option value="all">
                    All Types
                </option>

                <option value="portrait">
                    Portrait
                </option>

                <option value="landscape">
                    Landscape
                </option>

                <option value="wedding">
                    Wedding
                </option>

                <option value="street">
                    Street
                </option>

            </select>

            <select
                @change="
                    galleryStore.setPriceFilter(
                        ($event.target as HTMLSelectElement).value
                    )
                "
            >

                <option value="all">
                    All Prices
                </option>

                <option value="low">
                    Under $10
                </option>

                <option value="medium">
                    $10 - $20
                </option>

                <option value="high">
                    Above $20
                </option>

            </select>

            <button
                @click="
                    galleryStore.toggleFavoritesFilter()
                "
            >

                {{
                    galleryStore.showFavoritesOnly
                        ? 'Show All'
                        : 'Favorites Only'
                }}

            </button>

        </div>

        <!-- GALLERY -->

        <div class="gallery">

            <PhotoCard

                v-for="photo in galleryStore.filteredPhotos"

                :key="photo.id"

                :photo="photo"

                @open-lightbox="openLightbox"
            />

        </div>

        <!-- LIGHTBOX -->

        <div
            v-if="lightboxOpen"

            class="lightbox"

            @click="closeLightbox"
        >

            <img
                :src="currentImage"

                alt="Lightbox image"
            >

        </div>

    </div>

</template>