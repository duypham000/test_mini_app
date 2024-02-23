import { CloseIconBlack500 } from '@/components/icons/CloseIconBlack500'
// import { EarthIcon } from '@/components/icons/EarthIcon';
import Typography from '@/components/Typography'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import utilStyles from '@/styles/util-styles'
import { Theme } from '@/themes/theme'
import DialogWrap from 'rc-dialog'
import React from 'react'
import screenerApi from '../../screener-api'
import { setScreenerList } from '../../screener-slice'
// import Switch from '../Switch';
import { styles } from './styles'
import Input from '../Input'
import NativeMethod from '@/components/NativeMethod'
import { useNavigate } from 'react-router-dom'

interface Props {
  visible: boolean
  onClose: () => void
}

const AddScreenerDialog2: React.FC<Props> = (props): JSX.Element => {
  const { visible, onClose } = props
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const screenerList = useAppSelector((state) => state.screener.screenerList)
  const currentScreener = useAppSelector(
    (state) => state.screener.currentScreener
  )

  /**
   * state
   */
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  /**
   * useMemo
   */
  const isNameValid = React.useMemo(() => {
    if (name && name.length <= 32 && name.trim().length === name.length) {
      return true
    }

    return false
  }, [name])

  const isDescriptionValid = React.useMemo(() => {
    if (
      description.length <= 160 &&
      description.trim().length === description.length
    ) {
      return true
    }

    return false
  }, [description])

  /**
   * callBack
   */
  const handleAddScreener = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    ;(async () => {
      try {
        const res = await screenerApi.createScreener({
          name: name,
          description: description,
          rules: currentScreener?.rules
          // isPublic: isPublic,
        })
        dispatch(setScreenerList(screenerList?.concat(res.data) as any))
        onClose()
        navigate(`/screener/${res.data?.guid}`)
      } catch (error: any) {
        NativeMethod.toast(error.response.data.message)
      }
    })()
  }

  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visible}
      title={
        <Typography variant='heading_three'>{`Tạo bộ lọc mới`}</Typography>
      }
      onClose={onClose}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
    >
      <form onSubmit={handleAddScreener}>
        <div>
          <Typography variant='caption'>{`Tên bộ lọc`}</Typography>

          <Input
            css={styles.nameInput()}
            placeholder='Vui lòng nhập tên bộ lọc...'
            value={name}
            spellCheck={false}
            onChange={(e) => setName(e.target.value)}
          />

          <Typography
            variant='caption'
            cssCustom={(theme: Theme) => [
              {
                color: theme.color.dc014
              },
              name.length > 32 && {
                color: theme.color.red500
              }
            ]}
          >
            {`${name.length}/32 ký tự`}
          </Typography>
        </div>

        {/* description */}
        <div css={{ marginTop: 32 }}>
          <Typography variant='caption'>{`Mô tả (không bắt buộc)`}</Typography>

          <textarea
            spellCheck={false}
            css={[styles.textArea(), utilStyles.scrollBar()]}
            placeholder='Vui lòng nhập mô tả ngắn...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Typography
            variant='caption'
            cssCustom={(theme: Theme) => [
              {
                color: theme.color.dc014
              },
              description.length > 160 && {
                color: theme.color.red500
              }
            ]}
          >
            {`${description?.length || 0}/160 ký tự`}
          </Typography>
        </div>

        <div css={styles.btnGroup()}>
          <button type={`button`} css={styles.cancelBtn()} onClick={onClose}>
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014
              })}
            >{`Hủy`}</Typography>
          </button>

          <button
            disabled={!(isNameValid && isDescriptionValid)}
            css={styles.submitBtn()}
            type={`submit`}
          >
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: !(isNameValid && isDescriptionValid)
                  ? theme.color.dc014
                  : theme.color.gray100
              })}
            >{`Tạo bộ lọc`}</Typography>
          </button>
        </div>
      </form>
    </DialogWrap>
  )
}

export default AddScreenerDialog2
