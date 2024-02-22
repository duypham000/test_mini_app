export const getImageSrc = (webcamRef: any) => {
  if (!webcamRef) return null
  const imageSrc = webcamRef?.current.getScreenshot()
  return imageSrc
}

export const getImageFile = (webcamRef: any, fileName?: string) => {
  if (!webcamRef) return null
  const imageSrc = webcamRef?.current.getScreenshot()

  const arr: any = imageSrc.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  const imageFile = new File(
    [u8arr],
    fileName ? `${fileName}.jpg` : `${Date.now()}.jpg`,
    {
      type: mime
    }
  )

  return imageFile
}
