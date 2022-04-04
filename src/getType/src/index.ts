/**
 *  HOW TO USE
 * 
 *  getType('') === 'string'
 *  getType(1) === 'number'
 *  getType(true) === 'boolean'
 *  getType(null) === 'null'
 *  getType(undefined) === 'undefined'
 * 
 */

export function getType<T>(raw: T): string {
  return Object.prototype.toString.call(raw).slice(8, -1).toLowerCase()
}
