import styled from '@emotion/styled';

export const SliderWrapper = styled.div`
  width: 100%;
  > canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const SvgContainer = styled('svg')`
  position: absolute;
  left: 0;
  top: 0;
`;
