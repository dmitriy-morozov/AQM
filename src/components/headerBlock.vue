<template>
    <header class="header clearfix">
        <router-link to="/">
            <div class="logo">
                <h1>AQM</h1>
                <span>Компания №1 в монтаже систем автополива</span>
            </div>
        </router-link>

        <div class="header_right">
            <div class="menu_button" @click="toggleMenu">
                <div class="menu_line"></div>
                <div class="menu_line"></div>
                <div class="menu_line"></div>
            </div>
            <nav class="main_nav" v-bind:class="{ hide: !mobileMenu }">
                <div class="hide_menu" @click="toggleMenu"></div>
                <div class="menu_text">
                    <h1>AQM</h1>
                    <span>Компания №1 в монтаже систем автополива</span>
                </div>
                <ul class="menu_inline">
                    <li>
                        <router-link to="/about/">О нас</router-link>
                    </li>
                    <li>
                        <router-link to="/gallery/">Объекты</router-link>
                    </li>
                    <li>
                        <router-link to="/reviews/">Отзывы</router-link>
                    </li>
                    <li>
                        <router-link to="/blog/">Новости</router-link>
                    </li>
                    <li>
                        <router-link to="/contact/">Контакты</router-link>
                    </li>
                </ul>
            </nav>
            <div class="header_phone">
                <a href="tel:+380508447776" class="phone">+380508447776</a>
                <div class="phone_text">Получить консультацию</div>
            </div>
        </div>
    </header>
</template>

<script type="text/babel">
    /* eslint-disable */

    export default {
        name: 'headerBlock',
        data () {
            return {
                mobileMenu: false
            }
        },
        methods: {
            toggleMenu() {
               this.mobileMenu = !this.mobileMenu;
            }
        }
    }
</script>


<style lang="scss" scoped>
</style>
