/* eslint-disable no-undef */
const NativeMethod = {
  toast: (msg) => {
    EventController.callHandler({
      name: "JsToNative_toast",
      args: [msg],
    });
  },
  closeWebview: () => {
    EventController.callHandler({
      name: "JsToNative_closeWebview",
      args: [],
    });
  },
  addEventListener: ({ name, handle }) => {
    EventController.set({ name, handle });
  },
};

export default NativeMethod;
