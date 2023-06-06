import {ref} from 'vue'

class Bus{
  constructor(){
    // eventList 是必须项，用来存放事件列表的。
    this.eventList={},
    // constructor 里除了 eventList 外，其他都是自定义数据，公共数据就是存在这里的。
    this.msg=ref('这是一条总线消息')
  }

  // 订阅 $on 方法用来注册事件。
  $on(name,fn){
    this.eventList[name]=this.eventList[name]||[]
    this.eventList[name].push(fn)
  }

  // 发布 $emit 方法可以调用 $on 里的事件。
  $emit(name,data){
    if(this.eventList[name]){
      this.eventList[name].forEach((fn)=>{
        fn(data)
      })
    }
  }

  // 取消订阅 $off 方法可以注销 eventList 里的事件。
  $off(name){
    if (this.eventList[name]) {
      delete this.eventList[name]
    }
  }

}

export default new Bus()
// 然后需要用到总线的组件，都导入 Bus.js ，就可以共同操作一份数据了。

