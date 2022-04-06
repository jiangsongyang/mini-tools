import { deepClone } from '../src'

describe('test', () => {
  // case one
  // base test
  it('happy path', () => {
    const origin = { foo: 10 }
    const clone = deepClone(origin)

    origin.foo = 20

    expect(clone.foo).toBe(10)
  })

  // case two
  // test origin
  it('happy path', () => {
    const origin = 10
    const clone = deepClone(origin)

    expect(clone).toBe(10)
  })

  // case three
  // test nested
  it('happy path', () => {
    const origin = { foo: { bar: 10 } }
    const clone = deepClone(origin)

    clone.foo.bar = 20

    expect(origin.foo.bar).toBe(10)
    expect(clone.foo.bar).toBe(20)
  })

  // case four
  // test nested
  it('happy path', () => {
    const origin = Object.create({ bar: 20 })

    const clone = deepClone(origin)

    expect(origin.bar).toBe(20)

    clone.bar = 30
    
    expect(origin.bar).toBe(20)
    expect(clone.bar).toBe(30)
  })
})
