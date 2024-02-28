/* eslint-disable no-undef */
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
  videoRecord: ({ callback }) => {
    EventController.set({
      name: 'JsToNative_recordVideo_callback',
      handle: callback
    })
    EventController.callHandler({ name: 'JsToNative_recordVideo', args: [] })
  },
  getVideo: ({ callback }) => {
    EventController.set({
      name: 'JsToNative_getVideo_callback',
      handle: callback
    })
    EventController.callHandler({ name: 'JsToNative_getVideo', args: [] })
  },
  takeImage: ({ callback }) => {
    EventController.set({
      name: 'JsToNative_takeImage_callback',
      handle: callback
    })
    EventController.callHandler({ name: 'JsToNative_takeImage', args: [] })
  },
  getImage: ({ callback }) => {
    EventController.set({
      name: 'JsToNative_getImage_callback',
      handle: callback
    })
    EventController.callHandler({ name: 'JsToNative_getImage', args: [] })
  },
  addEventListener: ({ name, handle }) => {
    EventController.set({ name, handle })
  }
}

export const urltoFile = (base64, filename, mimeType) => {
  const url = 'data:' + mimeType + ';base64,' + base64
  if (url.startsWith('data:')) {
    const arr = url.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      u8arr = new Uint8Array(bstr.length)
    let n = bstr.length
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const file = new File([u8arr], filename, { type: mime || mimeType })
    return Promise.resolve(file)
  }
  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], filename, { type: mimeType }))
}
export default NativeMethod
