import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
  const location = useLocation()
  React.useEffect(() => {
    const theme = getLocalStorageItem(Storage.theme) || 'dark'

    document.getElementsByTagName('html')[0]!.setAttribute('data-theme', theme)
    ;(async () => {
      try {
        const res = await mainAxios.get('api/general/membership/info')
        dispath(setUserInfo(res.data))
      } catch (error) {
        NativeMethod.toast('Lỗi xác thực')
      }
    })()
    NativeMethod.addEventListener({
      name: 'JsToNative_navigate',
      handle: (params) => {
        navigator(params)
      }
    })
    NativeMethod.changeTitle('Mở tài khoản chứng khoán Rồng Việt')
  }, [])

  React.useEffect(() => {
    // console.log(location)
    NativeMethod.navigate(location.pathname)
  }, [location])
  return (
    <Routes>
      {Object.values(routes).map((route) => (
        <Route path={route.url} element={route.element} />
      ))}
    </Routes>
  )
}

export default App
