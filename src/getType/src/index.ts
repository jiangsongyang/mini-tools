/**
 *  HOW TO USE
 * 
 *  ...
 * 
 */

export function getType<T>(raw: T): string {
  return Object.prototype.toString.call(raw).slice(8, -1).toLowerCase()
}
