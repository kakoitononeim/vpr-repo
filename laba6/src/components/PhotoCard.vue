<script setup lang="ts">

import type { Photo } from '../types'

import { useGalleryStore } from '../stores/useGalleryStore'

const galleryStore = useGalleryStore()

defineProps<{
    photo: Photo
}>()

const emit = defineEmits<{
    (e: 'open-lightbox', url: string): void
}>()

</script>

<template>

    <div class="card">

        <img
            :src="photo.url"

            :alt="photo.title"

            @click="
                emit('open-lightbox', photo.url)
            "
        >

        <h2>
            {{ photo.title }}
        </h2>

        <p>
            {{ photo.description }}
        </p>

        <p>
            Type:
            {{ photo.type }}
        </p>

        <p>
            Price:
            ${{ photo.price }}
        </p>

        <RouterLink
            :to="'/photo/' + photo.id"
        >
            Details
        </RouterLink>

        <button
            @click="
                galleryStore.addToFavorites(photo)
            "
        >
            Add to Favorites
        </button>

    </div>

</template>

<style scoped>

img {

    cursor: pointer;
}

button {

    margin-top: 10px;
}

</style>