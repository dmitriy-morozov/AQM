<template>
    <div>
        <div class="figure3"></div>

        <div class="blog_wrapper clearfix">
            <div class="bottom_menu block">
                <nav>
                    <ul class="menu_inline">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Категория 1</a></li>
                        <li><a href="#">Категория 1</a></li>
                        <li><a href="#">Категория 1</a></li>
                        <li><a href="#">Категория 1</a></li>
                    </ul>
                </nav>

                <select>
                    <option value="Сад">Сад</option>
                    <option value="Дизайн сада">Дизайн Сада</option>
                    <option value="Идеи для сада">Идеи для сада</option>
                    <option value="Растения">Растения</option>
                    <option value="Газон">Газон</option>
                </select>
            </div>

            <div class="content">
                <div class="search block">
                    <form action="#">
                        <input type="text">
                        <input type="submit" value="">
                    </form>
                </div>

                <div class="full_news block_full_news">
                    <nav class="breadcrumbs menu_inline">
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Статьи</a></li>
                            <li>История автополива с древнего рима и до наших дней</li>
                        </ul>
                    </nav>

                    <img src="../assets/spray.jpg" class="big_sprite" alt="sprite">

                    <div class="full_news_text">
                        <h2>История автополива с древнего рима и до наших дней</h2>
                        <div class="underheader">
                            <div class="calendar">
                                <img src="../assets/calendar.png" alt="">
                                <span>11.11.2016</span>
                            </div>
                            <a href="#">История</a>
                            <div class="rating">
                                <img src="../assets/full_star.png" alt="">
                                <img src="../assets/full_star.png" alt="">
                                <img src="../assets/full_star.png" alt="">
                                <img src="../assets/half_star.png" alt="">
                                <img src="../assets/null_star.png" alt="">
                            </div>
                        </div>

                        <div class="article">
                            <p>чтобы охватить при разбрызгивании весь участок целиком: чтобы никакой клочок земли не остался без поливки. Поливка  осуществляется в определенное удобное для дачника время. Она не требует от него определенных усилий. чтобы никакой клочок земли не остался без поливки. Поливка осуществляется в определенное удобное для дачника время. Она не требует от него определенных усилий.</p> <br>
                            <p>При этом важным моментом является вопрос монтажа систем автополива на вашем дачном участке. Ведь, как известно, есть много фирм, которые недобросовестно выполняют свою работу. Следствиями их работы могут быть быстрый выход из строя поливочных устройств, некачественный полив участка и даже возникновение риска угрозы здоровью дачника (например, из-за плохо закрытых электрических проводов). В этой связи следует доверять монтаж систем автополива только профессионалам – они сделают свою работу качественно, в срок и установленная ими система автополива прослужит верой и правдой долгие годы.</p>
                            <h4>Полив загородного участника - выбор в пользу новшеств</h4>
                            <p>Полив загородного участника достаточного важен для любого имеющего участок человека. Он достаточно емок, так как отнимает и силы, и время. Поэтому, если дачник хочет за городом отдыхать, а не работать – он должен установить у себя систему автоматического полива. Она отлично справится с возложенной на нее задачей по поливке участка иут возникнуть в случае, если ей займется человек. Ведь, как известно, хорошо поможет избежать тех ошибок поливки, которые мог отлаженный механизм практически не дает сбоев.</p>
                            <br>
                            <span>Теги: <a href="#">мясо</a>, <a href="#">лавровый лист</a>, <a href="#">лук</a>, <a href="#">чеснок</a>, <a href="#">морковь</a>, <a href="#">томатная паста</a>, <a href="#">перец</a>, <a href="#">соль</a>, <a href="#">капуста</a>, <a href="#">картошка</a>, <a href="#">сало</a>, <a href="#">сметана</a></span>
                        </div>
                    </div>
                </div>

                <div class="prev_next">
                    <div class="prev">
                        <a href="#">Предыдущая новость</a>
                    </div>
                    <div class="next">
                        <a href="#">Следующая новость</a>
                    </div>
                </div>

                <div class="share block_full_news">
                    <h3>Поделиться в соц сетях</h3>
                    <img src="../assets/share.png" alt="share">
                </div>

                <div class="recommend block_full_news">
                    <h3>Рекомендуем</h3>

                    <div class="recommend_news_all">
                        <div class="recommend_news">
                            <img src="../assets/sprite_small.jpg" alt="sprite">
                            <router-link to="/news/" class="news_header"><h5>История автополива с древнего рима и до наших дней</h5></router-link>
                        </div>
                        <div class="recommend_news">
                            <img src="../assets/sprite_small.jpg" alt="sprite">
                            <router-link to="/news/" class="news_header"><h5>История автополива с древнего рима и до наших дней</h5></router-link>
                        </div>
                        <div class="recommend_news">
                            <img src="../assets/sprite_small.jpg" alt="sprite">
                            <router-link to="/news/" class="news_header"><h5>История автополива с древнего рима и до наших дней</h5></router-link>
                        </div>
                    </div>
                </div>


                <div class="disqus block_full_news">
                    <img src="../assets/disqus.png" alt="disqus">
                </div>
            </div>

            <div class="sidebar">
                <div class="search block">
                    <form action="#">
                        <input type="text" placeholder="Поиск">
                        <button></button>
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
    </div>
</template>

<script type="text/babel">
    /* eslint-disable */

    export default {
        name: 'news',
        data () {
            return {}
        }
    }
</script>


<style lang="scss" scoped>
</style>
