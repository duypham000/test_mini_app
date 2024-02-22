export const convertDataPercent = (data) => {
  if (!data || data.length === 0) {
    return []
  }

  const stockPrices = data
  const startingPoint = stockPrices?.[0]?.value
  const newData: any[] = []

  newData.push({
    time: stockPrices[0]?.time,
    value: 0
  })

  for (let i = 1; i < stockPrices.length; i++) {
    const previousPrice = startingPoint
    const currentPrice = stockPrices[i]?.value
    const percentageChange = (currentPrice - previousPrice) / previousPrice
    stockPrices[i]?.time &&
      newData.push({
        time: stockPrices[i]?.time,
        value: percentageChange * 100
      })
  }

  return stockPrices[0]?.time ? newData : []
}
