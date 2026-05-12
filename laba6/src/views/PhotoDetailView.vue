<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useGalleryStore } from '../stores/useGalleryStore'

const route = useRoute()

const galleryStore = useGalleryStore()

const photoId = Number(route.params.id)

const photo = computed(() => {

    return galleryStore.getPhotoById(photoId)

})

</script>

<template>

    <div>

        <div v-if="photo">

            <h1>
                {{ photo.title }}
            </h1>

            <img
                :src="photo.url"
                :alt="photo.title"
            >

            <p>
                {{ photo.description }}
            </p>

            <p>
                Year:
                {{ photo.year }}
            </p>

            <p>
                Type:
                {{ photo.type }}
            </p>

            <p>
                Price:
                ${{ photo.price }}
            </p>

            <p>
                Tags:
                {{ photo.tags.join(', ') }}
            </p>

        </div>

        <div v-else>

            <h2>
                Photo not found
            </h2>

        </div>

    </div>

</template>

<style scoped>

img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
}

</style>