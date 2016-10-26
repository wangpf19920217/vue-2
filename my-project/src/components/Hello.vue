<!--模板开始-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>进度:{{ msgs }}</h2>
    <h3>版本:{{ V }}</h3>
    <h3>学习进度:{{ view.a }}</h3>
    <h3>遇到的问题:{{ k.a }}</h3>
  </div>
</template>
<!-- 模板结束-->

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '基于vue2.0 的测试应用 ',
      msgs: '测试阶段',
      V: '0.0.1',
      view: {a: '学习基础语法'},
      k: {a: '语法格式报错    V:“0.0.1”  ！=  V: “0.0.1” '}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
增加“范围”属性限制CSS这部分-->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
