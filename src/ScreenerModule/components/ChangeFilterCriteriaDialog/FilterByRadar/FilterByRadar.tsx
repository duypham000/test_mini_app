import { setPoints } from '@/ScreenerModule/screener-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React from 'react'
import styles from './styles'
import RadarChart from '@/components/RadarChart'

const FilterByRadar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const points = useAppSelector((state) => state.screener.points)

  return (
    <div>
      <div css={styles.optionList()}>
        <RadarChart
          dark={true}
          width={450}
          editable={true}
          points={points}
          handleChange={(points) => dispatch(setPoints(points))}
          tooltip={false}
        />
      </div>
    </div>
  )
}

export default FilterByRadar
