var isFlutterInAppWebViewReady = false
// eslint-disable-next-line no-undef
window.addEventListener('flutterInAppWebViewPlatformReady', function () {
  isFlutterInAppWebViewReady = true
  // eslint-disable-next-line no-undef
  console.log(window.flutter_inappwebview)
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
      // eslint-disable-next-line no-undef
      window.flutter_inappwebview.callHandler(name, ...args)
    }
  }
}
