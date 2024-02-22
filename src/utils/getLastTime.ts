const getLastYears = (quantity) => {
  const currentDate = new Date()
  const res: any[] = []

  for (let i = 0; i < quantity; i++) {
    const year = currentDate.getFullYear() - i
    res.push(year)
  }

  return res
}

const getLastQuarters = (quantity) => {
  const currentDate = new Date()
  const res: any[] = []

  for (let i = 0; i < quantity; i++) {
    const quarterDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i * 3,
      1
    )

    const quarterNumber = Math.floor(quarterDate.getMonth() / 3) + 1
    const quarterString =
      (quarterNumber >= 10 ? quarterNumber : 'Q' + quarterNumber) +
      '/' +
      quarterDate.getFullYear().toString()

    res.push(quarterString)
  }

  return res
}

export { getLastYears, getLastQuarters }
