import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  .personal_information_container {
    background-color: ${({ theme }: { theme: Theme }) => theme.color.dc029};
    box-shadow: 0px 0px 10px
      ${({ isDark }: { isDark: boolean }) =>
        isDark ? '#000000' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 16px;
    padding: 32px;

    @media (max-width: 767px) {
      background-color: transparent;
      border: none;
      border-radius: 0px;
      padding: 0px;
      box-shadow: none;
    }
  }

  .simplize-input::placeholder {
    color: ${({ theme }: { theme: Theme }) => theme.color.dc014};
  }

  .personal_information_title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 16px;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 8px;
    }
  }

  .personal_information_desc {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #a7aaaf;
    margin-bottom: 22px;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 16px;
    }
  }

  .personal_information_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: left;
  }

  .personal_information_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }

  .personal_information_column_first {
    width: 14%;
    text-align: left;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #a7aaaf;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 8px;
    }
  }

  .personal_information_column_second {
    width: 50%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 16px;
    }

    .ant-picker {
      background-color: #3a3b3c;
      border: 1px solid #3a3b3c;

      &:hover,
      &:focus {
        background-color: #3a3b3c !important;
        border-color: #3a3b3c !important;
      }

      @media (max-width: 767px) {
        background-color: #242526;
        border: 1px solid #242526;

        &:hover,
        &:focus {
          background-color: #242526 !important;
          border-color: #242526 !important;
        }
      }
    }

    .ant-input {
      background-color: #3a3b3c;
      border: 1px solid #3a3b3c;

      &:hover,
      &:focus {
        background-color: #3a3b3c !important;
        border: 1px solid #3a3b3c !important;
      }

      @media (max-width: 767px) {
        background-color: #242526;
        border: 1px solid #242526;

        &:hover,
        &:focus {
          background-color: #242526 !important;
          border: 1px solid #242526 !important;
        }
      }
    }

    .personal_information_column_second_select {
      width: 30%;
    }

    .ant-select-selector {
      text-align: left;
      background-color: #3a3b3c !important;
      border: 1px solid #3a3b3c !important;

      @media (max-width: 767px) {
        background-color: #242526 !important;
        border: 1px solid #242526 !important;
      }
    }

    .ant-select-focused {
      .ant-select-selector {
        background-color: #3a3b3c !important;
        border: 1px solid #3a3b3c !important;

        @media (max-width: 767px) {
          background-color: #242526 !important;
          border: 1px solid #242526 !important;
        }
      }
    }
  }

  .personal_information_column_third {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      width: 100%;
    }

    .personal_information_column_third_input {
      width: 65%;

      .ant-picker {
        background-color: #3a3b3c;
        border: 1px solid #3a3b3c;

        &:hover,
        &:focus {
          background-color: #3a3b3c !important;
          border-color: #3a3b3c !important;
        }

        @media (max-width: 767px) {
          background-color: #242526;
          border: 1px solid #242526;

          &:hover,
          &:focus {
            background-color: #242526 !important;
            border-color: #242526 !important;
          }
        }
      }

      .ant-radio-group {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 767px) {
          justify-content: flex-start;
        }
      }

      .ant-radio-wrapper {
        margin-right: 15px;
      }

      .ant-select-selector {
        text-align: left;
        background-color: #3a3b3c;
        border: 1px solid #3a3b3c;

        @media (max-width: 767px) {
          background-color: #242526;
          border: 1px solid #242526;
        }
      }

      .ant-select-focused {
        .ant-select-selector {
          background-color: #3a3b3c;
          border: 1px solid #3a3b3c;

          @media (max-width: 767px) {
            background-color: #242526;
            border: 1px solid #242526;
          }
        }
      }

      .ant-input {
        background-color: #3a3b3c;
        border: 1px solid #3a3b3c;

        &:hover,
        &:focus {
          background-color: #3a3b3c !important;
          border: 1px solid #3a3b3c !important;
        }

        @media (max-width: 767px) {
          background-color: #242526;
          border: 1px solid #242526;

          &:hover,
          &:focus {
            background-color: #242526 !important;
            border: 1px solid #242526 !important;
          }
        }
      }
    }
  }

  .bank_account_group {
    display: flex;
    flex-direction: column;
  }

  .bank_account_item {
    &:first-child {
      margin-top: 0;
    }
    margin-top: 22px;
    display: flex;
    flex-direction: column;
  }

  .bank_account_title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: left;
  }

  .add_bank_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #a7aaaf;
    cursor: pointer;
    margin-top: 22px;
    text-align: left;

    .anticon {
      margin-right: 4px;
    }
  }

  .personal_information_btn_group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;

    button.bg_blue {
      margin-left: 16px;
    }
  }

  .confirm_checkbox {
    display: flex;
    margin-top: 24px;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      text-align: left;
    }

    .ant-checkbox-wrapper {
      margin-right: 18px;
    }
  }
`

export const styles = {
  inputWrapper: () =>
    css({
      marginBottom: 16,
      '& > div:first-of-type': {
        marginBottom: 4
      }
    }),
  gender: () =>
    css({
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16,
      '& > div:first-of-type': {
        marginRight: 40
      }
    }),

  inputSide: () =>
    css({
      '& > div:first-of-type': {
        marginBottom: 4
      }
    }),

  backGroup: () =>
    css({
      marginBottom: 16
    })
}
