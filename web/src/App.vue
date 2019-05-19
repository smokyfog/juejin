<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/page/header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style  lang="scss">
@import url("../public/css/font-awesome.min.css");
$sc : 50;
@function cal($num) {
  @return ($num/$sc) * 1rem;
}


body{
  font-size: 16px;
}
html{
  background-color:
  rgb(244, 245, 245)
  ;
}
</style>
