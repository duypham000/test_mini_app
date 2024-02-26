/* eslint-disable */
var isFlutterInAppWebViewReady = false
window.addEventListener('flutterInAppWebViewPlatformReady', function () {
  isFlutterInAppWebViewReady = true
  console.log(window.flutter_inappwebview)
  window.flutter_inappwebview.callHandler('log', window.flutter_inappwebview)
})

const EventController = {
  listEvent: {},
  // { name, handle }: { name: String, handle: (q: any) => void }
  set: ({ name, handle }) => {
    EventController.listEvent[name] = handle
  },
  call: ({ name, params }) => {
    // EventController.listEvent[name]();
    if (!params) {
      EventController.listEvent[name]()
    } else {
      return EventController.listEvent[name](params)
    }
  },
  //  : { name: any, args: any[] }
  callHandler: ({ name, args }) => {
    if (isFlutterInAppWebViewReady) {
      window.flutter_inappwebview.callHandler(name, ...args)
    }
  }
}

function loadMediaFromBase64String(base64Media) {
  var mediaType = 'image/jpeg' // Change to "video/mp4" for video
  var media = document.createElement(
    mediaType.startsWith('image') ? 'img' : 'video'
  )
  media.src = 'data:' + mediaType + ';base64,' + base64Media
  document.body.appendChild(media)
}
