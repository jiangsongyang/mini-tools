/**
 *  HOW TO USE
 *
 *  inRange(10 , 20 , 5) -> false
 *  inRange(10 , 20) -> false
 *  inRange(10 , 5) -> false
 *
 */

export function inRange(number: number, start: number, end?: number) {
  if (end === undefined) {
    end = start
    start = 0
  }
  return number >= Math.min(start, end) && number < Math.max(start, end)
}
