import LockTooltip from '@/components/LockTooltip'
import Typography from '@/components/Typography'
import { useAppSelector } from '@/redux/hooks'
// import { useAppSelector } from '@/redux/hooks';
import utilStyles from '@/styles/util-styles'
import { Theme } from '@/themes/theme'
import React from 'react'
import BooleanOption from './BooleanOption'
import OptionItem from './OptionItem'
import Select from './Select'
import SelectMultiOption from './SelectMultiOption'
import SelectOption from './SelectOption'
import styles from './styles'
import { DropdownIcon } from '@/components/icons/DropdownIcon'

type Suggestion = {
  code: string
  description: string
  id: number
  name: string
  rules: string
}

interface Props {
  criteria: any
  setCriteria: (criteria: any) => void
  suggestion?: Suggestion[]
  selectedValue: string
  setSelectedValue: (selectedValue: string) => void
}

const Criteria: React.FC<Props> = (props): JSX.Element => {
  const { criteria, setCriteria, suggestion, selectedValue, setSelectedValue } =
    props
  const userInfo = useAppSelector((state) => state.profile.userInfo)

  const isLocked = React.useMemo(
    () =>
      !userInfo?.membershipStatus ||
      userInfo?.features?.LOC_CO_PHIEU_NANG_CAO !== '1',
    [userInfo]
  )

  return (
    <div>
      <div css={{ marginBottom: 24 }}>
        <div css={{ maxWidth: 142, position: 'relative' }}>
          <Select
            value={selectedValue}
            onChange={(value) => setSelectedValue(value)}
            options={[
              {
                label: 'Mặc định',
                value: ''
              }
            ].concat(
              suggestion
                ? suggestion?.map((item) => ({
                    label: item?.name,
                    value: item?.rules
                  }))
                : []
            )}
          />
          <DropdownIcon
            css={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
        </div>
      </div>
      <div css={[styles.optionList(), utilStyles.scrollBar({ width: 4 })]}>
        {/* Tổng quan */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Tổng quan`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Sàn giao dịch */}
            <div css={styles.option()}>
              <SelectMultiOption
                value={criteria?.stockExchange}
                setValue={(value) =>
                  setCriteria({ ...criteria, stockExchange: value })
                }
                label={`Sàn giao dịch`}
                recommendList={[
                  {
                    label: 'HOSE',
                    value: 'HOSE'
                  },
                  {
                    label: 'HNX',
                    value: 'HNX'
                  },
                  {
                    label: 'UPCOM',
                    value: 'UPCOM'
                  }
                ]}
              />
            </div>

            {/* Khối lượng */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.volume}
                setValue={(value) =>
                  setCriteria({ ...criteria, volume: value })
                }
                suffix={`K`}
                label={`Khối lượng`}
                recommendList={[
                  {
                    label: '> 100K',
                    value: {
                      start: '100',
                      end: ''
                    }
                  },
                  {
                    label: '> 400K',
                    value: {
                      start: '400',
                      end: ''
                    }
                  },
                  {
                    label: '> 700K',
                    value: {
                      start: '700',
                      end: ''
                    }
                  },
                  {
                    label: '> 1Tr',
                    value: {
                      start: '1000',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* KLTB 10 phiên */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.volume10dAvg}
                setValue={(value) =>
                  setCriteria({ ...criteria, volume10dAvg: value })
                }
                suffix={`K`}
                label={`KLTB 10 phiên`}
                recommendList={[
                  {
                    label: '> 100K',
                    value: {
                      start: '100',
                      end: ''
                    }
                  },
                  {
                    label: '> 400K',
                    value: {
                      start: '400',
                      end: ''
                    }
                  },
                  {
                    label: '> 700K',
                    value: {
                      start: '700',
                      end: ''
                    }
                  },
                  {
                    label: '> 1Tr',
                    value: {
                      start: '1000',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Vốn hóa */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.marketCapVnd}
                setValue={(value) =>
                  setCriteria({ ...criteria, marketCapVnd: value })
                }
                suffix={`T`}
                label={`Vốn hóa`}
                recommendList={[
                  {
                    label: 'Nhỏ',
                    value: {
                      start: '0',
                      end: '1000'
                    }
                  },
                  {
                    label: 'Vừa',
                    value: {
                      start: '1000',
                      end: '10000'
                    }
                  },
                  {
                    label: 'Lớn',
                    value: {
                      start: '10000',
                      end: ''
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Định giá */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Định giá`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Biên an toàn */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Biên an toàn`}</Typography>
                </div>
              )}
              {!isLocked && (
                <OptionItem
                  value={criteria?.marginOfSafety}
                  setValue={(value) =>
                    setCriteria({ ...criteria, marginOfSafety: value })
                  }
                  suffix={`%`}
                  label={`Biên an toàn`}
                  recommendList={[
                    {
                      label: '> 10%',
                      value: {
                        start: '10',
                        end: ''
                      }
                    },
                    {
                      label: '> 20%',
                      value: {
                        start: '20',
                        end: ''
                      }
                    },
                    {
                      label: '> 30%',
                      value: {
                        start: '30',
                        end: ''
                      }
                    },
                    {
                      label: '> 40%',
                      value: {
                        start: '40',
                        end: ''
                      }
                    }
                  ]}
                />
              )}
            </div>

            {/* P/E */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.peRatio}
                setValue={(value) =>
                  setCriteria({ ...criteria, peRatio: value })
                }
                suffix={``}
                label={`P/E`}
                recommendList={[
                  {
                    label: '< 10',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '< 15',
                    value: {
                      start: '0',
                      end: '15'
                    }
                  },
                  {
                    label: '< 20',
                    value: {
                      start: '0',
                      end: '20'
                    }
                  },
                  {
                    label: '< TB 5 năm',
                    value: {
                      start: '',
                      end: 'peRatioAverage'
                    }
                  }
                ]}
              />
            </div>

            {/* P/B */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.pbRatio}
                setValue={(value) =>
                  setCriteria({ ...criteria, pbRatio: value })
                }
                suffix={``}
                label={`P/B`}
                recommendList={[
                  {
                    label: '<= 1',
                    value: {
                      start: '0',
                      end: '1'
                    }
                  },
                  {
                    label: '<= 2',
                    value: {
                      start: '0',
                      end: '2'
                    }
                  },
                  {
                    label: '<= 3',
                    value: {
                      start: '0',
                      end: '3'
                    }
                  },
                  {
                    label: '< TB 5 năm',
                    value: {
                      start: '',
                      end: 'pbRatioAverage'
                    }
                  }
                ]}
              />
            </div>

            {/* EV/EBITDA */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.evEbitdaRatio}
                setValue={(value) =>
                  setCriteria({ ...criteria, evEbitdaRatio: value })
                }
                suffix={``}
                label={`EV/EBITDA`}
                recommendList={[
                  {
                    label: '< 10',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '< 15',
                    value: {
                      start: '0',
                      end: '15'
                    }
                  },
                  {
                    label: '< 20',
                    value: {
                      start: '0',
                      end: '20'
                    }
                  },
                  {
                    label: '> 20',
                    value: {
                      start: '20',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tiền mặt ròng/Vốn hóa */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Tiền mặt ròng/Vốn hóa`}</Typography>
                </div>
              )}
              {!isLocked && (
                <OptionItem
                  value={criteria?.netCashToMarketCap}
                  setValue={(value) =>
                    setCriteria({ ...criteria, netCashToMarketCap: value })
                  }
                  suffix={`%`}
                  label={`Tiền mặt ròng/Vốn hóa`}
                  recommendList={[
                    {
                      label: '> 30%',
                      value: {
                        start: '30',
                        end: ''
                      }
                    },
                    {
                      label: '> 40%',
                      value: {
                        start: '40',
                        end: ''
                      }
                    },
                    {
                      label: '> 50%',
                      value: {
                        start: '50',
                        end: ''
                      }
                    },
                    {
                      label: '> 60%',
                      value: {
                        start: '60',
                        end: ''
                      }
                    }
                  ]}
                />
              )}
            </div>
          </div>
        </div>

        {/* Tăng trưởng */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Tăng trưởng`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Tăng trưởng doanh thu quý so với quý liền trước */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.revenueGrowthPreQ}
                setValue={(value) =>
                  setCriteria({ ...criteria, revenueGrowthPreQ: value })
                }
                suffix={`%`}
                label={`Tăng trưởng doanh thu quý so với quý liền trước`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng doanh thu quý so với cùng kỳ */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.revenueGrowthQoq}
                setValue={(value) =>
                  setCriteria({ ...criteria, revenueGrowthQoq: value })
                }
                suffix={`%`}
                label={`Tăng trưởng doanh thu quý so với cùng kỳ`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng lợi nhuận quý so với quý liền trước */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.netIncomeGrowthPreQ}
                setValue={(value) =>
                  setCriteria({ ...criteria, netIncomeGrowthPreQ: value })
                }
                suffix={`%`}
                label={`Tăng trưởng lợi nhuận quý so với quý liền trước`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng lợi nhuận quý so với cùng kỳ */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.netIncomeGrowthQoq}
                setValue={(value) =>
                  setCriteria({ ...criteria, netIncomeGrowthQoq: value })
                }
                suffix={`%`}
                label={`Tăng trưởng lợi nhuận quý so với cùng kỳ`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng EPS ltm so với quý trước */}
            {/* <div css={styles.option()}>
              <OptionItem
                value={criteria?.epsLtmGrowthPreQ}
                setValue={(value) =>
                  setCriteria({ ...criteria, epsLtmGrowthPreQ: value })
                }
                suffix={`%`}
                label={`Tăng trưởng EPS ltm so với quý trước`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: '',
                    },
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: '',
                    },
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: '',
                    },
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: '',
                    },
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: '',
                    },
                  },
                ]}
              />
            </div> */}

            {/* Tăng trưởng EPS quý so với quý liền trước */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.epsGrowthPreQ}
                setValue={(value) =>
                  setCriteria({ ...criteria, epsGrowthPreQ: value })
                }
                suffix={`%`}
                label={`Tăng trưởng EPS quý so với quý liền trước`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng EPS quý so với cùng kỳ */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.epsGrowthQoq}
                setValue={(value) =>
                  setCriteria({ ...criteria, epsGrowthQoq: value })
                }
                suffix={`%`}
                label={`Tăng trưởng EPS quý so với cùng kỳ`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng EPS LTM so với cùng kỳ */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.epsLtmGrowthQoq}
                setValue={(value) =>
                  setCriteria({ ...criteria, epsLtmGrowthQoq: value })
                }
                suffix={`%`}
                label={`Tăng trưởng EPS LTM so với cùng kỳ`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng doanh thu 12 tháng gần nhất */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.revenueLtmGrowth}
                setValue={(value) =>
                  setCriteria({ ...criteria, revenueLtmGrowth: value })
                }
                suffix={`%`}
                label={`Tăng trưởng doanh thu 12 tháng gần nhất`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng lợi nhuận 12 tháng gần nhất */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.netIncomeLtmGrowth}
                setValue={(value) =>
                  setCriteria({ ...criteria, netIncomeLtmGrowth: value })
                }
                suffix={`%`}
                label={`Tăng trưởng lợi nhuận 12 tháng gần nhất`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng doanh thu bình quân 5 năm */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.revenue5yGrowth}
                setValue={(value) =>
                  setCriteria({ ...criteria, revenue5yGrowth: value })
                }
                suffix={`%`}
                label={`Tăng trưởng doanh thu bình quân 5 năm`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng lợi nhuận bình quân 5 năm */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.netIncome5yGrowth}
                setValue={(value) =>
                  setCriteria({ ...criteria, netIncome5yGrowth: value })
                }
                suffix={`%`}
                label={`Tăng trưởng lợi nhuận bình quân 5 năm`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng doanh thu bình quân 3 năm dự phóng */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Tăng trưởng doanh thu bình quân 3 năm dự phóng`}</Typography>
                </div>
              )}
              {!isLocked && (
                <OptionItem
                  value={criteria?.revenueEstGrowth}
                  setValue={(value) =>
                    setCriteria({ ...criteria, revenueEstGrowth: value })
                  }
                  suffix={`%`}
                  label={`Tăng trưởng doanh thu bình quân 3 năm dự phóng`}
                  recommendList={[
                    {
                      label: '> 10%',
                      value: {
                        start: '10',
                        end: ''
                      }
                    },
                    {
                      label: '> 20%',
                      value: {
                        start: '20',
                        end: ''
                      }
                    },
                    {
                      label: '> 30%',
                      value: {
                        start: '30',
                        end: ''
                      }
                    },
                    {
                      label: '> 40%',
                      value: {
                        start: '40',
                        end: ''
                      }
                    },
                    {
                      label: '> 50%',
                      value: {
                        start: '50',
                        end: ''
                      }
                    }
                  ]}
                />
              )}
            </div>

            {/* Tăng trưởng lợi nhuận bình quân 3 năm dự phóng */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Tăng trưởng lợi nhuận bình quân 3 năm dự phóng`}</Typography>
                </div>
              )}
              {!isLocked && (
                <OptionItem
                  value={criteria?.netIncomeEstGrowth}
                  setValue={(value) =>
                    setCriteria({ ...criteria, netIncomeEstGrowth: value })
                  }
                  suffix={`%`}
                  label={`Tăng trưởng lợi nhuận bình quân 3 năm dự phóng`}
                  recommendList={[
                    {
                      label: '> 10%',
                      value: {
                        start: '10',
                        end: ''
                      }
                    },
                    {
                      label: '> 20%',
                      value: {
                        start: '20',
                        end: ''
                      }
                    },
                    {
                      label: '> 30%',
                      value: {
                        start: '30',
                        end: ''
                      }
                    },
                    {
                      label: '> 40%',
                      value: {
                        start: '40',
                        end: ''
                      }
                    },
                    {
                      label: '> 50%',
                      value: {
                        start: '50',
                        end: ''
                      }
                    }
                  ]}
                />
              )}
            </div>

            {/* EPS */}
            {/* <div css={styles.option()}>
              <OptionItem
                value={criteria?.eps}
                setValue={(value) => setCriteria({ ...criteria, eps: value })}
                suffix={``}
                label={`EPS`}
                recommendList={[
                  {
                    label: '> 1000',
                    value: {
                      start: '1000',
                      end: '',
                    },
                  },
                  {
                    label: '> 3000',
                    value: {
                      start: '3000',
                      end: '',
                    },
                  },
                  {
                    label: '> 5000',
                    value: {
                      start: '5000',
                      end: '',
                    },
                  },
                  {
                    label: '> 7000',
                    value: {
                      start: '7000',
                      end: '',
                    },
                  },
                ]}
              />
            </div> */}
          </div>
        </div>

        {/* Hiệu quả hoạt động */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Hiệu quả hoạt động`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Biên lợi nhuận gộp */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.grossMarginLtm}
                setValue={(value) =>
                  setCriteria({ ...criteria, grossMarginLtm: value })
                }
                suffix={`%`}
                label={`Biên lợi nhuận gộp`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  },
                  {
                    label: 'Tăng trưởng so cùng kỳ',
                    value: {
                      start: 'grossMarginLtmYoy',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Biên lợi nhuận sau thuế */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.profitMarginLtm}
                setValue={(value) =>
                  setCriteria({ ...criteria, profitMarginLtm: value })
                }
                suffix={`%`}
                label={`Biên lợi nhuận sau thuế`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  },
                  {
                    label: 'Tăng trưởng so cùng kỳ',
                    value: {
                      start: 'netMarginLtmYoy',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* ROE */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.returnOnEquity}
                setValue={(value) =>
                  setCriteria({ ...criteria, returnOnEquity: value })
                }
                suffix={`%`}
                label={`ROE`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  },
                  {
                    label: 'Tăng so cùng kỳ',
                    value: {
                      start: 'returnOnEquityYoy',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* ROA */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.returnOnAssets}
                setValue={(value) =>
                  setCriteria({ ...criteria, returnOnAssets: value })
                }
                suffix={`%`}
                label={`ROA`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  },
                  {
                    label: 'Tăng so cùng kỳ',
                    value: {
                      start: 'returnOnAssetsYoy',
                      end: ''
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Sức khỏe tài chính */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Sức khỏe tài chính`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Nợ vay/Vốn chủ sở hữu */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.debtToEquity}
                setValue={(value) =>
                  setCriteria({ ...criteria, debtToEquity: value })
                }
                suffix={`%`}
                label={`Nợ vay/Vốn chủ sở hữu`}
                recommendList={[
                  {
                    label: 'Không vay nợ',
                    value: {
                      start: '0',
                      end: '0'
                    }
                  },
                  {
                    label: '< 50%',
                    value: {
                      start: '0',
                      end: '50'
                    }
                  },
                  {
                    label: '< 100%',
                    value: {
                      start: '0',
                      end: '100'
                    }
                  },
                  {
                    label: '< 150%',
                    value: {
                      start: '0',
                      end: '150'
                    }
                  },
                  {
                    label: '< 200%',
                    value: {
                      start: '0',
                      end: '200'
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Cổ tức */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Cổ tức tiền`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Tỷ suất cổ tức hiện tại */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.dividendYieldCurrent}
                setValue={(value) =>
                  setCriteria({ ...criteria, dividendYieldCurrent: value })
                }
                suffix={`%`}
                label={`Tỷ suất cổ tức hiện tại`}
                recommendList={[
                  {
                    label: '> 5%',
                    value: {
                      start: '5',
                      end: ''
                    }
                  },
                  {
                    label: '> 7%',
                    value: {
                      start: '7',
                      end: ''
                    }
                  },
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 12%',
                    value: {
                      start: '12',
                      end: ''
                    }
                  },
                  {
                    label: '> 15%',
                    value: {
                      start: '15',
                      end: ''
                    }
                  },
                  {
                    label: 'Cao hơn lãi tiền gửi',
                    value: {
                      start: 'depositRate12m',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Trả cổ tức liên tục */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Trả cổ tức liên tục`}</Typography>
                </div>
              )}
              {!isLocked && (
                <SelectOption
                  value={criteria?.countCashDiv}
                  setValue={(value) =>
                    setCriteria({ ...criteria, countCashDiv: value })
                  }
                  label={`Trả cổ tức liên tục`}
                  recommendList={[
                    {
                      label: '3 năm',
                      value: '3'
                    },
                    {
                      label: '5 năm',
                      value: '5'
                    }
                  ]}
                />
              )}
            </div>
          </div>
        </div>

        {/* Chỉ tiêu bảng cân đối */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Chỉ tiêu bảng cân đối`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Chi phí xây dựng dở dang/Tổng tài sản */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.constructionInProgressPct}
                setValue={(value) =>
                  setCriteria({ ...criteria, constructionInProgressPct: value })
                }
                suffix={`%`}
                label={`Chi phí xây dựng dở dang/Tổng tài sản`}
                recommendList={[
                  {
                    label: '> 5%',
                    value: {
                      start: '5',
                      end: ''
                    }
                  },
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng chi phí xây dựng dở dang so với quý trước */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.constructionInProgressGrowthPreQ}
                setValue={(value) =>
                  setCriteria({
                    ...criteria,
                    constructionInProgressGrowthPreQ: value
                  })
                }
                suffix={`%`}
                label={`Tăng trưởng chi phí xây dựng dở dang so với quý trước`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Hàng tồn kho/Tổng tài sản */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.netInventoriesPct}
                setValue={(value) =>
                  setCriteria({
                    ...criteria,
                    netInventoriesPct: value
                  })
                }
                suffix={`%`}
                label={`Hàng tồn kho/Tổng tài sản`}
                recommendList={[
                  {
                    label: '> 5%',
                    value: {
                      start: '5',
                      end: ''
                    }
                  },
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng hàng tồn kho so với quý trước */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.netInventoriesGrowthPreQ}
                setValue={(value) =>
                  setCriteria({
                    ...criteria,
                    netInventoriesGrowthPreQ: value
                  })
                }
                suffix={`%`}
                label={`Tăng trưởng hàng tồn kho so với quý trước`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Người mua trả tiền trước/Tổng tài sản */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.advancesCustomerPct}
                setValue={(value) =>
                  setCriteria({
                    ...criteria,
                    advancesCustomerPct: value
                  })
                }
                suffix={`%`}
                label={`Người mua trả tiền trước/Tổng tài sản`}
                recommendList={[
                  {
                    label: '> 5%',
                    value: {
                      start: '5',
                      end: ''
                    }
                  },
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng người mua trả tiền trước so với quý trước */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.advancesCustomerGrowthPreQ}
                setValue={(value) =>
                  setCriteria({
                    ...criteria,
                    advancesCustomerGrowthPreQ: value
                  })
                }
                suffix={`%`}
                label={`Tăng trưởng người mua trả tiền trước so với quý trước`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tài sản cố định/Tổng tài sản */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.fixedAssetPct}
                setValue={(value) =>
                  setCriteria({
                    ...criteria,
                    fixedAssetPct: value
                  })
                }
                suffix={`%`}
                label={`Tài sản cố định/Tổng tài sản`}
                recommendList={[
                  {
                    label: '> 5%',
                    value: {
                      start: '5',
                      end: ''
                    }
                  },
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng tài sản cố định so với quý trước */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.fixedAssetGrowthPreQ}
                setValue={(value) =>
                  setCriteria({
                    ...criteria,
                    fixedAssetGrowthPreQ: value
                  })
                }
                suffix={`%`}
                label={`Tăng trưởng tài sản cố định so với quý trước`}
                recommendList={[
                  {
                    label: '> 10%',
                    value: {
                      start: '10',
                      end: ''
                    }
                  },
                  {
                    label: '> 20%',
                    value: {
                      start: '20',
                      end: ''
                    }
                  },
                  {
                    label: '> 30%',
                    value: {
                      start: '30',
                      end: ''
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Khấu hao còn lại/Nguyên giá tài sản cố định */}
            <div css={styles.option()}>
              <OptionItem
                value={criteria?.fixedAssetGrossRatio}
                setValue={(value) =>
                  setCriteria({
                    ...criteria,
                    fixedAssetGrossRatio: value
                  })
                }
                suffix={`%`}
                label={`Khấu hao còn lại/Nguyên giá tài sản cố định`}
                recommendList={[
                  {
                    label: '< 30%',
                    value: {
                      start: '',
                      end: '30'
                    }
                  },
                  {
                    label: '< 20%',
                    value: {
                      start: '',
                      end: '20'
                    }
                  },
                  {
                    label: '< 10%',
                    value: {
                      start: '',
                      end: '10'
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Ban lãnh đạo, Quỹ đầu tư */}
        <div css={styles.optionItem()}>
          <div css={{ display: 'flex', flexDirection: 'column', width: 100 }}>
            <Typography
              variant='caption_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014,
                minWidth: 'fit-content'
              })}
            >{`Ban lãnh đạo,`}</Typography>
            <Typography
              variant='caption_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014,
                minWidth: 'fit-content'
              })}
            >{`Quỹ đầu tư`}</Typography>
          </div>
          <div css={styles.optionWrapper()}>
            {/* Ban lãnh đạo mua ròng 3 tháng gần nhất */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Ban lãnh đạo mua ròng 3 tháng gần nhất`}</Typography>
                </div>
              )}
              {!isLocked && (
                <BooleanOption
                  label={`Ban lãnh đạo mua ròng 3 tháng gần nhất`}
                  value={criteria?.insiderBuying3m}
                  setValue={(value: boolean) =>
                    setCriteria({ ...criteria, insiderBuying3m: value })
                  }
                />
              )}
            </div>

            {/* Ban lãnh đạo mua ròng 12 tháng gần nhất */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Ban lãnh đạo mua ròng 12 tháng gần nhất`}</Typography>
                </div>
              )}
              {!isLocked && (
                <BooleanOption
                  label={`Ban lãnh đạo mua ròng 12 tháng gần nhất`}
                  value={criteria?.insiderBuying}
                  setValue={(value: boolean) =>
                    setCriteria({ ...criteria, insiderBuying: value })
                  }
                />
              )}
            </div>

            {/* Quỹ đầu tư mua ròng 3 tháng gần nhất */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Quỹ đầu tư mua ròng 3 tháng gần nhất`}</Typography>
                </div>
              )}
              {!isLocked && (
                <BooleanOption
                  label={`Quỹ đầu tư mua ròng 3 tháng gần nhất`}
                  value={criteria?.fundVolumeBuy3m}
                  setValue={(value: boolean) =>
                    setCriteria({ ...criteria, fundVolumeBuy3m: value })
                  }
                />
              )}
            </div>
          </div>
        </div>

        {/* Giá trị giao dịch NĐT nước ngoài */}
        <div css={styles.optionItem()}>
          <div css={{ display: 'flex', flexDirection: 'column', width: 300 }}>
            <Typography
              variant='caption_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014,
                minWidth: 'fit-content'
              })}
            >{`Giá trị giao dịch`}</Typography>
            <Typography
              variant='caption_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014,
                minWidth: 'fit-content'
              })}
            >{`NĐT nước ngoài`}</Typography>
          </div>
          <div css={styles.optionWrapper()}>
            {/* NĐT nước ngoài mua ròng 7 ngày gần nhất */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`NĐT nước ngoài mua ròng 7 ngày gần nhất`}</Typography>
                </div>
              )}
              {!isLocked && (
                <BooleanOption
                  label={`NĐT nước ngoài mua ròng 7 ngày gần nhất`}
                  value={criteria?.foreignBuyingValue7d}
                  setValue={(value: boolean) =>
                    setCriteria({ ...criteria, foreignBuyingValue7d: value })
                  }
                />
              )}
            </div>

            {/* NĐT nước ngoài mua ròng 30 ngày gần nhất */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`NĐT nước ngoài mua ròng 30 ngày gần nhất`}</Typography>
                </div>
              )}
              {!isLocked && (
                <BooleanOption
                  label={`NĐT nước ngoài mua ròng 30 ngày gần nhất`}
                  value={criteria?.foreignBuyingValue30d}
                  setValue={(value: boolean) =>
                    setCriteria({ ...criteria, foreignBuyingValue30d: value })
                  }
                />
              )}
            </div>

            {/* NĐT nước ngoài mua ròng 3 tháng gần nhất */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`NĐT nước ngoài mua ròng 3 tháng gần nhất`}</Typography>
                </div>
              )}
              {!isLocked && (
                <BooleanOption
                  label={`NĐT nước ngoài mua ròng 3 tháng gần nhất`}
                  value={criteria?.foreignBuyingValue90d}
                  setValue={(value: boolean) =>
                    setCriteria({ ...criteria, foreignBuyingValue90d: value })
                  }
                />
              )}
            </div>
          </div>
        </div>

        {/* Rủi ro kỹ thuật */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Rủi ro kỹ thuật`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Tín hiệu kỹ thuật */}
            {/* <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant="caption_two"
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8,
                    })}
                  >{`Tín hiệu kỹ thuật`}</Typography>
                </div>
              )}
              {!isLocked && (
                <SelectOption
                  value={criteria?.taSignal1d}
                  setValue={(value) =>
                    setCriteria({ ...criteria, taSignal1d: value })
                  }
                  label={`Tín hiệu kỹ thuật`}
                  recommendList={[
                    {
                      label: 'Tăng giá',
                      value: 'bullish',
                    },
                    {
                      label: 'Giảm giá',
                      value: 'bearish',
                    },
                  ]}
                />
              )}
            </div> */}

            {/* Rủi ro */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Rủi ro`}</Typography>
                </div>
              )}
              {!isLocked && (
                <SelectMultiOption
                  value={criteria?.overallRiskLevel}
                  setValue={(value) =>
                    setCriteria({ ...criteria, overallRiskLevel: value })
                  }
                  label={`Rủi ro`}
                  recommendList={[
                    {
                      label: 'Thấp',
                      value: 'low'
                    },
                    {
                      label: 'Trung bình',
                      value: 'medium'
                    },
                    {
                      label: 'Cao',
                      value: 'high'
                    },
                    {
                      label: 'Rất cao',
                      value: 'extreme'
                    }
                  ]}
                />
              )}
            </div>
          </div>
        </div>

        {/* Xu hướng dòng tiền */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Xu hướng dòng tiền`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Xu hướng dòng tiền ngắn hạn */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Xu hướng ngắn hạn`}</Typography>
                </div>
              )}
              {!isLocked && (
                <SelectOption
                  value={criteria?.rscD}
                  setValue={(value) =>
                    setCriteria({ ...criteria, rscD: value })
                  }
                  label={`Xu hướng ngắn hạn`}
                  recommendList={[
                    {
                      label: 'Tích lũy',
                      value: 'TICH_LUY'
                    },
                    {
                      label: 'Tăng giá',
                      value: 'TANG_GIA'
                    },
                    {
                      label: 'Suy yếu',
                      value: 'SUY_YEU'
                    },
                    {
                      label: 'Giảm giá',
                      value: 'GIAM_GIA'
                    }
                  ]}
                />
              )}
            </div>

            {/* Xu hướng dòng tiền trung hạn */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Xu hướng trung hạn`}</Typography>
                </div>
              )}
              {!isLocked && (
                <SelectOption
                  value={criteria?.rscW}
                  setValue={(value) =>
                    setCriteria({ ...criteria, rscW: value })
                  }
                  label={`Xu hướng trung hạn`}
                  recommendList={[
                    {
                      label: 'Tích lũy',
                      value: 'TICH_LUY'
                    },
                    {
                      label: 'Tăng giá',
                      value: 'TANG_GIA'
                    },
                    {
                      label: 'Suy yếu',
                      value: 'SUY_YEU'
                    },
                    {
                      label: 'Giảm giá',
                      value: 'GIAM_GIA'
                    }
                  ]}
                />
              )}
            </div>

            {/* Xu hướng dòng tiền dài hạn */}
            <div css={styles.option()}>
              {isLocked && (
                <div css={styles.lockWrapper()}>
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                  <Typography
                    variant='caption_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray400,
                      marginLeft: 8
                    })}
                  >{`Xu hướng dài hạn`}</Typography>
                </div>
              )}
              {!isLocked && (
                <SelectOption
                  value={criteria?.rscM}
                  setValue={(value) =>
                    setCriteria({ ...criteria, rscM: value })
                  }
                  label={`Xu hướng dài hạn`}
                  recommendList={[
                    {
                      label: 'Tích lũy',
                      value: 'TICH_LUY'
                    },
                    {
                      label: 'Tăng giá',
                      value: 'TANG_GIA'
                    },
                    {
                      label: 'Suy yếu',
                      value: 'SUY_YEU'
                    },
                    {
                      label: 'Giảm giá',
                      value: 'GIAM_GIA'
                    }
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Criteria
