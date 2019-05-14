<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style  lang="scss">
$sc : 50;
@function cal($num) {
  @return ($num/$sc) * 1rem;
}
body{
  font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: cal(200)
}
//设计稿尺寸大小，假如设计稿宽度750

// @function calc($val){
//     @return $val / $baseDesignWidth;
// }

// @function calc($val) {
//   @return $val / $baseDesignWidth;
// }


//适配元素采用rem，假如设计稿中元素宽度180
.logo{
	// width : calc(180rem);
}

//边框采用px，假如设计稿边框宽度1px
.box{
	border : 1px solid #ddd;
}

</style>
