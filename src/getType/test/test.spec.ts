import { getType } from '../src'

describe('getType', () => {
  it('happy path', () => {
    const fn = jest.fn()
    expect(getType('')).toEqual('string')
    expect(getType(1)).toEqual('number')
    expect(getType(false)).toEqual('boolean')
    expect(getType(null)).toEqual('null')
    expect(getType(undefined)).toEqual('undefined')
    expect(getType({})).toEqual('object')
    expect(getType([])).toEqual('array')
    expect(getType(Symbol(''))).toEqual('symbol')
    expect(getType(fn)).toEqual('function')
  })
})
