export const formatDate = (date, timeStyle = undefined, dateStyle = 'full') => {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle,
    timeStyle
  }).format(new Date(date))
}
