
type Skip<T, K extends keyof any> = Partial<Pick<T, Exclude<keyof T, K>>> & Omit<T, K>;

/**
 * 对数组的指定key的value进行去重，并且只对相邻有效
 * [{a: 1}, {a: 1}, {a: 2}, {a: 3}, {a: 1}] => [{a: 1}, {a: 2}, {a: 3}, {a: 1}]
 * @param arr 数组数据源
 * @param key 指定key
 */
export const arrayDistinctOfKey = <T>(arr: Array<T>, key: string): Array<T> => {
  return arr
}

export default arrayDistinctOfKey;
