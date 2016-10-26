import Vue from 'vue'
import App from './App'
import Navs from './Nav'

/* eslint-disable no-new */
/* 实例化vue 找到 容器 载入模板 */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
new Vue({
  el: '#navbox',
  template: '<Navs/>',
  components: { Navs }
})
var zujian = new Vue()
zujian.component('todo-item', {
  template: '<li>This is a todo</li>'
})

console.warn(App)
console.warn(Navs)
