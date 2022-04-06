import { getType } from '../../getType'
/**
 *  HOW TO USE
 *
 *  const res = deepClone(origin)
 *
 */

const notNeedClone = [
  'undefined',
  'null',
  'boolean',
  'number',
  'string',
  'symbol',
  'function',
]

export function deepClone(arw: any) {
  // clone prototype
  const fn = new Function()
  fn.prototype = arw.__proto__

  // if not need clone
  if (notNeedClone.includes(getType(arw))) {
    return arw
  }

  const isArray = Array.isArray(arw)
  
  const clone: any = isArray ? [] : {}
  
  if (isArray) {
    for (let i = 0; i < arw.length; i++) {
      clone[i] = deepClone(arw[i])
    }
  } else {
    for (let key in arw) {
      clone[key] = deepClone(arw[key])
    }
  }

  // add __proto__
  clone.__proto__ = fn.prototype
  return clone
}
