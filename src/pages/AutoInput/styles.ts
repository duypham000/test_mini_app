import styled from '@emotion/styled'

export const Wrapper = styled.div`
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

  .personal_information {
    width: 856px;
    margin: 0px auto;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .register_service {
    width: 856px;
    margin: 0px auto;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .confirm_form {
    width: 856px;
    margin: 0px auto;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`
