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
    padding: 32px 0px;

    @media (max-width: 767px) {
      background-color: transparent;
      border: none;
      border-radius: 0px;
      padding: 0px;
      box-shadow: none;
    }
  }

  .confirm_form_title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 22px;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 16px;
    }
  }

  .confỉm_form_icon {
    margin-bottom: 16px;
    text-align: center;

    .icon-wraper {
      display: flex;
      align-items: center;
    }
  }

  .account_information_to_mail_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 16px;

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 16px;
    }
  }

  .confirm_form_input_group {
    text-align: center;
    margin-bottom: 16px;

    input {
      width: 262px;
      height: 38px;
      border: none;
      outline: none;
      background: none;
      background-color: ${({ theme }: { theme: Theme }) => theme.color.dc038};
      border-radius: 10px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${colors.gray100};
      padding: 0px 16px;
    }
  }

  .recheck_mail_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 16px;

    .color_green {
      color: #25b770;
    }

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 8px;
    }
  }

  .confirm_form_btn_group {
    text-align: center;
    margin-bottom: 22px;
  }

  .confirm_form_caution {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #a7aaaf;
    margin-bottom: 16px;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 14px;
    }
  }

  .no_mail_recieve {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 4px;
  }

  .bottom_option {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;

    span:first-child {
      color: #2d88ff;
      cursor: pointer;
      user-select: none;
      &:hover {
        text-decoration: underline;
      }
    }

    a {
      color: #2d88ff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
