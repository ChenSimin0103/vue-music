export function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }
  // 这里将一个class（字符串）以空格拆分为数组，将新的class属性push进数组，在将数组通过空格连接成一个字符串
  let newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join(" ");
}

// 判断是否有className
export function hasClass(el, className) {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
}
