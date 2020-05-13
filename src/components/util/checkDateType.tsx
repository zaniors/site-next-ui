const transDateType = (date: string | number | Date): Date | boolean => {
  const d = date instanceof Date ? date : new Date(date);
  return !isNaN(d.getTime()) ? d : false;
}

export default transDateType;