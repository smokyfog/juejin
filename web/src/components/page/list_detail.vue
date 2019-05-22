<template>
    <ul class="entry-list">
        <li v-for="item in list" :key="item.id">
            <div class="entry-box">
                <div class="entry">
                    <router-link tag="li" to="/timeline">
                        <div class="content-box">
                            <div class="info-box">
                                <div class="info-row meta-row">
                                    {{item.user[0].username}}
                                    <ul>
                                        <li>{{get_time_distance("2019-05-22T09:32:37.888Z")}}</li>
                                        <li></li>
                                        <li></li>
                                    </ul>
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
    methods:{
        get_time_distance(date){
            var now_date = new Date().getTime();
            var date = new Date(date).getTime();
            console.log(now_date - date)
            var distance = (now_date - date)/1000/60/60;
            if(distance < 24){
                return  `${distance}小时前`
            }else if(distance > 24){

            }

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
