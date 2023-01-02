export const useDateFormat = () => {
  const dateFormatter = ref(Intl.DateTimeFormat([], { dateStyle: 'medium' }))
  const format = (date) => dateFormatter.value.format(new Date(date))

  return {
    format,
  }
}
