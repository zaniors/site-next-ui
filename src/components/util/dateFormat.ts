import transDateType from './checkDateType'

const dateFormat = (date?: number | string | Date) => {
  const transDate = transDateType(date)
  if (!transDate) {
    return ''
  }

  let y = transDate.getFullYear(), m = '', d = transDate.getDate();
  if (transDate.getMonth() < 9) {
    m = '0' + (transDate.getMonth() + 1);
  } else {
    m = transDate.getMonth() + 1 + '';
  }

  return `${y}-${m}-${d}`
}

export default dateFormat