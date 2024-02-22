import { css } from '@emotion/react'

const styles = {
  wrapper: () =>
    css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      '& > *': {
        marginBottom: 10
      }
    }),
  btn: () =>
    css({
      padding: 10
    })
}

export default styles
