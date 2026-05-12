import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [

    {
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/gallery',
        name: 'gallery',
        component: () => import('@/views/GalleryView.vue')
    },

    {
        path: '/photo/:id',
        name: 'photo-detail',
        component: () => import('@/views/PhotoDetailView.vue')
    },

    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
