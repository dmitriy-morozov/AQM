<template>
    <div class="consult_modal" v-bind:class="{ hide: !isVisibleConsultModal }">
        <div class="modal_wrapper">
            <div class="figure10"></div>
            <form action="#">
                <h1>Закажите консультацию</h1>
                <p>Для получения кунсультации<br> и обсуждения проекта</p>

                <input type="text" placeholder="Марк Васильевич">
                <input type="text" placeholder="+380508447777">
                <input type="submit" value="Оставить завяку">
            </form>
            <div class="close_modal"  @click="toggleModal"></div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */

    export default {
        data() {
            return {

            }
        },
        computed: {
            isVisibleConsultModal: {
                get() {
                    return this.$store.state.consultModal;
                },
                set(value) {
                    this.$store.commit('toggleModal', value);
                }
            }
        },
        methods: {
            toggleModal: function () {
                this.isVisibleConsultModal = !this.isVisibleConsultModal;
            }
        }
    }
</script>



