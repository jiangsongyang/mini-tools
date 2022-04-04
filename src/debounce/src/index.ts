/**
 *  HOW TO USE
 *
 *  ...
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
