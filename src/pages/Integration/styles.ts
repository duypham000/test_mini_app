import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const styles = {
  wrapper: () => () =>
    css([
      {
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        padding: 15
      }
    ]),
  heading: () => (theme: Theme) => css([{ color: theme.color.dc011 }]),
  contentWrapper: () => () =>
    css([
      {
        flex: 1,
        flexDirection: `column`
      }
    ]),
  body: () => (theme: Theme) =>
    css([
      {
        color: theme.color.dc014,
        display: `block`,
        marginTop: 16
      }
    ]),
  button: () => () =>
    css([
      {
        marginTop: 24,
        padding: `8px 32px !important`
      }
    ])
}

export default styles
