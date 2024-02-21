// import PopupAppStore from '@/components/PopupAppStore';

import { theme } from '@/themes/theme'
import { ThemeProvider, useTheme } from '@emotion/react'
import React from 'react'
import '@/styles/_global.scss'

const GlobalStyles = (props) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default GlobalStyles
