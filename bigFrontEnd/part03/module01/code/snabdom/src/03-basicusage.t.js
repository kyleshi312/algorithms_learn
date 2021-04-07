// import {
//     init,
//     classModule,
//     propsModule,
//     styleModule,
//     eventListenersModule,
//     h,
//   } from "snabbdom";
  import {init} from 'snabbdom/build/package/init'
  import {h} from 'snabbdom/build/package/h'
  

// 1. import module
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'

// 2 register module
const patch = init([
  styleModule,
  eventListenersModule
])

// use h the second param by the module

let vnode = h('div', [
  h('h1', {
    style: {
      backgroundColor: 'red'
    }
  },
  'hello world'),
  h('p', {
    on: {
      click: eventHandler
    }
  },
  'Hello P')
])
function eventHandler (){
  console.log("don't click me")
}

let app = document.querySelector('#app')
patch(app, vnode)