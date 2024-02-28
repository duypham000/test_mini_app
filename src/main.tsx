import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { makeStore } from '@/redux/store'
import GlobalStyles from '@/styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles>
      <BrowserRouter>
        <Provider store={makeStore()}>
          <App />
        </Provider>
      </BrowserRouter>
    </GlobalStyles>
  </React.StrictMode>
)
