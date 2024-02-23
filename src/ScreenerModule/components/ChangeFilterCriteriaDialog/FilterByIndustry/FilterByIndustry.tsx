import Typography from '@/components/Typography'
// import screenerApi from '@/modules/ScreenerModule/screener-api';
import { setIndustryGroup } from '@/ScreenerModule/screener-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import utilStyles from '@/styles/util-styles'
import { Theme } from '@/themes/theme'
import React from 'react'
import BooleanOption from '../Criteria/BooleanOption'
import styles from './styles'

const FilterByIndustry: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const industryGroup = useAppSelector((state) => state.screener.industryGroup)

  return (
    <div>
      <div css={[styles.optionList(), utilStyles.scrollBar({ width: 4 })]}>
        {industryGroup?.map((item, indexIndustry) => (
          <div css={styles.optionItem()} key={indexIndustry}>
            <Typography
              variant='caption_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014,
                minWidth: 'fit-content'
              })}
            >
              {item?.name}
            </Typography>
            <div css={styles.optionWrapper()}>
              {item?.subGroups?.map((el, indexSubGroups) => (
                <div css={styles.option()} key={indexSubGroups}>
                  <BooleanOption
                    label={el?.name}
                    value={el?.isSelected || false}
                    setValue={(value) =>
                      dispatch(
                        setIndustryGroup(
                          industryGroup?.map((element, i) =>
                            i !== indexIndustry
                              ? { ...element }
                              : {
                                  ...element,
                                  subGroups: element?.subGroups?.map(
                                    (subGroup, i2) =>
                                      i2 !== indexSubGroups
                                        ? { ...subGroup }
                                        : { ...subGroup, isSelected: value }
                                  )
                                }
                          )
                        )
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterByIndustry
