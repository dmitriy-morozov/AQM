<template>
   <div>
       <div class="figure3"></div>

       <div class="blog_wrapper clearfix">

           <div class="bottom_menu block">
               <nav>
                   <ul class="menu_inline">
                       <li><a href="#">Сад</a></li>
                       <li><a href="#">Дизайн сада</a></li>
                       <li><a href="#">Идеи для сада</a></li>
                       <li><a href="#">Растения</a></li>
                       <li><a href="#">Газон</a></li>
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
               <div class="search_bar">
                   <nav class="breadcrumbs menu_inline">
                       <ul>
                           <li><a href="#">Главная</a></li>
                           <li><a href="#">Статьи</a></li>
                           <li>История автополива с древнего рима и до наших дней</li>
                       </ul>
                   </nav>
                   <h2>Результаты поиска</h2>
                   <div class="search">
                       <form action="#">
                           <input type="text" placeholder="Запрос">
                           <input type="submit" value="">
                       </form>
                   </div>
                   <span>Найдено 5 публикаций:</span>
               </div>

               <div class="news_all">
                   <div class="news block">
                       <img src="../assets/sprite_small.jpg" alt="Распылитель">
                       <div class="news_text">
                           <h3>История автополива с древнего рима и до наших дней</h3>
                           <p>Давным-давно, еще в прошлом веке, когда мы только начинали работать в ландшафтной сфере, систему автоматического полива устанавливали на своих участках...</p>
                           <div class="date">
                               <span>11.11.2016</span>
                           </div>
                           <router-link to="/news/">История</router-link>
                       </div>
                   </div>
                   <div class="news block">
                       <img src="../assets/sprite_small.jpg" alt="Распылитель">
                       <div class="news_text">
                           <h3>История автополива с древнего рима и до наших дней</h3>
                           <p>Давным-давно, еще в прошлом веке, когда мы только начинали работать в ландшафтной сфере, систему автоматического полива устанавливали на своих участках...</p>
                           <div class="date">
                               <span>11.11.2016</span>
                           </div>
                           <router-link to="/news/">История</router-link>
                       </div>
                   </div>
                   <div class="news block">
                       <img src="../assets/sprite_small.jpg" alt="Распылитель">
                       <div class="news_text">
                           <h3>История автополива с древнего рима и до наших дней</h3>
                           <p>Давным-давно, еще в прошлом веке, когда мы только начинали работать в ландшафтной сфере, систему автоматического полива устанавливали на своих участках...</p>
                           <div class="date">
                               <span>11.11.2016</span>
                           </div>
                           <router-link to="/news/">История</router-link>
                       </div>
                   </div>
                   <div class="news block">
                       <img src="../assets/sprite_small.jpg" alt="Распылитель">
                       <div class="news_text">
                           <h3>История автополива с древнего рима и до наших дней</h3>
                           <p>Давным-давно, еще в прошлом веке, когда мы только начинали работать в ландшафтной сфере, систему автоматического полива устанавливали на своих участках...</p>
                           <div class="date">
                               <span>11.11.2016</span>
                           </div>
                           <router-link to="/news/">История</router-link>
                       </div>
                   </div>
               </div>
           </div>

           <div class="sidebar">
               <div class="search block">
                   <form action="#">
                       <input type="text" placeholder="Поиск">
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
                           <h3>История автополива с древнего рима и до наших дней</h3>
                           <span>Категория</span>
                       </div>
                       <div class="one_news">
                           <img src="../assets/sprite_micro.jpg" alt="sprite">
                           <h3>История автополива с древнего рима и до наших дней</h3>
                           <span>Категория</span>
                       </div>
                       <div class="one_news">
                           <img src="../assets/sprite_micro.jpg" alt="sprite">
                           <h3>История автополива с древнего рима и до наших дней</h3>
                           <span>Категория</span>
                       </div>
                       <div class="one_news">
                           <img src="../assets/sprite_micro.jpg" alt="sprite">
                           <h3>История автополива с древнего рима и до наших дней</h3>
                           <span>Категория</span>
                       </div>
                       <div class="one_news">
                           <img src="../assets/sprite_micro.jpg" alt="sprite">
                           <h3>История автополива с древнего рима и до наших дней</h3>
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
        name: 'search',
        data () {
            return {}
        }
    }
</script>


<style lang="scss" scoped>
</style>
