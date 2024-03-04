import React from 'react'

interface Props {
  children: any
}
const VdscLayout: React.FC<Props> = (props): JSX.Element => {
  const { children } = props
  return (
    <div
      css={{ padding: '28px 20px', position: 'relative', minHeight: '100vh' }}
    >
      {children}
    </div>
  )
}

export default VdscLayout
