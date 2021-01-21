// https://mp.weixin.qq.com/s/vJ6rdbmJxC-u80JQcSxtUw

// https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange
// https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
// https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate
window.onload = function(){
    console.log('window.onload')
}
window.onbeforeunload = function (){
    console.log('window.onbeforeunload')
}

window.pageshow = function (){
    console.info('pageshow')
}

window.pagehide = function(){
    console.log('pagehide')
}
document.addEventListener('pagehide',  function (event) {  
    console.log('pagehide')
})

let _wr =  function (type) {  
    let orig = window.history[type]
    return  function () {
      let rv = orig.apply(this, arguments)
      let e = new Event(type.toLowerCase())
      e.arguments = arguments
      window.dispatchEvent(e)
      console.log('rv', rv)
      return rv
    }}
  window.history.pushState = _wr('pushState')  
  window.history.replaceState = _wr('replaceState')
  window.addEventListener('pushstate',  function (event) {})  
  window.addEventListener('replacestate',  function (event) {})


    document.addEventListener('visibilitychange',  function (event) {  
        console.log(document.hidden, document.visibilityState)
    })
  