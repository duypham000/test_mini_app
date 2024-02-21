import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const table =
  (props?: { emptyData?: boolean; headerBg?: string }) => (theme: Theme) => {
    return css([
      // base styles
      {
        maxWidth: `calc(100vw - 144px)`,
        backgroundColor: `transparent`,

        '& tr:hover': {
          cursor: `pointer`,
          backgroundColor: theme.color.dc072,

          '& td': {
            backgroundColor: `${theme.color.dc072} !important`,
            transition: `none`,

            [theme.mediaQuery.mobile]: {
              backgroundColor: `${theme.color.dc001} !important`,
            },
          },
        },

        '& .simplize-table-sticky-holder': {
          zIndex: 3,
          position: `sticky`,
        },

        '& .simplize-table-cell': {
          verticalAlign: `middle`,
        },

        '&.simplize-table-ping-left.simplize-table-fixed-column.simplize-table-scroll-horizontal.simplize-table-has-fix-left .simplize-table-cell-fix-left':
          {
            // backgroundColor: `${theme.color.dc001} !important`,
          },

        '& .simplize-table-container': {
          // '&.simplize-table-cell simplize-table-cell-fix-left simplize-table-cell-fix-left-last'
          '& .simplize-table-tbody .simplize-table-cell:first-of-type.simplize-table-cell-fix-left.simplize-table-cell-fix-left-last':
            {
              backgroundColor: `${theme.color.dc001}`,
            },

          '& .simplize-table-tbody > tr > td': {
            padding: '12px',
          },

          '& tr': {
            height: 63,
            borderRadius: `5px`,
            borderCollapse: `separate`,
          },

          '& tr:nth-of-type(1)': {
            height: 48,
          },

          '& .simplize-table-header': {
            background: `transparent`,

            '& tr': {
              background:
                (props?.headerBg && props.headerBg) || theme.color.dc001,

              '& th': {
                background: `${theme.color.dc052}`,
                backgroundColor: `${theme.color.dc001}`,

                fontFamily: theme.fontFamily.fontInter,
                fontWeight: theme.fontWeight.fw500,
                fontSize: theme.fontSize.caption_two,
                lineHeight: theme.lineHeight.caption_two,
                color: theme.color.dc014,

                '&::before': {
                  display: `none`,
                },
              },

              'th.simplize-table-cell': {
                color: theme.color.dc014,
                fontSize: theme.fontSize.caption_two,
                lineHeight: theme.lineHeight.caption_two,
                fontWeight: theme.fontWeight.fw500,

                '& *': {
                  color: theme.color.dc014,
                  fontSize: theme.fontSize.caption_two,
                  lineHeight: theme.lineHeight.caption_two,
                  fontWeight: theme.fontWeight.fw500,
                },

                [theme.mediaQuery.md]: {
                  fontSize: `10px`,
                  lineHeight: `12px`,

                  '& .simplize-table-column-sorter-down': {
                    fontSize: `8px`,
                  },
                },
              },

              '& .simplize-table-cell': {
                color: `#ffffff`,
                padding: `8px 12px`,
                fontSize: `14px`,
                lineHeight: `16px`,
                fontWeight: `normal`,
                borderBottom: `none`,

                [theme.mediaQuery.md]: {
                  padding: `4px 4px`,
                },

                '& .simplize-table-column-sorters': {
                  display: `inline-flex`,
                },

                '&.simplize-table-cell-row-hover': {
                  background: `transparent`,
                },

                '&:first-of-type': {
                  borderTopLeftRadius: `5px`,
                  borderBottomLeftRadius: `5px`,

                  [theme.mediaQuery.md]: {
                    borderBottomLeftRadius: `0px`,
                  },
                },

                '&:last-child': {
                  borderTopRightRadius: `5px`,
                  borderBottomRightRadius: `5px`,
                },

                '& .simplize-table-expanded-row-fixed': {
                  width: `100% !important`,
                },
              },
            },

            '& .simplize-table-summary': {
              background: `transparent`,

              '& tr': {
                '& td.simplize-table-cell': {
                  background: `#18191a`,
                },

                '& td:first-of-type': {
                  background: `${theme.color.dc001} !important`,
                },
              },

              '&. tr.row-summary': {
                '& td.simplize-table-cell': {
                  background: `#3a3b3c`,

                  [theme.mediaQuery.md]: {
                    background: `#242526`,
                  },
                },
              },
            },
          },

          '& .simplize-table-summary': {
            background: `none`,

            '& .bottom-result': {
              '& td': {
                background: `#3a3b3c`,

                [theme.mediaQuery.md]: {
                  background: `#242526`,
                },
              },
            },
          },

          '& .simplize-table-body': {
            '& .simplize-table-placeholder': {
              background: theme.color.dc032,

              '&:hover': {
                '& td': {
                  background: `#3a3b3c`,
                },
              },

              '& .ant-empty': {
                color: `#fff`,
              },

              '& > td': {
                color: theme.color.dc011,
              },
            },

            '& .simplize-table-row': {
              '& td': {
                borderBottom: `1px solid ${theme.color.white_opacity10ToBlack200}`,
                fontFamily: theme.fontFamily.fontInter,
                fontWeight: theme.fontWeight.fw500,
                fontSize: theme.fontSize.sub_heading_two,
                lineHeight: theme.lineHeight.sub_heading_two,
                color: theme.color.gray200ToGray500,

                '&:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(8)': {
                  fontFamily: theme.fontFamily.fontInter,
                  fontWeight: theme.fontWeight.fw400,
                  fontSize: theme.fontSize.body_one,
                  lineHeight: theme.lineHeight.body_one,
                },

                '&:nth-of-type(10) a': {
                  fontFamily: theme.fontFamily.fontInter,
                  fontWeight: theme.fontWeight.fw500,
                  fontSize: theme.fontSize.sub_heading_two,
                  lineHeight: theme.lineHeight.sub_heading_two,
                  color: theme.color.blue500,
                },
              },

              '&:nth-of-type(odd)': {
                '& td': {
                  background: `transparent`,

                  [theme.mediaQuery.md]: {
                    borderBottom: `0.5px solid ${theme.color.white_opacity5ToBlack200}`,
                  },
                },
              },

              '&:nth-of-type(even)': {
                '& td': {
                  background: `transparent`,

                  [theme.mediaQuery.md]: {
                    borderBottom: `0.5px solid ${theme.color.white_opacity5ToBlack200}`,
                  },
                },
              },

              '& td:first-of-type': {
                background: theme.color.dc001,
              },
            },
          },
        },

        [theme.mediaQuery.mobile]: {
          maxWidth: `100%`,
          width: `100%`,

          '& .simplize-table-sticky-scroll': {
            display: `none`,
          },

          '& .simplize-table-header': {
            '& .simplize-table-cell': {
              fontWeight: theme.fontWeight.fw500,
              fontSize: `${theme.fontSize.small_two} !important`,
              lineHeight: `${theme.lineHeight.small_two} !important`,
            },

            '& .simplize-table-cell:first-of-type': {
              borderRadius: 0,
              borderTopLeftRadius: `0px !important`,
            },

            '& tr': {
              '& th:nth-of-type(1)': {
                padding: `0px 0px 0px 16px !important`,
              },

              '& th:nth-last-of-type(1)': {
                padding: `0px 16px !important`,
              },

              '& th': {
                '&::before': {},
              },
            },

            '& .simplize-table-summary': {
              '& tr': {
                '& td.simplize-table-cell': {},
              },

              '&. tr.row-summary': {
                '& td.simplize-table-cell': {},
              },
            },
          },

          'div.simplize-table-body': {
            cursor: `pointer`,
            overflow: 'auto',

            [theme.mediaQuery.mobile]: {
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },

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

          'div.simplize-table-sticky-scroll': {
            borderRadius: 12,
            padding: 8,
            cursor: `pointer`,

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
        },
      },

      // overriding base styles
      props?.emptyData && {
        '& .simplize-table-container': {
          '& .simplize-table-body': {
            display: `none`,
          },
        },

        [theme.mediaQuery.mobile]: {
          display: `none`,
        },
      },
    ]);
  };

export default table;
