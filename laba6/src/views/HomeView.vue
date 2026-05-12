<template>

    <section class="hero">

        <h1>
            Photographer Portfolio
        </h1>

        <p>
            Professional photography services
            for portraits, landscapes,
            weddings and street photography.
        </p>

        <RouterLink
            to="/gallery"
            class="button"
        >
            Open Gallery
        </RouterLink>

    </section>

</template>

<style scoped>

.hero {
    text-align: center;
    padding: 80px 20px;
}

h1 {
    font-size: 3rem;
    margin-bottom: 20px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.button {
    background: #e94560;
    color: white;
    padding: 15px 25px;
    text-decoration: none;
    border-radius: 10px;
}

</style>