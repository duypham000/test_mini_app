import moment from 'moment'

function pad(number) {
  return number.toString().padStart(2, '0')
}

function getTimezoneOffsetString(offset) {
  const sign = offset > 0 ? '-' : '+'
  const absOffset = Math.abs(offset)
  const hours = Math.floor(absOffset / 60)
  const minutes = absOffset % 60
  return `${sign}${pad(hours)}:${pad(minutes)}`
}

const getFormattedNowDate = () => {
  const date = new Date()
  const timezoneOffset = getTimezoneOffsetString(date.getTimezoneOffset())
  const formattedDate = date.toISOString().replace('Z', timezoneOffset)

  return formattedDate
}

const getCreatedTimeAgo = (createdTime: string, format: string): string => {
  const nowDate = new Date()

  const formattedNow = moment(nowDate).format(format)

  const now = moment(formattedNow, format)
  const createdDate = moment(createdTime, format)

  const diffInDays = now.diff(createdDate, 'days')

  if (diffInDays > 0) {
    // x ngày trước
    return `${diffInDays} ngày trước`
  } else {
    const diffInHours = now.diff(createdDate, 'hours') - 7
    const diffInMinutes = now.diff(createdDate, 'minutes') % 60

    if (diffInHours > 0) {
      // x giờ, y phút trước
      return `${diffInHours} giờ, ${diffInMinutes} phút trước`
    } else {
      // x phút trước
      return `${diffInMinutes} phút trước`
    }
  }
}

export { getFormattedNowDate, getCreatedTimeAgo }
