import { Theme } from '@/themes/theme';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@/themes/colors';

export const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      top: '50%',
      maxWidth: 684,
      borderRadius: 10,
      transform: 'translateY(-50%)',

      '& .simplize-dialog-header': {
        borderRadius: 10,
        padding: '24px 32px',
        backgroundColor: theme.color.dc056,
      },

      '& .simplize-dialog-content': {
        borderRadius: 10,
        backgroundColor: theme.color.dc056,
      },

      '& .simplize-dialog-close': {
        margin: '22px 26px',
        fill: theme.color.black300,

        '&:hover': {
          fill: theme.color.dc017,
        },
      },

      '& .simplize-dialog-body': {
        minHeight: 200,
        // maxHeight: 428,
        overflow: `auto`,
        padding: '0px 32px 32px',

        '&:hover::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },

        '&::-webkit-scrollbar': {
          width: 8,
          height: 8,
        },

        '&::-webkit-scrollbar-track': {
          borderRadius: 0,
        },

        '&::-webkit-scrollbar-thumb': {
          borderRadius: 4,
          backgroundColor: theme.color.black400,
          visibility: 'hidden',
        },

        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.color.black300,
        },
      },

      '& .simplize-dialog-footer': {
        padding: '0px 32px 32px',
      },
    }),
};

export const Wrapper = styled.div`
  @media (max-width: 767px) {
    position: relative;
  }

  .support_system_title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 22px;

    @media (max-width: 767px) {
      margin-top: 16px;
      text-align: left;
    }
  }

  .support_system_profile_information {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    margin-bottom: 16px;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 19px;
    }
  }

  .support_system_input_group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 16px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  .support_system_input_item {
    width: 48%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    @media (max-width: 767px) {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }

    label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #a7aaaf;

      @media (max-width: 767px) {
        margin-bottom: 8px;
      }
    }

    input {
      border: none;
      outline: none;
      background: none;

      padding: 0px 16px;
      background-color: transparent;
      border: 1px solid ${colors.black400};
      border-radius: 10px;
      height: 38px;
      width: 180px;

      @media (max-width: 767px) {
        width: 100%;
        background-color: #242526;
      }
    }
  }

  .support_request_content {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .support_system_textarea {
    border: none;
    outline: none;
    background: none;

    background-color: transparent;
    border: 1px solid ${colors.black400};
    border-radius: 10px;
    padding: 16px;
    height: 114px;
    display: block;
    width: 100%;
    resize: none;
    margin-bottom: 8px;
    color: ${({ theme }: { theme: Theme }) => theme.color.dc011};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    @media (max-width: 767px) {
      background-color: #242526;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      /* background: #f1f1f1; */
    }

    ::-webkit-scrollbar-thumb {
      background: #a7aaaf;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #a7aaaf;
    }
  }

  .support_system_contact {
    margin-bottom: 22px;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #a7aaaf;

      &:last-child {
        color: #ffffff;
      }
    }
  }

  .support_system_btn_group {
    text-align: center;

    .ant-btn {
      @media (max-width: 767px) {
        width: 100%;
      }
    }

    @media (max-width: 767px) {
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  }
`;
