import Button from '@/components/Button'
import { AddIconWhite500 } from '@/components/icons/AddIconWhite500'
import Typography from '@/components/Typography'
import { useAppDispatch } from '@/redux/hooks'
import { Theme } from '@/themes/theme'
import React from 'react'
import { setVisibleChangeFilterCriterial } from '../../screener-slice'
import styles from './styles'
import { NoDataPortfolioIcon } from '@/components/icons/NoDataPortfolioIcon'

const NoDataScreener: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()

  return (
    <div css={styles.wrapper()}>
      <NoDataPortfolioIcon />

      <Typography
        variant='heading_two'
        cssCustom={(theme: Theme) => ({
          color: theme.color.dc011,
          marginTop: 24
        })}
      >{`Dễ dàng tìm kiếm Ý tưởng đầu tư bằng Bộ lọc cổ phiếu`}</Typography>

      <Typography
        variant='caption'
        cssCustom={(theme: Theme) => ({
          color: theme.color.dc015,
          marginTop: 8
        })}
      >{`Trong trường hợp bạn không biết chọn tiêu chí lọc nào, đừng lo, Simplize sẽ gợi ý cho bạn những tiêu chí lọc tốt nhất.`}</Typography>

      <div css={{ marginTop: 28 }}>
        <Button
          cssCustom={{ padding: '8px 24px' }}
          leftIcon={<AddIconWhite500 />}
          onClick={() => dispatch(setVisibleChangeFilterCriterial(true))}
        >{`Thêm tiêu chí lọc`}</Button>
      </div>
    </div>
  )
}

export default NoDataScreener
