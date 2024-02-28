import { Theme } from '@/themes/theme'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      top: '50%',
      maxWidth: 528,
      borderRadius: 10,
      transform: 'translateY(-50%)',

      '& .simplize-dialog-header': {
        borderRadius: 10,
        padding: '24px 32px 8px',
        backgroundColor: theme.color.dc056
      },

      '& .simplize-dialog-content': {
        borderRadius: 10,
        backgroundColor: theme.color.dc056
      },

      '& .simplize-dialog-close': {
        margin: '22px 26px',
        fill: theme.color.black300,

        '&:hover': {
          fill: theme.color.dc017
        }
      },

      '& .simplize-dialog-body': {
        overflow: `auto`,
        padding: '0px 32px 32px',

        '&:hover::-webkit-scrollbar-thumb': {
          visibility: 'visible'
        },

        '&::-webkit-scrollbar': {
          width: 8,
          height: 8
        },

        '&::-webkit-scrollbar-track': {
          borderRadius: 0
        },

        '&::-webkit-scrollbar-thumb': {
          borderRadius: 4,
          backgroundColor: theme.color.black400,
          visibility: 'hidden'
        },

        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.color.black300
        }
      },

      '& .simplize-dialog-footer': {
        padding: '0px 32px 32px'
      },

      [theme.mediaQuery.mobile]: {
        marginLeft: 16,
        marginRight: 16
      }
    })
}

export const Wrapper = styled.div`
  .authentication_method_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .authentication_method_description {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #a7aaaf;
    margin-bottom: 22px;
  }

  .authentication_method_option_group {
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  .authentication_method_option_item {
    width: calc(50% - 4px);
    display: flex;
    cursor: pointer;
    padding: 22px 16px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #3a3b3c;
    border-radius: 10px;

    @media (max-width: 767px) {
      width: 100%;
      background-color: #242526;

      &:first-child {
        margin-bottom: 16px;
      }
    }

    &:hover {
      background: #3a3b3c;
    }
  }

  .authentication_method_icon {
    margin-right: 8px;
  }

  .authentication_method_option_description {
    display: flex;
    flex-direction: column;

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      margin-bottom: 5px;
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #a7aaaf;
    }
  }
`
