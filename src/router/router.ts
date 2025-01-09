import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      name: 'main',
      path: '/',
      component: () => import('@/views/MainView.vue')
    },
    {
      name: 'gallery',
      path: '/gallery',
      component: () => import('@/views/GalleryView.vue')
    },
    {
      name: 'projects',
      path: '/projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      name: 'certificates',
      path: '/certificates',
      component: () => import('@/views/CertificatesView.vue')
    },
    {
      name: 'contacts',
      path: '/contacts',
      component: () => import('@/views/ContactsView.vue')
    },
  ]
});

export default router