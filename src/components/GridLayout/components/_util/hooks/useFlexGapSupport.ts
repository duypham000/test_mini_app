import * as React from 'react'
import { detectFlexGapSupported } from '../styleChecker'

const useFlexGapSupport = () => {
  const [flexible, setFlexible] = React.useState(false)
  React.useEffect(() => {
    setFlexible(detectFlexGapSupported())
  }, [])

  return flexible
}

export default useFlexGapSupport
