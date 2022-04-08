import { inRange } from '../src'

describe('test', () => {
  // case one
  // base test
  it('happy path', () => {
    expect(inRange(10 , 5 , 20)).toBeTruthy()
    expect(inRange(10 , 20 , 50)).not.toBeTruthy()
    expect(inRange(10 , 20 , 50)).not.toBeTruthy()
    expect(inRange(10 , 20)).toBeTruthy()
  })
})
