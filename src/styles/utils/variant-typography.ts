import { VARIANT } from '@/constants/typography'
import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const variantTypography =
  ({
    variant,
    variantMobile,
    variantTablet
  }: {
    variant: VARIANT
    variantMobile?: VARIANT
    variantTablet?: VARIANT
  }) =>
  (theme: Theme) =>
    css([
      {
        color: theme.color.dc011,
        fontFamily: theme.fontFamily.fontInter
      },
      variant === 'heading_one' && {
        fontSize: theme.fontSize.heading_one,
        lineHeight: theme.lineHeight.heading_one,
        fontWeight: theme.fontWeight.fw700
      },
      variant === 'heading_two' && {
        fontSize: theme.fontSize.heading_two,
        lineHeight: theme.lineHeight.heading_two,
        fontWeight: theme.fontWeight.fw700
      },
      variant === 'heading_three' && {
        fontSize: theme.fontSize.heading_three,
        lineHeight: theme.lineHeight.heading_three,
        fontWeight: theme.fontWeight.fw700
      },
      variant === 'heading_fourth' && {
        fontSize: theme.fontSize.heading_fourth,
        lineHeight: theme.lineHeight.heading_fourth,
        fontWeight: theme.fontWeight.fw700
      },
      variant === 'heading_fifth' && {
        fontSize: theme.fontSize.heading_fifth,
        lineHeight: theme.lineHeight.heading_fifth,
        fontWeight: theme.fontWeight.fw500
      },
      variant === 'heading_six' && {
        fontSize: theme.fontSize.heading_six,
        lineHeight: theme.lineHeight.heading_six,
        fontWeight: theme.fontWeight.fw700
      },
      variant === 'sub_heading_one' && {
        fontSize: theme.fontSize.sub_heading_one,
        lineHeight: theme.lineHeight.sub_heading_one,
        fontWeight: theme.fontWeight.fw600
      },
      variant === 'sub_heading_two' && {
        fontSize: theme.fontSize.sub_heading_two,
        lineHeight: theme.lineHeight.sub_heading_two,
        fontWeight: theme.fontWeight.fw500
      },
      variant === 'sub_heading_three' && {
        fontSize: theme.fontSize.sub_heading_three,
        lineHeight: theme.lineHeight.sub_heading_three,
        fontWeight: theme.fontWeight.fw600
      },
      variant === 'sub_heading_four' && {
        fontSize: theme.fontSize.sub_heading_four,
        lineHeight: theme.lineHeight.sub_heading_four,
        fontWeight: theme.fontWeight.fw500
      },
      variant === 'body_one' && {
        fontSize: theme.fontSize.body_one,
        lineHeight: theme.lineHeight.body_one,
        fontWeight: theme.fontWeight.fw400
      },
      variant === 'body_two' && {
        fontSize: theme.fontSize.body_two,
        lineHeight: theme.lineHeight.body_two,
        fontWeight: theme.fontWeight.fw400
      },
      variant === 'body_content_one' && {
        fontSize: theme.fontSize.body_content_one,
        lineHeight: theme.lineHeight.body_content_one,
        fontWeight: theme.fontWeight.fw400
      },
      variant === 'body_content_two' && {
        fontSize: theme.fontSize.body_content_two,
        lineHeight: theme.lineHeight.body_content_two,
        fontWeight: theme.fontWeight.fw400
      },
      variant === 'body_content_three' && {
        fontSize: theme.fontSize.body_content_three,
        lineHeight: theme.lineHeight.body_content_three,
        fontWeight: theme.fontWeight.fw400
      },
      variant === 'caption' && {
        fontSize: theme.fontSize.caption,
        lineHeight: theme.lineHeight.caption,
        fontWeight: theme.fontWeight.fw400
      },
      variant === 'caption_two' && {
        fontSize: theme.fontSize.caption_two,
        lineHeight: theme.lineHeight.caption_two,
        fontWeight: theme.fontWeight.fw500
      },
      variant === 'caption_three' && {
        fontSize: theme.fontSize.caption_three,
        lineHeight: theme.lineHeight.caption_three,
        fontWeight: theme.fontWeight.fw600
      },
      variant === 'small_two' && {
        fontSize: theme.fontSize.small_two,
        lineHeight: theme.lineHeight.small_two,
        fontWeight: theme.fontWeight.fw500
      },
      variant === 'small_one' && {
        fontSize: theme.fontSize.small_one,
        lineHeight: theme.lineHeight.small_one,
        fontWeight: theme.fontWeight.fw400
      },

      variantTablet === 'heading_one' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.heading_one,
          lineHeight: theme.lineHeight.heading_one,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantTablet === 'heading_two' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.heading_two,
          lineHeight: theme.lineHeight.heading_two,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantTablet === 'heading_three' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.heading_three,
          lineHeight: theme.lineHeight.heading_three,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantTablet === 'heading_fourth' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.heading_fourth,
          lineHeight: theme.lineHeight.heading_fourth,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantTablet === 'heading_fifth' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.heading_fifth,
          lineHeight: theme.lineHeight.heading_fifth,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantTablet === 'heading_six' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.heading_six,
          lineHeight: theme.lineHeight.heading_six,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantTablet === 'sub_heading_one' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.sub_heading_one,
          lineHeight: theme.lineHeight.sub_heading_one,
          fontWeight: theme.fontWeight.fw600
        }
      },
      variantTablet === 'sub_heading_two' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.sub_heading_two,
          lineHeight: theme.lineHeight.sub_heading_two,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantTablet === 'sub_heading_three' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.sub_heading_three,
          lineHeight: theme.lineHeight.sub_heading_three,
          fontWeight: theme.fontWeight.fw600
        }
      },
      variantTablet === 'sub_heading_four' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.sub_heading_four,
          lineHeight: theme.lineHeight.sub_heading_four,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantTablet === 'body_one' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.body_one,
          lineHeight: theme.lineHeight.body_one,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantTablet === 'body_two' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.body_two,
          lineHeight: theme.lineHeight.body_two,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantTablet === 'body_content_one' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.body_content_one,
          lineHeight: theme.lineHeight.body_content_one,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantTablet === 'body_content_two' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.body_content_two,
          lineHeight: theme.lineHeight.body_content_two,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantTablet === 'body_content_three' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.body_content_three,
          lineHeight: theme.lineHeight.body_content_three,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantTablet === 'caption' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.caption,
          lineHeight: theme.lineHeight.caption,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantTablet === 'caption_two' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.caption_two,
          lineHeight: theme.lineHeight.caption_two,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantTablet === 'caption_three' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.caption_three,
          lineHeight: theme.lineHeight.caption_three,
          fontWeight: theme.fontWeight.fw600
        }
      },
      variantTablet === 'small_two' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.small_two,
          lineHeight: theme.lineHeight.small_two,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantTablet === 'small_one' && {
        [theme.mediaQuery.tablet]: {
          fontSize: theme.fontSize.small_one,
          lineHeight: theme.lineHeight.small_one,
          fontWeight: theme.fontWeight.fw400
        }
      },

      variantMobile === 'heading_one' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.heading_one,
          lineHeight: theme.lineHeight.heading_one,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantMobile === 'heading_two' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.heading_two,
          lineHeight: theme.lineHeight.heading_two,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantMobile === 'heading_three' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.heading_three,
          lineHeight: theme.lineHeight.heading_three,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantMobile === 'heading_fourth' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.heading_fourth,
          lineHeight: theme.lineHeight.heading_fourth,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantMobile === 'heading_fifth' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.heading_fifth,
          lineHeight: theme.lineHeight.heading_fifth,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantMobile === 'heading_six' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.heading_six,
          lineHeight: theme.lineHeight.heading_six,
          fontWeight: theme.fontWeight.fw700
        }
      },
      variantMobile === 'sub_heading_one' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.sub_heading_one,
          lineHeight: theme.lineHeight.sub_heading_one,
          fontWeight: theme.fontWeight.fw600
        }
      },
      variantMobile === 'sub_heading_two' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.sub_heading_two,
          lineHeight: theme.lineHeight.sub_heading_two,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantMobile === 'sub_heading_three' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.sub_heading_three,
          lineHeight: theme.lineHeight.sub_heading_three,
          fontWeight: theme.fontWeight.fw600
        }
      },
      variantMobile === 'sub_heading_four' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.sub_heading_four,
          lineHeight: theme.lineHeight.sub_heading_four,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantMobile === 'body_one' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.body_one,
          lineHeight: theme.lineHeight.body_one,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantMobile === 'body_two' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.body_two,
          lineHeight: theme.lineHeight.body_two,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantMobile === 'body_content_one' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.body_content_one,
          lineHeight: theme.lineHeight.body_content_one,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantMobile === 'body_content_two' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.body_content_two,
          lineHeight: theme.lineHeight.body_content_two,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantMobile === 'body_content_three' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.body_content_three,
          lineHeight: theme.lineHeight.body_content_three,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantMobile === 'caption' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.caption,
          lineHeight: theme.lineHeight.caption,
          fontWeight: theme.fontWeight.fw400
        }
      },
      variantMobile === 'caption_two' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.caption_two,
          lineHeight: theme.lineHeight.caption_two,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantMobile === 'caption_three' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.caption_three,
          lineHeight: theme.lineHeight.caption_three,
          fontWeight: theme.fontWeight.fw600
        }
      },
      variantMobile === 'small_two' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.small_two,
          lineHeight: theme.lineHeight.small_two,
          fontWeight: theme.fontWeight.fw500
        }
      },
      variantMobile === 'small_one' && {
        [theme.mediaQuery.mobile]: {
          fontSize: theme.fontSize.small_one,
          lineHeight: theme.lineHeight.small_one,
          fontWeight: theme.fontWeight.fw400
        }
      }
    ])

export default variantTypography
