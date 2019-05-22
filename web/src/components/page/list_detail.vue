<template>
    <ul class="entry-list">
        <li v-for="item in list">
            <div class="entry-box">
                <div class="entry">
                    <router-link tag="li" to="/timeline">
                        <div class="content-box">
                            <div class="info-box">
                                <div class="info-row meta-row">
                                    {{item.user[0].username}}
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props:["list"],
}
</script>

<style lang="scss" scoped>

</style>
