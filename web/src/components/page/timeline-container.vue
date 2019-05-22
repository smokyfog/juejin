<template>
    <div class="timeline-container">
        <div class="timeline-entry-list">
            <div class="list-header">
                <nav data-v-14b8e52a="" role="navigation" class="list-nav">
                    <ul data-v-14b8e52a="" class="nav-list left">
                        <li data-v-14b8e52a="" class="nav-item router-link-exact-active route-active active"><a data-v-14b8e52a="" href="/timeline/recommended?sort=popular">热门</a>
                        </li>
                        <li data-v-14b8e52a="" class="nav-item route-active">
                            <a data-v-14b8e52a="" href="/timeline/recommended?sort=newest">最新</a>
                        </li>
                        <li data-v-14b8e52a="" class="nav-item route-active">
                            <a data-v-14b8e52a="" href="/timeline/recommended?sort=comment">评论</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <ListDetail :list="list" />
        </div>
    </div>
</template>

<script>
import ListDetail from "./list_detail";
import { constants } from 'fs';
export default {
    
    data(){
       return {
           list:[]
       }
    },
    components:{
  		ListDetail
    },
    created(){
        this.$http.get("/node/timeline/recommended").then((data)=>{
            console.log(data.data)
            this.list = data.data
        })
        
    },
    
}
</script>

<style lang="scss" scoped>
$sc : 50;
@function cal($num) {
  @return ($num/$sc) * 1rem;
}
.timeline-container{
    margin-top: cal(15);
    word-break: break-word;
    .list-header{
        padding: cal(15.6) cal(12);
        border-bottom: 1px solid hsla(0,0%,59.2%,.1);
        background: #fff;
    }
    .list-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1;
        .nav-list{
            overflow-x: auto;
            white-space: nowrap;
            height: cal(16);
            li{
                font-size: cal(14);
                display: inline-block;
                padding: 0 cal(12);
                position: relative;
                cursor: pointer;
                border-right: 1px solid hsla(0,0%,59.2%,.2);
                a{
                    color: #909090;
                   
                }
                
            }
            & li:last-child {
                border-right: none;
            }
        }
        
    }
}

</style>