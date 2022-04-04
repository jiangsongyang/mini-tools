import { getType } from "../../getType";

/**
 *  HOW TO USE
 *
 *  toString(123) === '123'
 *  toString(['1' , '2']) === '1,2'
 *  toString({ a : 1 }) === '{"a":1}'
 *
 */

export function toString<T>(raw: T): string {
  // do ...
  let res: string;
  switch (getType(raw)) {
    case "string":
      res = `${raw}`;
      break;
    case "array":
      res = `${(raw as unknown as any[]).join(",")}`;
      break;
    case "object":
      res = JSON.stringify(raw);
      break;
    default:
      res = `${raw}`;
  }
  return res;
}
