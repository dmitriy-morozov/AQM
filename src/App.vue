<template>
    <div class="figure_wrapper">

        <div class="figure1 v-fade" v-show="$route.name==='home'"></div>
        <div class="figure2 v-fade" v-show="$route.name==='home'"></div>
        <div class="figure3 v-fade" v-show="$route.name==='blog' ||
                                   $route.name==='about' ||
                                   $route.name==='news' ||
                                   $route.name==='search'
                                  ">
        </div>
        <div class="figure4 v-fade" v-show="$route.name==='contact'"></div>
        <div class="figure5 v-fade" v-show="$route.name==='gallery'"></div>
        <div class="figure6 v-fade" v-show="$route.name==='reviews'"></div>
        <div class="figure7 v-fade" v-show="$route.name==='services'"></div>
        <div class="figure8 v-fade" v-show="$route.name==='services'"></div>
        <div class="figure9 v-fade" v-show="$route.name==='services'"></div>

        <headerBlock/>

        <transition name="slide-fade">
            <router-view/>
        </transition>

        <consultModal/>

        <footerBlock/>
    </div>
</template>

<script type="text/babel">
    /* eslint-disable */
    var jqueryEvent = require('@/components/js/jquery.event.move');
    var twentytwenty = require('@/components/js/jquery.twentytwenty');

    export default {
        name: 'app'
    }
</script>

<style src="./sass/style.scss" lang="scss"></style>
