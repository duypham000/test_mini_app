// eslint-disable-next-line no-unused-vars

var isFlutterInAppWebViewReady = false;
window.addEventListener("flutterInAppWebViewPlatformReady", function (event) {
  isFlutterInAppWebViewReady = true;
});
const EventController = {
  listEvent: {},
  set: ({ name, handle }: { name: String, handle: (q: any) => void }) => {
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
  callHandler: ({ name, args }: { name: any, args: any[] }) => {
    if (isFlutterInAppWebViewReady) {
      window.flutter_inappwebview.callHandler(name, args);
    }
  },
};
