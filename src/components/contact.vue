<template>
    <div class="contact_wraper clearfix">
        <div class="contact">
            <h2>Свяжитесь с нами</h2>
            <form action="#">
                <label for="name">Имя:</label>
                <input type="text" id="name" placeholder="Марк Васильев">
                <label for="email">Email:</label>
                <input type="text" id="email" placeholder="Марк Васильев">
                <label for="text">Текст:</label>
                <textarea name="" id="text" placeholder="Марк Васильев"></textarea>
                <input type="submit" placeholder="Отправить" class="button">
            </form>
        </div>

        <div class="address">
            <div class="street address_element">
                <span><b>Одесса</b><br>ул. Ильфа и Петрова 20</span>
            </div>

            <div class="timetable address_element">
                <span><b>График работы</b><br>c 9:00 до 19:00</span>
            </div>

            <div class="email address_element">
					<span><b>email</b><br><a href="mailto:customer.service@aqm.in.ua">customer.service @aqm.in.ua</a>
					</span>
            </div>

            <div class="phone address_element">
                <span><b>Телефон</b><br><a href="+380671443924">+38 (067) 144-39-24</a></span>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    /* eslint-disable */

    export default {
        name: 'contact',
        data () {
            return {}
        }
    }
</script>


<style lang="scss" scoped>
</style>
