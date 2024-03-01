import { colors } from '@/themes/colors'
import { Theme } from '@/themes/theme'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  .container {
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

  .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 22px;
  }

  .register_account_group {
    display: flex;
    padding-bottom: 22px;
    margin-bottom: 22px;
    border-bottom: 1px solid ${colors.white_opacity10};

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  .register_account_text {
    width: 30%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: left;

    @media (max-width: 767px) {
      width: 100%;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 8px;
    }
  }
  .register_account_option_list {
    width: 70%;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .register_account_option_item {
    display: flex;
    align-items: center;
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }
  }

  .register_account_option_item_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-left: 8px;
  }

  .financial_services_group {
    display: flex;
    padding-bottom: 22px;
    margin-bottom: 22px;
    border-bottom: 1px solid ${colors.white_opacity10};

    @media (max-width: 767px) {
      flex-direction: column;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }

  .financial_services_text {
    width: 30%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: left;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 19px;
    }
  }

  .financial_services_option {
    width: 70%;
    display: flex;
    flex-direction: row;
    text-align: left;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .financial_services_option_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .ant-radio-wrapper {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }

  .online_services_group {
    display: flex;
    padding-bottom: 22px;
    margin-bottom: 22px;
    border-bottom: 1px solid ${colors.white_opacity10};
  }

  .online_services_text {
    width: 30%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: left;
  }

  .online_services_option {
    width: 70%;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }

  .online_services_option_item {
    width: 50%;

    .ant-input-affix-wrapper {
      width: 100%;
      height: 38px;
      padding: 0px 16px;
      background-color: #3a3b3c;
      border: 1px solid #3a3b3c;
      box-shadow: none;
      border-radius: 10px;

      &:hover,
      &:focus {
        background-color: #3a3b3c !important;
        border-color: #3a3b3c !important;
      }

      .ant-input {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;

        ::placeholder {
          font-style: italic;
        }

        &.ant-input-disabled {
          color: #a7aaaf;
        }
      }

      &.has_suffix {
        .ant-input-suffix {
          color: #ffffff;
        }
      }

      &.ant-input-affix-wrapper-disabled {
        .ant-input-suffix {
          color: #a7aaaf;
        }
      }
    }
  }

  .online_services_option_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .online_services_option_checkbox_group {
    display: flex;
    align-items: center;
  }

  .online_services_option_checkbox_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-left: 8px;
  }

  .register_account_number_group {
    display: flex;
    align-items: center;
    padding-bottom: 22px;
    margin-bottom: 22px;
    border-bottom: 1px solid ${colors.white_opacity10};

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }

  .register_account_number_text {
    width: 30%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: left;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 19px;
    }
  }

  .register_account_number_ratio_group {
    width: 25%;
    text-align: left;

    .ant-radio-wrapper:first-child {
      margin-bottom: 30px;
    }
  }

  .register_account_number_random_group {
    display: flex;
    flex-direction: column;
  }

  .register_account_number_random_input_group {
    display: flex;
    margin-top: 8px;

    &:first-child {
      margin-top: 0px;
    }

    .icon-wapper {
      display: flex;
      align-items: center;
      margin-left: 4px;
      cursor: pointer;
    }

    input {
      border: none;
      outline: none;
      background-color: ${({ theme }: { theme: Theme }) => theme.color.dc044};
      border-radius: 5px;
      width: 32px;
      height: 32px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      color: ${({ theme }: { theme: Theme }) => theme.color.dc011};
      text-align: center;

      &:first-child {
        margin-left: 0px;
      }

      /* &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        color: ${colors.red500};
      } */

      @media (max-width: 767px) {
        width: 25px;
      }
    }
  }

  .authentication_method_group {
    display: flex;
    padding-bottom: 22px;
    margin-bottom: 22px;
    border-bottom: 1px solid ${colors.white_opacity10};

    @media (max-width: 767px) {
      flex-direction: column;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }

  .authentication_method_text {
    width: 30%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: left;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 8px;
    }
  }

  .authentication_method_ratio_group {
    width: 35%;
    text-align: left;

    @media (max-width: 767px) {
      width: 100%;
    }

    .ant-radio-wrapper {
      margin-top: 8px;
      &:first-child {
        margin-top: 0px;
      }

      a {
        color: #2d88ff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .privacy {
    display: flex;
    align-items: center;

    &.mb16 {
      align-items: flex-start;
      margin-bottom: 16px;
    }
  }

  .privacy_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-left: 8px;
    text-align: left;

    a {
      color: #2d88ff;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .register_service_btn_group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;

    @media (max-width: 767px) {
      .ant-btn {
        width: calc(50% - 7px);
      }
    }

    button.bg_blue {
      margin-left: 16px;
    }
  }
`
