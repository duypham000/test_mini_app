import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Theme } from '@/themes/theme'
import { colors } from '@/themes/colors'

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
  .confirm_otp_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .confirm_otp_description {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #a7aaaf;
    margin-bottom: 22px;
  }

  .group_otp {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    > div {
      margin-right: 16px;
      &:nth-child(4) {
        margin-right: 0px;
      }
    }

    input {
      outline: none;
      border: none;
      background: none;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: ${({ theme }: { theme: Theme }) => theme.color.dc011};

      width: 64px !important;
      height: 48px;

      background-color: transparent;
      border: 1px solid ${colors.black400};
      border-radius: 5px;
      padding: 14px;
    }
  }

  .expired_code {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #a7aaaf;
    margin-bottom: 22px;

    span:nth-child(2) {
      color: #e14040;
    }
  }

  .confirm_btn {
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
  }

  .resend_code {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #a7aaaf;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      user-select: none;

      span:nth-child(2) {
        color: #2d88ff;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        &.isReSubmit {
          cursor: not-allowed;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
`
