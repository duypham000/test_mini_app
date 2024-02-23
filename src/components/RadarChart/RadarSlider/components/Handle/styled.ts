import styled from '@emotion/styled';

interface TranslateProps {
  yPosition: number;
}

export const Group = styled('g')<TranslateProps>`
  transform: ${(props: any) => `translate(44.3%, ${props.yPosition}%)`};
  cursor: move;
  transform-origin: center;
`;

interface RotationProps {
  angle: number;
}

export const RotationGroup = styled('g')<RotationProps>`
  transform: ${(props: any) => `rotate(${props.angle}deg)`};
  user-select: none;
  transform-origin: center;
`;

const BaseCircle = styled('circle')`
  fill: ${() => '#2D88FF'};
  transition: all 0.2s linear;
`;

export const Fill = styled(BaseCircle)`
  opacity: 0.4;
  &:hover {
    opacity: 0.6;
  }
`;

export const Stroke = styled(BaseCircle)`
  opacity: 0.2;
  &:hover {
    opacity: 0.4;
  }
`;

export const Arrows = styled('path')`
  opacity: 0.9;
  fill: ${() => '#2D88FF'};
`;

export const WhiteDot = styled('circle')`
  fill: ${() => '#2D88FF'};
  opacity: 0.5;
`;
