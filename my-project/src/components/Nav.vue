<!--模板开始-->
<template>
	<div class="navbox">
			
		<p>
			{{ msg }} + {{ msgs }} + {{ msgs_1  }}
			 <button v-on:click="reverseList">点击翻转list</button>
		</p>
		<p  v-for="i in msgs_list"  >
			{{ i }}
		</p>
		
		华丽丽的分割线<hr>
</template>
<!-- 模板结束-->

<script>
	export default {
  name: 'Nav',
  data () {
    return {
      msg: '基于vue2.0 的测试应用 ',
      msgs: '循环练习',
      msgs_1: '事件绑定',
      msgs_list: ['HTML', 'CSS', 'JS']
    }
  },
  methods: {
    reverseList: function () {
      this.msgs_list = ['JS', 'CSS', 'HTML']
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
