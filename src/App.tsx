import GlobalStyles from '@/styles/GlobalStyles'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import mainAxios from '@/apis/main-axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/redux/slices/profile-slice'
import { routes } from '@/router'
import NativeMethod from '@/NativeMethod'
import { getLocalStorageItem } from './utils/storage/local-storage'
import { Storage } from '@/constants/storage'

function App() {
  const dispath = useDispatch()
  const navigator = useNavigate()
  React.useEffect(() => {
    const theme = getLocalStorageItem(Storage.theme) || 'dark'

    document.getElementsByTagName('html')[0]!.setAttribute('data-theme', theme)
    ;(async () => {
      try {
        const res = await mainAxios.get('api/general/membership/info')
        dispath(setUserInfo(res.data))
      } catch (error) {
        NativeMethod.toast('Lỗi token')
      }
    })()
    NativeMethod.addEventListener({
      name: 'JsToNative_navigate',
      handle: (params) => {
        navigator(params)
      }
    })
  }, [])
  return (
    <GlobalStyles>
      <BrowserRouter>
        <Routes>
          {Object.values(routes).map((route) => (
            <Route path={route.url} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  )
}

export default App
