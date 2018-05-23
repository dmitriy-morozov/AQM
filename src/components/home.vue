<template>
    <div class="index">
        <div class="wrapper">
            <div class="caption">
                <h1>AQM это компания номер один в монтаже систем автополива</h1>
                <button @click="toggleModal">Получить консультацию</button>
                <span>Выберите свой вариант</span>
                <div class="figures"></div>
            </div>

            <div class="variants">
                <ul>
                    <li>
                        <router-link to="/services/">
                            <div class="variant">
                                <span>Создание</span>
                                <span>Автополива с нуля</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/services/">
                            <div class="variant">
                                <span>Создание</span>
                                <span>Автополива для сада и огорода</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/services/">
                            <div class="variant">
                                <span>Реконструкция</span>
                                <span>Автополива</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/services/">
                            <div class="variant">
                                <span>Обслуживание</span>
                                <span>Автополива с 0</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/services/">
                            <div class="variant">
                                <span>Создание</span>
                                <span>Автополива с 0</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/services/">
                            <div class="variant">
                                <span>Создание</span>
                                <span>Автополива с 0</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    /* eslint-disable */

    export default {
        name: 'home',
        data () {
            return {}
        },
        methods: {
            toggleModal() {
                this.$store.commit('toggleModal');
            }
        },
    }
</script>


<style lang="scss" scoped>
</style>
