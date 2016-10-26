<template>
  <div id="navbox">
    <navbox></navbox>
  </div>
</template>

<script>
import navbox from './components/Nav'

export default {
  name: 'Nav',
  components: {
    navbox
  }
}
</script>

<style>
#navbox {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100px;
  color: black;
}
</style>
