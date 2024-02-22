import NewPage1 from '@/pages/NewPage1'
import NewPage2 from '@/pages/NewPage2'
import GlobalStyles from '@/styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewPage1 />} />
          <Route path='/p1' element={<NewPage1 />} />
          <Route path='/p2' element={<NewPage2 />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  )
}

export default App
