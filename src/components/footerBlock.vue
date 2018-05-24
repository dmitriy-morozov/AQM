<template>
    <footer class="footer">
        <div class="social">
            <social-sharing url="https://dmitriy-morozov.github.io/aqm"
                            title="The Progressive JavaScript Framework - My website"
                            description="My website."
                            quote="Vue is a progressive framework for building user interfaces."
                            hashtags="vuejs,javascript,framework"
                            inline-template>
                <div>
                    <network network="facebook">
                        <i class="social_sprite fb"></i>
                    </network>
                    <network network="telegram">
                        <i class="social_sprite inst"></i>
                    </network>
                    <network network="twitter">
                        <i class="social_sprite tw"></i>
                    </network>
                </div>
            </social-sharing>
        </div>
    </footer>
</template>

<script type="text/babel">
    /* eslint-disable */

    export default {
        name: 'footerBlock',
        data () {
            return {}
        }
    }
</script>


<style lang="scss" scoped>
</style>
