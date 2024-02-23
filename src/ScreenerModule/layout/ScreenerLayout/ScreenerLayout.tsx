import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import AddScreenerDialog from '../../components/AddScreenerDialog'
import EditScreenerDialog from '../../components/EditScreenerDialog'
import DeleteScreenerDialog from '../../components/DeleteScreenerDialog'
import ChangeFilterCriteriaDialog2 from '../../components/ChangeFilterCriteriaDialog2'

interface Props {
  children?: React.ReactNode
  hasHeader?: boolean
}

const ScreenerLayout: React.FC<Props> = (props): JSX.Element => {
  const { children } = props

  const visibleAddScreener = useAppSelector(
    (state) => state.screener.visibleAddScreener
  )
  const visibleEditScreener = useAppSelector(
    (state) => state.screener.visibleEditScreener
  )
  const visibleDeleteScreener = useAppSelector(
    (state) => state.screener.visibleDeleteScreener
  )
  const visibleChangeFilterCriterial = useAppSelector(
    (state) => state.screener.visibleChangeFilterCriterial
  )

  return (
    <>
      <div>
        {/* {hasHeader && <Header />} */}
        {children}
      </div>

      {visibleAddScreener && <AddScreenerDialog />}
      {visibleEditScreener && <EditScreenerDialog />}
      {visibleDeleteScreener && <DeleteScreenerDialog />}
      {visibleChangeFilterCriterial && <ChangeFilterCriteriaDialog2 />}
    </>
  )
}

export default ScreenerLayout
