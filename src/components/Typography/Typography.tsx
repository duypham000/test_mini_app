import { VARIANT } from '@/constants/typography';
import React from 'react';
import styles from './styles';
import utilStyles from '@/styles/util-styles';

export enum Variant {
  heading_one = 'h1',
  heading_two = 'h2',
  heading_three = 'h3',
  heading_fourth = 'h4',
  heading_fifth = 'h5',
  heading_six = 'h6',

  sub_heading_one = 'h6',
  sub_heading_two = 'h6',
  sub_heading_three = 'h6',
  sub_heading_four = 'h6',

  body_one = 'span',
  body_two = 'span',
  body_content_one = 'span',
  body_content_two = 'span',
  body_content_three = 'span',

  caption = 'span',
  caption_two = 'span',
  caption_three = 'span',

  small_one = 'span',
  small_two = 'span',
}

interface Props extends React.ComponentPropsWithoutRef<'span'> {
  children?: React.ReactNode;
  variant?: VARIANT;
  variantMobile?: VARIANT;
  variantTablet?: VARIANT;
  cssCustom?: any;
  component?: React.ElementType;
}

const Typography = React.forwardRef<any, Props>((props, ref) => {
  const {
    children,
    variant = 'body_one',
    variantMobile,
    variantTablet,
    cssCustom,
    component,
    ...rest
  } = props;

  const Component: any = component || Variant[variant];

  return (
    <Component
      ref={ref}
      css={[
        styles.getWrapperCss(),
        utilStyles.variantTypography({
          variant,
          variantMobile,
          variantTablet,
        }),
        cssCustom,
      ]}
      {...rest}
    >
      {children}
    </Component>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Typography.displayName = 'Typography';
}

export default Typography;
