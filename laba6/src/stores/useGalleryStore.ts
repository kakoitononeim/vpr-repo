import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Photo } from '@/types'
const favorites = ref<Photo[]>([])

export const useGalleryStore = defineStore('gallery', () => {

    const photos = ref<Photo[]>([
        {
            id: 1,
            url: '/img1.jpg',
            title: 'Portrait Session',
            tags: ['portrait', 'studio'],
            year: 2024,
            type: 'portrait',
            price: 10,
            description: 'Classic portrait photography'
        },

        {
            id: 2,
            url: '/img2.jpg',
            title: 'Mountain Landscape',
            tags: ['landscape', 'nature'],
            year: 2023,
            type: 'landscape',
            price: 15,
            description: 'Beautiful mountain landscape'
        },

        {
            id: 3,
            url: '/img3.jpg',
            title: 'Wedding Moments',
            tags: ['wedding'],
            year: 2024,
            type: 'wedding',
            price: 25,
            description: 'Wedding photography'
        },

        {
            id: 4,
            url: '/img4.jpg',
            title: 'Street Style',
            tags: ['street'],
            year: 2022,
            type: 'street',
            price: 12,
            description: 'Street photography session'
        },

        {
            id: 5,
            url: '/img5.jpg',
            title: 'Nature Sunset',
            tags: ['landscape', 'sunset'],
            year: 2021,
            type: 'landscape',
            price: 18,
            description: 'Sunset in nature'
        },

        {
            id: 6,
            url: '/img6.jpg',
            title: 'Fashion Portrait',
            tags: ['portrait', 'fashion'],
            year: 2024,
            type: 'portrait',
            price: 30,
            description: 'Fashion portrait session'
        }
    ])

    const selectedType = ref('all')
    const selectedPrice = ref('all')
    const showFavoritesOnly = ref(false)

    const filteredPhotos = computed(() => {

    return photos.value.filter(photo => {

        const typeMatch =
            selectedType.value === 'all'
            || photo.type === selectedType.value

        let priceMatch = true

        if (selectedPrice.value === 'low') {

            priceMatch = photo.price < 10
        }

        if (selectedPrice.value === 'medium') {

            priceMatch =
                photo.price >= 10
                && photo.price <= 20
        }

        if (selectedPrice.value === 'high') {

            priceMatch = photo.price > 20
        }

        let favoriteMatch = true

        if (showFavoritesOnly.value) {

            favoriteMatch = favorites.value.some(

                favorite => favorite.id === photo.id
            )
        }

        return (
            typeMatch
            && priceMatch
            && favoriteMatch
        )
    })
})

    const favoritesCount = computed(() => {

    return favorites.value.length

    })
    function setTypeFilter(type: string) {
        selectedType.value = type
    }

    function setPriceFilter(price: string) {
        selectedPrice.value = price
    }

    function getPhotoById(id: number) {

        return photos.value.find(
            photo => photo.id === id
        )
    }
    function addToFavorites(photo: Photo) {

    const exists = favorites.value.find(

        item => item.id === photo.id
    )

    if (!exists) {

        favorites.value.push(photo)
    }
    }

    function removeFromFavorites(id: number) {

        favorites.value = favorites.value.filter(

            photo => photo.id !== id
        )
    }
    return {
        favorites,
        favoritesCount,
        addToFavorites,
        removeFromFavorites,
        photos,
        filteredPhotos,
        selectedType,
        selectedPrice,
        setTypeFilter,
        setPriceFilter,
        getPhotoById
    }
})