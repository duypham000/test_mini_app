import React from 'react';
import { useResize } from './use-resize';

interface Props {
  maxHeight?: any;
  margin?: any;
  scaleCoef?: any;
  adjustWidth?: number;
  adjustHeight?: number;
}

export const useDimensions = ({
  maxHeight,
  margin = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  // scaleCoef = 0.5,
  adjustWidth = 0,
  adjustHeight = 0,
}: Props) => {
  const ref = React.useRef(null);
  const { width } = useResize(ref);

  //const height = !maxHeight || width * scaleCoef < maxHeight ? width * scaleCoef : maxHeight;
  const innerWidth = width - (margin.left || 0) - (margin.right || 0);
  const innerHeight = maxHeight - (margin.top || 0) - (margin.bottom || 0);
  return [
    ref,
    {
      svgWidth: width,
      svgHeight: maxHeight,
      width: innerWidth - adjustWidth,
      height: innerHeight - adjustHeight,
    },
  ];
};
