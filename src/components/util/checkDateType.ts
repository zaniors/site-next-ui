/**
 * 
 * @param date 可以转化为时间的输入源，比如1589354703078、2020-05-13或者Date对象
 * @returns 如果能够将输入源转为Date对象，则返回，反之返回false
 */
export const transDateType = (date?: string | number | Date) => {
  if (!date) {
    return null
  }
  
  const d = date instanceof Date ? date : new Date(date);
  return !isNaN(d.getTime()) && d ;
}

export default transDateType;