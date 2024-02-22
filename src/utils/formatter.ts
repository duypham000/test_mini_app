const normalizeNumber = (number: string, numberAfterDot: number) => {
  if (number === 'NaN') return '-'
  if (!number.includes('.')) {
    number += '.'
    for (let i = 0; i < numberAfterDot; i++) number += '0'
    return number
  } else {
    const dotIdx = number.indexOf('.')
    const currentNumberAfterDot = number.length - 1 - dotIdx
    for (let i = 0; i < numberAfterDot - currentNumberAfterDot; i++)
      number += '0'
    return number
  }
}

const formatNumber = (price: number, numberAfterDot: number) => {
  const formattedNumber = new Intl.NumberFormat('en-IN').format(
    Number(price?.toFixed(numberAfterDot))
  )

  return normalizeNumber(formattedNumber, numberAfterDot)
}

export { formatNumber, normalizeNumber }
