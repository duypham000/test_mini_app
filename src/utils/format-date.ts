export const formatDate = (inputDate) => {
  let date = inputDate.getDate()
  let month = inputDate.getMonth() + 1
  const year = inputDate.getFullYear()

  date = date.toString().padStart(2, '0')

  month = month.toString().padStart(2, '0')

  return `${date}-${month}-${year}`
}

// get current date in format: dd/mm/yyyy
export const getCurrentDate = () => {
  const today = new Date()
  const dayNumber = today.getDate()
  const monthNumber = today.getMonth() + 1 // Months are zero-based
  const year = today.getFullYear()

  // Pad the day and month with leading zeros if necessary
  const dayString = dayNumber < 10 ? '0' + dayNumber : dayNumber
  const monthString = monthNumber < 10 ? '0' + monthNumber : monthNumber

  return dayString + '/' + monthString + '/' + year
}

// convert a date in the format "dd/mm/yyyy" to milliseconds
export const convertDateToMilliseconds = (dateString) => {
  // Split the date string into day, month, and year
  const parts = dateString.split('/')
  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10) - 1 // Months are zero-based
  const year = parseInt(parts[2], 10)

  // Create a new Date object with the given day, month, and year
  const date = new Date(year, month, day)

  // Get the milliseconds since January 1, 1970 (Unix timestamp)
  const milliseconds = date.getTime()

  return milliseconds
}

export const getDaysDifference = (
  timestamp1: number,
  timestamp2: number
): number => {
  const startOfDay1 = new Date(timestamp1)
  startOfDay1.setHours(0, 0, 0, 0)

  const startOfDay2 = new Date(timestamp2)
  startOfDay2.setHours(0, 0, 0, 0)

  const differenceInMilliseconds = Math.abs(
    startOfDay1.getTime() - startOfDay2.getTime()
  )

  return Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000)) as number
}
