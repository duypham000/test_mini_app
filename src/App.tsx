import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import mainAxios from '@/apis/main-axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/redux/slices/profile-slice'
import { routes } from '@/router'
import NativeMethod from '@/NativeMethod'
import { getLocalStorageItem } from './utils/storage/local-storage'
import { Storage } from '@/constants/storage'

import SwitchTransition from 'react-transition-group/SwitchTransition'
import CSSTransition from 'react-transition-group/CSSTransition'
import utilStyles from './styles/util-styles'

function App() {
  const dispath = useDispatch()
  const navigator = useNavigate()
  const location = useLocation()
  const [styleFade, setStyleFade] = React.useState<any>('fade-pre')
  const [stateLocation, setStateLocation] = React.useState<any>('fade-pre')

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
    NativeMethod.navigate(location.pathname)
    if (location.pathname === '/') {
      setStyleFade('fade-pre')
    } else {
      setStyleFade('fade-next')
    }
    console.log(location)

    setTimeout(() => {
      setStateLocation(location)
    }, 50)
  }, [location])
  return (
    <div css={utilStyles.scrollBarMobile()}>
      <SwitchTransition mode={'out-in'}>
        <CSSTransition
          key={stateLocation.key}
          timeout={500}
          classNames={styleFade}
        >
          <Routes location={stateLocation}>
            {Object.values(routes).map((route) => (
              <Route path={route.url} element={route.element} />
            ))}
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App
