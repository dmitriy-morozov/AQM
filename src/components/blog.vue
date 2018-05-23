<template>
    <div class="blog_wrapper clearfix">
        <div class="bottom_menu block">
            <nav>
                <ul class="menu_inline">
                    <li v-for="link in links" :class="{active:isActive == link.url }" @click="fetchData(link.url)">
                        <span>{{link.title}}</span>
                    </li>
                </ul>
            </nav>

            <select>
                <option value="Сад">Сад</option>
                <option value="Дизайн сада">Дизайн Сада</option>
                <option value="Идеи для сада">Идеи для сада</option>
                <option value="Растения">Растения</option>
                <option value="Газон">Газон</option>
            </select>

            <div class="opened_menu closed">
                <div class="bottom_menu">
                    <nav>
                        <ul class="menu_inline">
                            <li><a href="#">Сад</a></li>
                            <li><a href="#">Дизайн сада</a></li>
                            <li><a href="#">Идеи для сада</a></li>
                            <li><a href="#">Растения</a></li>
                            <li><a href="#">Газон</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="side_menu">
                    <nav>
                        <ul>
                            <li><a href="#">Дизайн сада</a></li>
                            <li><a href="#">Идеи для сада</a></li>
                            <li><a href="#">Растения</a></li>
                            <li><a href="#">Газон</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="opened_menu_news">
                    <img src="../assets/sprite_small.jpg" alt="sprite">

                    <h3>История автополива с древнего рима и до наших дней</h3>

                    <div class="date">
                        <img src="../assets/calendar.png" alt="">
                        <span>11.11.2016</span>
                    </div>
                </div>

                <div class="opened_menu_news">
                    <img src="../assets/sprite_small.jpg" alt="sprite">

                    <h3>История автополива с древнего рима и до наших дней</h3>

                    <div class="date">
                        <img src="../assets/calendar.png" alt="">
                        <span>11.11.2016</span>
                    </div>
                </div>

                <div class="opened_menu_news">
                    <img src="../assets/sprite_small.jpg" alt="sprite">

                    <h3>История автополива с древнего рима и до наших дней</h3>

                    <div class="date">
                        <img src="../assets/calendar.png" alt="">
                        <span>11.11.2016</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="search block">
                <form action="#">
                    <input type="text">
                    <button type="submit" @click="searchData('query')"></button>
                </form>
            </div>

            <div class="search_mobile ">
                <form action="#">
                    <input type="text" placeholder="Запрос">
                    <input type="submit" value="">
                </form>
            </div>

            <div class="slider block">
                <slick ref="slick" :options="slickOptions">
                    <div class="slide" v-for="article in sliderNews" :style="{ 'background-image': 'url(' + article.urlToImage + ')' }">
                        <div class="slider_text">
                            <a :href="article.url" target="_blank" class="slider_header"><h3>{{article.title}}</h3></a>
                            <span>{{article.publishedAt}}</span>
                        </div>
                    </div>
                </slick>
            </div>

            <div class="news_all">
                <div class="news block" v-for="article in listNews">
                    <div class="news_image">
                        <span class="news_image-bg" :style="{ 'background-image': 'url(' + article.urlToImage + ')' }"></span>
                    </div>

                    <div class="news_text">
                        <a :href="article.url" target="_blank" class="news_header"><h3>{{article.title}}</h3></a>
                        <p>{{article.description}}</p>
                        <div class="date">
                            <span>{{article.publishedAt}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sidebar">
            <div class="search block">
                <form action="#" @submit.prevent="searchData()">
                    <input type="text" placeholder="Поиск" v-model="searchQuery">
                    <input type="submit" value="">
                </form>
            </div>

            <div class="sidebar_news block">

                <div class="switch">
                    <button class="button active_button">Свежие</button>
                    <button class="button">Популярные</button>
                </div>

                <div class="fresh_news">
                    <div class="one_news">
                        <img src="../assets/sprite_micro.jpg" alt="sprite">
                        <router-link to="/news/" class="news_header"><h5>История автополива с древнего рима и до наших дней</h5></router-link>
                        <span>Категория</span>
                    </div>
                    <div class="one_news">
                        <img src="../assets/sprite_micro.jpg" alt="sprite">
                        <router-link to="/news/" class="news_header"><h5>История автополива с древнего рима и до наших дней</h5></router-link>
                        <span>Категория</span>
                    </div>
                    <div class="one_news">
                        <img src="../assets/sprite_micro.jpg" alt="sprite">
                        <router-link to="/news/" class="news_header"><h5>История автополива с древнего рима и до наших дней</h5></router-link>
                        <span>Категория</span>
                    </div>
                    <div class="one_news">
                        <img src="../assets/sprite_micro.jpg" alt="sprite">
                        <router-link to="/news/" class="news_header"><h5>История автополива с древнего рима и до наших дней</h5></router-link>
                        <span>Категория</span>
                    </div>
                    <div class="one_news">
                        <img src="../assets/sprite_micro.jpg" alt="sprite">
                        <router-link to="/news/" class="news_header"><h5>История автополива с древнего рима и до наших дней</h5></router-link>
                        <span>Категория</span>
                    </div>
                </div>
            </div>

            <div class="subscribe block">
                <h4>Подписка</h4>
                <span>Подпишитесь на новости автополива у нас</span>
                <form action="#">
                    <input type="text" placeholder="Ваш email адресс">
                    <button class="button">Подписка</button>
                </form>
            </div>

            <div class="best block">
                <h4>Лучшие публикации</h4>
                <div class="sidebar_slider">
                    <img src="../assets/sprite_small.jpg" alt="Распылитель" width="400px" height="205px">
                    <div class="sidebar_slider_text">
                        <div class="rating">
                            <ul>
                                <li><img src="../assets/full_star.png" alt=""></li>
                                <li><img src="../assets/full_star.png" alt=""></li>
                                <li><img src="../assets/full_star.png" alt=""></li>
                                <li><img src="../assets/half_star.png" alt=""></li>
                                <li><img src="../assets/null_star.png" alt=""></li>
                            </ul>
                        </div>
                        <a href="#">История</a>
                        <h5>История автополива с древнего рима и до наших дней</h5>
                        <div class="bullets">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li class="active"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="google block">
                <img src="../assets/google.jpg" alt="google">
            </div>

            <div class="facebook block">
                <img src="../assets/facebook.jpg" alt="facebook">
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    /* eslint-disable */

    import axios from 'axios';
    import Slick from 'vue-slick';

    export default {
        name: 'blog',
        components: {
            Slick
        },
        data () {
            return {
                isActive: 'business',
                searchQuery:'',
                links: [
                    {
                        title: 'Бизнес',
                        url: 'business',
                    },
                    {
                        title: 'Технологии',
                        url: 'technology',
                    },
                    {
                        title: 'Здоровье',
                        url: 'health',
                    },
                    {
                        title: 'Наука',
                        url: 'science',
                    },
                    {
                        title: 'Спорт',
                        url: 'sports',
                    },

                ],
                news: {},
                sliderNews: [],
                listNews: [],
                slickOptions: {
                    speed: 1000,
                    slidesToShow: 1,
                    infinite: false,
                    dots: true,
                    dotsClass: 'screen_slider_points',
                    arrows: false,
                    draggable: false,
                },
            }
        },
        mounted() {
            this.fetchData(this.isActive);
        },
        methods: {
            fetchData: function (category) {
                this.isActive = category;

                axios.get("https://newsapi.org/v2/top-headlines?country=ru&category=" + category + "&apiKey=5b32ce9f07ff46b98261070ebc60cbec").then(function (response) {
                    this.refreshNews(response);
                }.bind(this));
            },
            searchData: function () {
                axios.get("https://newsapi.org/v2/everything?q=" + this.searchQuery + "&sortBy=publishedAt&apiKey=5b32ce9f07ff46b98261070ebc60cbec").then(function (response) {
                    this.refreshNews(response);
                }.bind(this));
            },
            refreshNews: function (response) {
                var self = this;

                this.listNews = [];
                this.sliderNews = [];

                this.news = response.data.articles;

                for (var i = 0; i < self.news.length; i++) {
                    var str = self.news[i].publishedAt;
                    var d = new Date(str);

                    self.news[i].publishedAt = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + "  " + ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
                            d.getFullYear();


                    var url = self.news[i].urlToImage;
                    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                    if (!pattern.test(url)) {
                        self.news[i].urlToImage = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';
                    }


                    if (i < 4) {
                        self.sliderNews.push(self.news[i]);
                    }
                    else {
                        self.listNews.push(self.news[i]);
                    }
                }

                this.$refs.slick.destroy();
                this.$nextTick(() => {
                    this.$refs.slick.create();
                    this.$refs.slick.goTo(0, true);
                })
            }
        }
    }
</script>


<style lang="scss" scoped>
</style>
