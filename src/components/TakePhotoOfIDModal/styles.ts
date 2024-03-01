import { Theme } from '@/themes/theme'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

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
        // minHeight: 200,
        // maxHeight: 428,
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
      }
    })
}

export const Wrapper = styled.div`
  @media (max-width: 767px) {
    position: relative;
    margin-top: 16px;
  }

  .take_photo_of_id_title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 24px;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 16px;
    }
  }

  .take_photo_of_id_sub_title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    margin-bottom: 16px;

    &.mb24 {
      margin-bottom: 24px;
    }
  }

  .take_photo_of_id_check_list {
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
  }

  .take_photo_of_id_check_item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0px;
    }

    .icon-wapper {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
    }
  }

  .take_photo_of_id_error_list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;

    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }

  .take_photo_of_id_error_item {
    width: calc(25% - 12px);
    padding: 24px 16px 16px;
    background-color: ${({ theme }: { theme: Theme }) => theme.color.dc044};
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
      width: calc(50% - 7px);

      &:nth-child(3),
      &:nth-child(4) {
        margin-top: 28px;
      }
    }

    .icon-wapper:first-child {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -100%);
    }

    .icon-wapper:nth-child(2) {
      flex-grow: 1;
      overflow: hidden;
    }

    span:last-child {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
    }
  }

  .btn_group {
    text-align: center;

    @media (max-width: 767px) {
      position: absolute;
      width: 100%;
      bottom: 0px;

      .ant-btn {
        width: 100%;
      }
    }
  }
`

export const stylescss = {
  imgWrapper: (theme: Theme) =>
    css({
      backgroundColor: theme.color.dc044,
      padding: '24px 16px 16px',
      position: 'relative',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',

      '&> *:last-child': {
        marginTop: 28
      },
      '& > .icon-wapper': {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -200%)'
      },
      '& > span:last-child': {
        color: theme.color.dc011
      }
    })
}
