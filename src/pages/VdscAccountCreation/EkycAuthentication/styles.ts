import { colors } from '@/themes/colors';
import { Theme } from '@/themes/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 1124px;
  margin: 0 auto;

  .container {
    &.flex {
      display: flex;
    }
  }

  .auto_input_steps {
    width: 630px;
    margin: 0px auto 22px;

    .ant-steps-item-title {
      white-space: nowrap;
    }

    @media (max-width: 767px) {
      width: 100%;
      .ant-steps-item-title {
        white-space: pre-wrap;
      }

      .ant-steps-item-content {
        width: 100px;
      }

      .ant-steps-item-tail {
        &::after {
          margin-left: -20px;
          width: 100%;
        }
      }

      .ant-steps-icon-dot {
        transform: translateX(-20px);
      }
    }
  }

  .register_service {
    width: 824px;
    margin: 0px auto;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .confirm_form {
    width: 824px;
    margin: 0px auto;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .ekyc_authentication_left_steps {
    width: 25%;
    margin-top: 110px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .ekyc_authentication_right_form {
    width: 75%;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .auto_input_steps {
    width: 630px;
    margin: 0px auto 22px;

    .ant-steps-item-title {
      white-space: nowrap;
    }

    @media (max-width: 767px) {
      width: 100%;
      .ant-steps-item-title {
        white-space: pre-wrap;
      }

      .ant-steps-item-content {
        width: 100px;
      }

      .ant-steps-item-tail {
        &::after {
          margin-left: -20px;
          width: 100%;
        }
      }

      .ant-steps-icon-dot {
        transform: translateX(-20px);
      }
    }
  }

  .ekyc_authentication_content {
    &.hasbg {
      background-color: ${({ theme }: { theme: Theme }) => theme.color.dc029};
      box-shadow: 0px 0px 10px
        ${({ isDark }: { isDark: boolean }) =>
          isDark ? '#000000' : 'rgba(0, 0, 0, 0.1)'};
      border-radius: 16px;
      padding: 32px 44px;
      margin-bottom: 22px;

      @media (max-width: 767px) {
        background-color: transparent;
        border: none;
        border-radius: 0px;
        padding: 0px;
        box-shadow: none;
      }
    }
  }

  .take_photo_text {
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

  .take_photo_caution {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #a7aaaf;
    max-width: 616px;
    margin: 0px auto 4px;

    @media (max-width: 767px) {
      max-width: none;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .see_detailed_instructions {
    margin-bottom: 14px;
    text-align: center;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #2d88ff;
      cursor: pointer;
      user-select: none;
      &:hover {
        text-decoration: underline;
      }

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }

  .take_photo_group {
    display: flex;
    justify-content: space-between;
    &.center {
      justify-content: center;
    }
  }

  .take_photo_item {
    width: calc(50% - 24px);

    @media (max-width: 767px) {
      width: calc(72%);
    }
  }

  .take_photo_item_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .take_photo_item_content {
    background-color: ${({ theme }: { theme: Theme }) => theme.color.dc038};
    border-radius: 20px;
    height: 240px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.3s all ease-out;

    &.has_img {
      background-color: transparent;
    }

    &:hover .take_photo_item_content_btn_group {
      z-index: 1;
    }

    &:hover .in_front_image {
      filter: blur(2px);
      -webkit-filter: blur(2px);
    }

    .in_front_image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* filter: blur(2px); */
      /* -webkit-filter: blur(2px); */
    }

    @media (max-width: 767px) {
      background-color: ${({ theme }: { theme: Theme }) => theme.color.dc038};
      border-radius: 10px;
    }
  }

  .take_photo_item_content_btn_group {
    display: flex;
    flex-direction: column;
    z-index: 0;

    .icon-wapper {
      margin-bottom: 10px;

      @media (max-width: 767px) {
        svg {
          width: 139px;
          height: 82px;
        }

        margin-bottom: 16px;
      }
    }

    .ant-btn {
      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 16px;
      }
    }

    .take_photo_item_content_upload_image {
      display: none;
    }

    .upload_image_btn {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #f4f4f5;
      cursor: pointer;
      padding: 9px 50px;
      border-radius: 8px;

      background-color: ${colors.blue500};
      margin-top: 16px;
      margin-bottom: 8px;
      transition: all 0.3s;
      &:hover {
        background-color: ${colors.blue600} !important;
      }

      @media (max-width: 767px) {
        padding: 9px 28px;
        font-size: 14px;
        line-height: 16px;
      }
    }

    .gray {
      background-color: ${colors.black400};
      transition: all 0.3s;
      &:hover {
        background-color: ${colors.white_opacity10} !important;
      }
    }

    @media (max-width: 767px) {
      align-items: center;
    }
  }

  .ekyc_authentication_btn_group {
    display: flex;
    justify-content: center;

    .bg_blue {
      margin-left: 16px;
    }

    @media (max-width: 767px) {
      .ant-btn {
        width: calc(50% - 7px);
      }
    }
  }
`;
