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

function loadVideoFromBase64String(base64Video) {
  var video = document.createElement('video')
  video.src = 'data:video/mp4;base64,' + base64Video
  video.controls = true
  document.body.appendChild(video)
}
