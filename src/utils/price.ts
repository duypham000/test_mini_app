export const getProfit = (
  buyPrice: number,
  priceClose: number,
  volume: number
) => {
  return (
    (Math.trunc(Number(priceClose)) - Math.trunc(Number(buyPrice))) * volume
  )
}

export const getProfitPercentage = (
  buyPrice: number,
  priceClose: number,
  volume: number
) => {
  const profit = getProfit(buyPrice, priceClose, volume)
  const costPrice = buyPrice * volume
  return (profit / costPrice) * 100
}
