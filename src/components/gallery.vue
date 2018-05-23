<template>
    <div class="gallery_wrapper">
        <div class="gallery clearfix">
            <div class="screen_slider">
                <div class="screen_slider_points">
                    <vue-slider
                            v-model="sliderValue"
                            v-bind="options"
                            :max="sliderCount"
                    ></vue-slider>
                </div>

                <div class="slider">
                    <div class="wrap slider-main">
                        <slick ref="slick" :options="slickOptions" @afterChange="slideChanged">
                            <div class="slide">
                                <img src="../assets/slide-4.jpg" alt="Превью">
                                <img src="../assets/slide-41.jpg" alt="Превью">
                            </div>

                            <div class="slide">
                                <img src="../assets/slide-2.jpg" alt="Превью">
                                <img src="../assets/slide-21.jpg" alt="Превью">
                            </div>

                            <div class="slide">
                                <img src="../assets/slide-3.jpg" alt="Превью">
                                <img src="../assets/slide-31.jpg" alt="Превью">
                            </div>
                        </slick>
                    </div>


                    <div class="previews">
                        <slick ref="slickTwo" :options="slickOptionsTwo">
                            <div class="slide_preview">
                                <img src="../assets/slide-4.jpg" alt="Превью">
                            </div>

                            <div class="slide_preview">
                                <img src="../assets/slide-2.jpg" alt="Превью">
                            </div>

                            <div class="slide_preview">
                                <img src="../assets/slide-3.jpg" alt="Превью">
                            </div>
                        </slick>
                    </div>
                </div>

                <div class="slide_description">
                    <h2>Одесса совиньон</h2>
                    <ul class="slide_description_list">
                        <li>Объект расположен на Совиньоне. Здесь мы можем показать вам только полив придомового газона.</li>
                        <li>Территорию участка хозяин попросил не фотографировать по личным причинам!</li>
                        <li>Сумарно работа заняла около 7 дней. За это время были произведены все земляные работы, выполнена планировка участка.</li>
                        <li>Уложено 310 кв.метров рулонного газона и смонтирован автополив.</li>
                        <li>Установлено 92 дождевателя, уложено 300 метров капельной трубки и точечно подведен</li>
                    </ul>
                    <button @click="toggleModal">Получить консультацию</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    /* eslint-disable */
    import Slick from 'vue-slick';
    import vueSlider from 'vue-slider-component';


    export default {
        name: 'gallery',
        components: {
            Slick, vueSlider
        },
        data() {
            return {
                slickOptions: {
                    speed: 1000,
                    slidesToShow: 1,
                    infinite: false,
                    dots: false,
                    dotsClass: 'screen_slider_points',
                    arrows: false,
                    draggable: false,
                },
                slickOptionsTwo: {
                    speed: 1000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.slider-main .slick-slider',
                    infinite: false,
                    arrows: false,
                    draggable: true,
                    dots: false,
                    focusOnSelect: true
                },
                sliderValue: 0,
                sliderCount: 0,
                options: {
                    direction: 'vertical',
                    eventType: 'auto',
                    width: 1,
                    height: 400,
                    dotSize: 16,
                    dotHeight: null,
                    dotWidth: null,
                    min: 0,
                    interval: 1,
                    show: true,
                    speed: 0.5,
                    disabled: false,
                    piecewise: true,
                    tooltip: false,
                    tooltipDir: 'top',
                    reverse: true,
                    data: null,
                    clickable: true,
                    realTime: false,
                    lazy: false,
                    formatter: null,
                    bgStyle: null,
                    sliderStyle: null,
                    processStyle: null,
                    piecewiseActiveStyle: null,
                    piecewiseStyle: null,
                    tooltipStyle: null,
                    labelStyle: null,
                    labelActiveStyle: null
                }
            };
        },

        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },
            slideChanged() {
                this.sliderValue = $('.slider-main .slick-slide.slick-current').index();
                $(window).trigger("resize");
            },
            toggleModal() {
                this.$store.commit('toggleModal');
            }
        },
        mounted() {
            this.sliderCount = $('.slider-main .slick-slide').length - 1;

            $(".slider-main .slide").twentytwenty({
                default_offset_pct: 0.7,
                orientation: 'horizontal',
                no_overlay: true,
                move_slider_on_hover: false,
                move_with_handle_only: true,
                click_to_move: true
            });

            setTimeout(function () {
                $(window).trigger("resize");
            }, 100);
        },
        watch: {
            sliderValue: function () {
                var self = this;

                setTimeout(function () {
                    self.$refs.slick.goTo(self.sliderValue);
                }, 0);

            }
        }
    }
</script>



