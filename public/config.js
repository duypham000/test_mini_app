/* eslint-disable no-unused-vars */

var isFlutterInAppWebViewReady = false;
window.addEventListener("flutterInAppWebViewPlatformReady", function (event) {
  isFlutterInAppWebViewReady = true;
  NativeMethod.documentReady();
  console.log("done");
});
const EventController = {
  listEvent: {},
  // { name, handle }: { name: String, handle: (q: any) => void }
  set: ({ name, handle }) => {
    EventController.listEvent[name] = handle;
  },
  call: ({ name, params }) => {
    // EventController.listEvent[name]();
    if (!params) {
      EventController.listEvent[name]();
    } else {
      return EventController.listEvent[name](params);
    }
  },
  //  : { name: any, args: any[] }
  callHandler: ({ name, args }) => {
    if (isFlutterInAppWebViewReady) {
      window.flutter_inappwebview.callHandler(name, ...args);
    }
  },
};

const NativeMethod = {
  toast: (msg) => {
    EventController.callHandler({
      name: "JsToNative_toast",
      args: [msg],
    });
  },
  documentReady: () => {
    EventController.callHandler({
      name: "JsToNative_documentReady",
      args: [],
    });
  },
};
