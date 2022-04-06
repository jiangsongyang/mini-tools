/**
 *  HOW TO USE
 *
 *  const debounced = debounce(() => {
 *    your functon ...
 *  }, delay)
 *
 */

export function debounce(fn: () => void, delay: number) {
  let timer: any;
  return function () {
    const context = this
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
