var isFlutterInAppWebViewReady = false
window.addEventListener('flutterInAppWebViewPlatformReady', function () {
  isFlutterInAppWebViewReady = true
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

// eslint-disable-next-line no-unused-vars
const NativeMethod = {
  toast: (msg) => {
    EventController.callHandler({
      name: 'JsToNative_toast',
      args: [msg]
    })
  },
  closeWebview: () => {
    EventController.callHandler({
      name: 'JsToNative_closeWebview',
      args: []
    })
  },
  addEventListener: ({ name, handle }) => {
    EventController.set({ name, handle })
  }
}
