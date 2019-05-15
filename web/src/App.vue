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
$sc : 50;
@function cal($num) {
  @return ($num/$sc) * 1rem;
}
body{
  font-size: 16px;
}

</style>
