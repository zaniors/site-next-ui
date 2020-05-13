import transDateType from './checkDateType';

describe('测试工具类', () => {
  it('检测是否是有效的时间格式', () => {
    const result1 = transDateType(1589354703078);
    const result2 = transDateType('2020-05-13');
    const result3 = transDateType(new Date());
    expect(result1).not.toBeFalsy();
    expect(result2).not.toBeFalsy();
    expect(result3).not.toBeFalsy();
  })
})