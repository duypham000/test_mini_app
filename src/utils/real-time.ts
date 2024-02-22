const onRealtime = (filter: string, t0: number, t1: number) => {
  // if period = 1D
  if (filter === '0') return (t1 - t0) / 1000 >= 60
  // if period = 1M
  if (filter === '1') return (t1 - t0) / 1000 >= 60 * 30
  // if period = 3D
  if (filter === '2') return (t1 - t0) / 1000 >= 60 * 60
  // if period = 1Y
  if (filter === '3') return (t1 - t0) / 1000 >= 60 * 60 * 24
  // if period = 5Y
  if (filter === '4') return (t1 - t0) / 1000 >= 60 * 60 * 24 * 7
  // if period = ALL
  return (t1 - t0) / 1000 >= 60 * 60 * 24 * 30
}

export { onRealtime }
