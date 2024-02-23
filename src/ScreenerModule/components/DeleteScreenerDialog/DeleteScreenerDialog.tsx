import { CloseIconBlack500 } from '@/components/icons/CloseIconBlack500'
import Typography from '@/components/Typography'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Theme } from '@/themes/theme'
import DialogWrap from 'rc-dialog'
import React from 'react'
import screenerApi from '../../screener-api'
import { setScreenerList, setVisibleDeleteScreener } from '../../screener-slice'
import { styles } from './styles'
import { useNavigate } from 'react-router-dom'
import NativeMethod from '@/components/NativeMethod'

const DeleteScreenerDialog: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const screenerList = useAppSelector((state) => state.screener.screenerList)
  const currentScreener = useAppSelector(
    (state) => state.screener.currentScreener
  )
  const visibleDeleteScreener = useAppSelector(
    (state) => state.screener.visibleDeleteScreener
  )

  const handleDeleteScreener = () => {
    ;(async () => {
      try {
        await screenerApi.deleteScreener({
          id: currentScreener?.id as number
        })
        dispatch(
          setScreenerList(
            screenerList?.filter(
              (item) => item?.id !== currentScreener?.id
            ) as any
          )
        )
        dispatch(setVisibleDeleteScreener(false))
        navigate(
          `/screener/${
            screenerList &&
            screenerList?.filter((item) => item?.id !== currentScreener?.id)[0]
              ?.guid
          }`
        )
      } catch (error: any) {
        NativeMethod.toast(error.response.data.message)
      }
    })()
  }

  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visibleDeleteScreener}
      title={<Typography variant='heading_three'>{`Xóa bộ lọc`}</Typography>}
      onClose={() => dispatch(setVisibleDeleteScreener(false))}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
    >
      <div css={{ marginBottom: 32 }}>
        <Typography
          variant='body_two'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc014
          })}
        >{`Bạn có chắc chắn muốn xóa bộ lọc này? Tất cả các tùy chỉnh đã lưu trong bộ lọc này cũng sẽ bị xóa hoàn toàn.`}</Typography>
      </div>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          css={styles.cancelBtn()}
          onClick={() => dispatch(setVisibleDeleteScreener(false))}
        >
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014
            })}
          >{`Hủy`}</Typography>
        </button>
        <button css={styles.confirmBtn()} onClick={handleDeleteScreener}>
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray100
            })}
          >{`Xóa`}</Typography>
        </button>
      </div>
    </DialogWrap>
  )
}

export default DeleteScreenerDialog
