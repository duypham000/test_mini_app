import React from 'react'

interface Props {
  match?: boolean
  conditions?: Record<string, boolean | undefined>
  children?: any
}
const If: React.FC<Props> = ({ match, conditions, children }) => {
  if (typeof match !== 'undefined' && typeof children !== 'undefined') {
    if (match) {
      if (typeof children === 'function') {
        return children()
      } else {
        return children
      }
    } else {
      return null
    }
  }
  if (
    typeof conditions !== 'undefined' &&
    typeof children !== 'undefined' &&
    children !== null
  ) {
    const conditionEntries = Object.entries(conditions)
    const firstCondition = conditionEntries.find((entry) => {
      const { 1: value } = entry
      return value
    })
    if (firstCondition) {
      try {
        const [key] = firstCondition
        if (typeof children[key] === 'function') {
          return children[key]()
        }
        return children[key]
      } catch (error) {
        return null
      }
    }
  }
  return null
}

export default If
