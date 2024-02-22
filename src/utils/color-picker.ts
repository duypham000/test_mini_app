import { colors } from '@/themes/colors'

export const getColorByPriceType = (priceType: number) => {
  switch (priceType) {
    case -2:
      return colors.cyan500
    case -1:
      return colors.red500
    case 0:
      return colors.yellow500
    case 1:
      return colors.green500
    case 2:
      return colors.purple500
    default:
      return colors.white500
  }
}

export const getPriceType = (
  priceReference: number,
  priceCeiling: number,
  priceFloor: number,
  priceClose: number
) => {
  priceReference = priceReference || 0
  priceCeiling = priceCeiling || 0
  priceFloor = priceFloor || 0
  priceClose = priceClose || 0

  if (priceClose === priceReference) {
    return 0
  }

  if (priceClose > priceReference && priceClose < priceCeiling) {
    return 1
  }

  if (priceClose >= priceCeiling) {
    return 2
  }

  if (priceClose < priceReference && priceClose > priceFloor) {
    return -1
  }

  if (priceClose === priceFloor || priceClose < priceFloor) {
    return -2
  }

  return 0
}

export const getPriceTypeByValue = (value: number) => {
  if (value > 0) return 1

  if (value < 0) return -1

  return 0
}
