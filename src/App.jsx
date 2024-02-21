import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import GlobalStyles from '@/styles/GlobalStyles'
import '@/App.css'
import { ThemeProvider } from '@emotion/react'
import NewPage1 from './NewPage1'
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import NewPage2 from './NewPage2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewPage1 />} />
          <Route path='/p1' element={<NewPage1 />} />
          <Route path='/p2' element={<NewPage2 />} />
          {/* <Route path='/about' element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
    // </ThemeProvider>
  )
}

export default App
