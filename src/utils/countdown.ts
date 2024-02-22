import moment from 'moment'

export const countdown = (targetDate: string, format = 'DD/MM/YYYY') => {
  // Parse the target date using Moment.js
  const targetMoment = moment(targetDate, format)

  // Get the current date and time
  const currentMoment = moment()

  // Calculate the difference between the target date and the current date
  const duration = moment.duration(targetMoment.diff(currentMoment))

  // Extract individual components (days, hours, minutes, seconds) from the duration
  const years = duration.years()
  const months = duration.months()
  const days = duration.days()
  const hours = duration.hours()
  const minutes = duration.minutes()
  const seconds = duration.seconds()

  return { years, months, days, hours, minutes, seconds }
}
