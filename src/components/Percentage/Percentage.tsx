import React from 'react';
import Typography from '@/components/Typography';
import { CaretDownOutlinedRed500 } from '@/components/icons/CaretDownOutlinedRed500';
import { CaretUpOutlinedGreen500 } from '@/components/icons/CaretUpOutlinedGreen500';
import { colors } from '@/themes/colors';
import { Row } from '../GridLayout';
import { VARIANT } from '@/constants/typography';
import { roundNumber } from '@/utils/round-number';
import { formatPriceVND } from '@/utils/format-price';

interface Props {
  value: number;
  colorCustom?: any;
  cssCustom?: React.CSSProperties | any;
  variant?: VARIANT;
  variantMobile?: VARIANT;
  hasOperator?: boolean;
  hasIcon?: boolean;
  suffix?: string;
  isRounded?: boolean;
  justify?: 'start' | 'end' | 'center';
  isFormatPrice?: boolean;
}

const Percentage: React.FC<Props> = (props) => {
  const {
    value,
    cssCustom,
    variant,
    variantMobile = 'caption_two',
    hasOperator = true,
    hasIcon = true,
    suffix = '%',
    isRounded = true,
    colorCustom,
    justify = 'start',
    isFormatPrice = false,
  } = props;

  const finalValue = React.useMemo(() => {
    const valueRounded = isRounded ? roundNumber(value) : value;

    if (value === undefined) {
      return `-`;
    }

    if (!hasOperator) {
      return `${
        valueRounded
          ? roundNumber(Math.abs(value), Math.abs(value) > 0.01 ? 2 : 3)
          : Math.abs(value)
      }${suffix}`;
    }

    if (isFormatPrice) {
      return `${formatPriceVND(valueRounded, false)}${suffix}`;
    }

    return `${valueRounded}${suffix}`;
  }, [value, hasOperator, isFormatPrice]);

  const color = React.useMemo(() => {
    if (colorCustom !== undefined) return colorCustom;
    if (value > 0) return colors.green500;
    if (value < 0) return colors.red500;
    return colors.yellow500;
  }, [value]);

  const icon = React.useMemo(() => {
    if (!hasIcon) return null;

    if (value > 0)
      return <CaretUpOutlinedGreen500 fill={color} css={{ marginRight: 2 }} />;
    if (value < 0)
      return <CaretDownOutlinedRed500 fill={color} css={{ marginRight: 2 }} />;

    return null;
  }, [hasIcon, value, color]);

  return (
    <Row wrap={false} align="middle" justify={justify}>
      {icon}
      <Typography
        variant={variant}
        variantMobile={variantMobile}
        cssCustom={[{ color: color }, cssCustom]}
      >
        {finalValue}
      </Typography>
    </Row>
  );
};

export default Percentage;
