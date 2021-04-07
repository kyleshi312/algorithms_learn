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
  const patch = init([]);
  

  // tag selector
  // docs content
  let vnode = h('div#container.cls', 'hello world')

  let app = document.querySelector('#app')

  // patch first params could be dom el
  // second param could be vnode
  // return new vnode

  let oldNode = patch(app, vnode)

  vnode = h('div#container.xxx', 'Hello Snabbdom')
  patch(oldNode, vnode)
