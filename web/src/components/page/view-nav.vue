<template>
    <div>
        <div class="view-nav">
            <ul class="nav-list left">
                <li>推荐</li>
                <li>关注</li>
                <li>后端</li>
                <li>前端</li>
                <li>Andrioid</li>
                <li>iOS</li>
                <li>人工智能</li>
                <li>开发工具</li>
                <li>代码人生</li>
                <li>阅读</li>
            </ul>
        </div>
        <router-view/>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
$sc : 50;
@function cal($num) {
  @return ($num/$sc) * 1rem;
}

.view-nav{
    margin-top:cal(60);
    height: cal(46);
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    transform: translateZ(0);
    ul{
        overflow-x: auto;
        white-space: nowrap;
        height: cal(46);
        & li:first-child {
            padding-left: cal(24);
        }
        li{
            display: inline-block;
            height: 100%;
            line-height: cal(46);
            padding: 0 cal(12);
            font-size:cal(14);
            color: #71777c;
        };
        
    }
    
}
</style>
