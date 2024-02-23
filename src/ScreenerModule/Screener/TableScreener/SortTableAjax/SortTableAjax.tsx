import React from 'react'
import { FluctuationAscendingIcon } from '@/components/icons/FluctuationAscendingIcon'
import { FluctuationDescendingIcon } from '@/components/icons/FluctuationDescendingIcon'
import { FluctuationIcon } from '@/components/icons/FluctuationIcon'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import screenerApi from '@/ScreenerModule/screener-api'
import {
  setDataFilter,
  setPage,
  setSort,
  setTotalFilter
} from '@/ScreenerModule/screener-slice'
import Typography from '@/components/Typography/Typography'
import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

interface Props {
  title: React.ReactNode
  sortKey: any
  rowData: any[]
  setRowData: (rowData: any) => void
  align: 'left' | 'center' | 'right'
}

const SortTableAjax: React.FC<Props> = (props): JSX.Element => {
  const { title, sortKey, rowData, setRowData, align = 'left' } = props

  const dispatch = useAppDispatch()

  const size = useAppSelector((state) => state.screener.size)
  const currentScreener = useAppSelector(
    (state) => state.screener.currentScreener
  )

  const [defaultRowData, setDefaultRowData] = React.useState<any>()

  const [sortType, setSortType] = React.useState<'ASC' | 'DESC'>()

  React.useEffect(() => {
    if (defaultRowData) return

    if (rowData?.length > 0) {
      setDefaultRowData(rowData)
    }
  }, [rowData, defaultRowData])

  React.useEffect(() => {
    setDefaultRowData(undefined)
  }, [rowData?.length])

  const handleSort = () => {
    switch (sortType) {
      case 'DESC':
        setRowData(defaultRowData || [])
        setSortType(undefined)
        return
      case 'ASC':
        ;(async () => {
          try {
            const res = await screenerApi.filterScreener({
              page: 0,
              size: size,
              rules: currentScreener?.rules as string,
              sort: JSON.stringify({ id: sortKey, direction: `DESC` })
            })
            dispatch(
              setSort(JSON.stringify({ id: sortKey, direction: `DESC` }))
            )
            dispatch(setPage(0))
            dispatch(setTotalFilter(res?.total as number))
            dispatch(setDataFilter(res.data))
          } catch (error) {
            console.log(error)
          } finally {
            setSortType('DESC')
          }
        })()
        return
      default:
        ;(async () => {
          try {
            const res = await screenerApi.filterScreener({
              page: 0,
              size: size,
              rules: currentScreener?.rules as string,
              sort: JSON.stringify({ id: sortKey, direction: `ASC` })
            })
            dispatch(setSort(JSON.stringify({ id: sortKey, direction: `ASC` })))
            dispatch(setPage(0))
            dispatch(setTotalFilter(res?.total as number))
            dispatch(setDataFilter(res.data))
          } catch (error) {
            console.log(error)
          } finally {
            setSortType('ASC')
          }
        })()
        return
    }
  }

  const genAlign = () => {
    switch (align) {
      case 'left':
        return 'flex-start'
      case 'right':
        return 'flex-end'
      case 'center':
        return 'center'
      default:
        return 'flex-start'
    }
  }

  return (
    <div
      onClick={handleSort}
      css={{
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: genAlign()
      }}
    >
      <Typography
        variant='caption_two'
        cssCustom={(theme: Theme) => css({ color: theme.color.dc014 })}
      >
        {title}
      </Typography>

      {sortType === undefined && (
        <FluctuationIcon css={{ marginLeft: 4, minWidth: 8 }} />
      )}

      {sortType === 'ASC' && (
        <FluctuationAscendingIcon css={{ marginLeft: 4, minWidth: 8 }} />
      )}

      {sortType === 'DESC' && (
        <FluctuationDescendingIcon css={{ marginLeft: 4, minWidth: 8 }} />
      )}
    </div>
  )
}

export default SortTableAjax
