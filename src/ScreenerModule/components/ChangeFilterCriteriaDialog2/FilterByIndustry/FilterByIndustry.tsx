import Typography from '@/components/Typography'
import utilStyles from '@/styles/util-styles'
import { Theme } from '@/themes/theme'
import React from 'react'
import BooleanOption from '../Criteria/BooleanOption'
import styles from './styles'

type IndustryGroup = {
  id: number
  name: string
  subGroups: {
    id: number
    name: string
    sectorId: number
    isSelected?: boolean
  }[]
}

interface Props {
  industryGroup?: IndustryGroup[]
  setIndustryGroup: (industryGroup: IndustryGroup[]) => void
}

const FilterByIndustry: React.FC<Props> = (props): JSX.Element => {
  const { industryGroup, setIndustryGroup } = props

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
