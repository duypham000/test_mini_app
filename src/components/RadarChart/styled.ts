import styled from '@emotion/styled';

export const SnowflakeWrapper = styled.div`
  position: relative;
  &:before {
    //position: absolute;
    display: block;
    content: ' ';
    //top: 0;
    //left: 0;
    border-radius: 50%;
    width: 100%;
    //padding-bottom: 100%;
  }
  min-width: 48px;
  width: 100%;
  margin: auto;
  h4,
  p {
    margin-bottom: 0;
    margin-bottom: 0;
  }
  > span {
    > p {
      svg {
        width: 10px;
        height: 10px;
        margin-bottom: -3px;
        * {
          fill: white;
        }
      }
    }
  }
  > div {
    position: relative;
    width: 100%;
    //padding-bottom: 100%;
  }
`;

export const MediaWrapper = styled('div')`
  width: 100%;
  .isLocked {
    display: block;
    opacity: 0;
  }
  &:hover .isLocked {
    display: block;
    opacity: 1;
  }
`;
export const RotateLoadingContainer = styled.div`
  width: 300px;
  height: 300px;
  z-index: 10;
  position: absolute;
  top: 0;
  padding: 11%;
`;

export const RotateLoading = styled.div`
  width: 100%;
  height: 100%;
  background: conic-gradient(#040b1800 50%, rgba(0, 7, 22, 0) 20%, #ffffff7a);
  overflow: hidden;
  border-radius: 50%;
  animation: rotating 2.4s linear infinite;
  transform-origin: center center;
  opacity: 0.3;
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LockOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(222, 222, 222, 0.4);
  overflow: hidden;
  border-radius: 50%;
  transform-origin: center center;
  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -19px;
    margin-top: -21px;
    padding: 6px 8px;
    width: 40px;
    height: 40px;
    background: #f4f4f4;
    border-radius: 25px;
    cursor: pointer;
  }
`;
