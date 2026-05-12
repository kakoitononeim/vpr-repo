<script setup lang="ts">

import { useGalleryStore } from './stores/useGalleryStore'

const galleryStore = useGalleryStore()

</script>

<template>

    <header>

        <h1>
            Photographer Portfolio
        </h1>

    </header>

    <nav>

        <RouterLink to="/">
            Home
        </RouterLink>

        <RouterLink to="/gallery">

            Gallery

            ({{ galleryStore.favoritesCount }})

        </RouterLink>

        <RouterLink to="/about">
            About
        </RouterLink>

    </nav>

    <main>

        <RouterView />

    </main>

    <footer>

        <p>
            © 2026 Photographer Portfolio
        </p>

    </footer>

</template>

<style scoped>

footer {

    text-align: center;

    padding: 20px;

    background: #111;

    color: white;

    margin-top: 40px;
}

</style>