import { theme } from '@/themes/theme'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import 'moment/locale/vi'
import './_global.scss'

interface Props {
  children: React.ReactNode
}

const GlobalStyles: React.FC<Props> = (props): JSX.Element => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      {/* children */}
      {children}
    </ThemeProvider>
  )
}

export default GlobalStyles
