import { css } from '@emotion/react'

const styles = {
  wrapper: () => () => css({}),
  overrideTable: () => () =>
    css([
      {
        '& .simplize-table-cell:last-of-type': {
          paddingRight: `0px !important`
        },

        '& .simplize-table-container': {
          '& tr:nth-of-type(1)': {
            minHeight: 56
          }
        }
      }
    ])
}

export default styles
