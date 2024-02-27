import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@/themes/theme';
import { colors } from '@/themes/colors';

export const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      top: '50%',
      maxWidth: 760,
      borderRadius: 10,
      transform: 'translateY(-50%)',

      '& .simplize-dialog-header': {
        borderRadius: 10,
        padding: '24px 32px 8px',
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
        // minHeight: 200,
        // maxHeight: 428,
        overflow: `auto`,
        padding: '60px 32px 32px',

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
  display: flex;
  flex-direction: column;
  align-items: center;

  .react_webcam {
    width: 676px;
    min-height: 507px;
    background-color: #3a3b3c;
    margin-bottom: 22px;
    position: relative;

    &.capturing {
      background-color: transparent;
    }

    @media (max-width: 767px) {
      width: 100%;
      min-height: auto;
    }

    .count_down {
      position: absolute;
      left: 120px;
      top: 20px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      color: ${colors.gray100};

      @media (max-width: 767px) {
        left: 20px;
      }
    }

    &::before {
      content: ' ';
      width: 100px;
      height: 105%;
      background-color: ${({ theme }: { theme: Theme }) => theme.color.dc056};
      top: -1px;
      left: 0;
      position: absolute;

      @media (max-width: 767px) {
        width: 0;
        height: 0;
      }
    }

    &::after {
      content: ' ';
      width: 100px;
      height: 105%;
      background-color: ${({ theme }: { theme: Theme }) => theme.color.dc056};
      top: -1px;
      right: 0;
      position: absolute;

      @media (max-width: 767px) {
        width: 0;
        height: 0;
      }
    }

    video,
    img {
      width: 100%;
    }

    p {
      background-color: rgba(24, 25, 26, 0.5);
      width: 488px;
      padding: 15px 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      text-align: center;
      user-select: none;
      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #ffffff;

        &.blue {
          cursor: pointer;
          color: #2d88ff;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .btn_group {
    .bg_blue {
      margin-left: 16px;
    }
  }
`;
