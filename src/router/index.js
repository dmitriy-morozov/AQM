/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/home'
import blogPage from '@/components/blog'
import newsPage from '@/components/news'
import aboutPage from '@/components/about'
import searchPage from '@/components/search'
import galleryPage from '@/components/gallery'
import contactPage from '@/components/contact'
import reviewsPage from '@/components/reviews'
import servicesPage from '@/components/services'
import headerBlock from '@/components/headerBlock'
import footerBlock from '@/components/footerBlock'
import consultModal from '@/components/consultModal'

Vue.component('headerBlock', headerBlock);
Vue.component('footerBlock', footerBlock);
Vue.component('consultModal', consultModal);

Vue.use(Router);

export const myRouter = new Router({
    linkActiveClass: 'menu_active_black',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: homePage
        },
        {
            path: '/blog/',
            name: 'blog',
            component: blogPage
        },
        {
            path: '/about/',
            name: 'about',
            component: aboutPage
        },
        {
            path: '/gallery/',
            name: 'gallery',
            component: galleryPage
        },
        {
            path: '/contact/',
            name: 'contact',
            component: contactPage
        },
        {
            path: '/reviews/',
            name: 'reviews',
            component: reviewsPage
        },
        {
            path: '/search/',
            name: 'search',
            component: searchPage
        },
        {
            path: '/services/',
            name: 'services',
            component: servicesPage
        },
        {
            path: '/news/',
            name: 'news',
            component: newsPage
        }
    ]
});

myRouter.replace('/');

myRouter.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

export default myRouter;
