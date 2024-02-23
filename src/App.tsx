import NewPage1 from '@/pages/NewPage1'
import NewPage2 from '@/pages/NewPage2'
import GlobalStyles from '@/styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Screener from './ScreenerModule/Screener'
import React from 'react'
import mainAxios from './apis/main-axios'
import NativeMethod from './components/NativeMethod'

function App() {
  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await mainAxios.get('api/general/membership/info')
        console.log(res)
      } catch (error) {
        NativeMethod.toast('Lỗi token')
      }
    })()
  }, [])
  return (
    <GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewPage1 />} />
          <Route path='/p1' element={<NewPage1 />} />
          <Route path='/p2' element={<NewPage2 />} />
          <Route path='/test' element={<Screener />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  )
}

export default App
