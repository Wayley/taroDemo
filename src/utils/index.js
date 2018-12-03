/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Company: uooc
 * @Date: 2018-11-30 15:54:57
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2018-12-03 12:01:40
 */

export function baseFns() {
  const objectProto = Object.prototype
  const hasOwnProperty = objectProto.hasOwnProperty
  const toString = objectProto.toString
  const symToStringTag =
    typeof Symbol != 'undefined' ? Symbol.toStringTag : undefined
  return {
    objectProto,
    hasOwnProperty,
    toString,
    symToStringTag
  }
}

/**
 * @description 'combine class names'
 * @author wzheng
 * @date 2018-12-03
 * @returns
 */
export function classNames() {
  var classes = []
  var { hasOwnProperty } = baseFns()
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (!arg) continue
    var argType = typeof arg
    if (argType === 'string' || argType === 'number') {
      classes.push(arg)
    } else if (Array.isArray(arg)) {
      classes.push(classNames.apply(null, arg))
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  }
  return classes.join(' ')
}

/**
 * @description
 * @author wzheng
 * @date 2018-12-03
 * @export
 * @param {*} val
 * @returns {boolean} returns whether the val is true or not
 */
export function isObject(val) {
  const type = typeof val
  return val != null && (type == 'object' || type == 'function')
}

/**
 * @description
 * @author wzheng
 * @date 2018-12-03
 * @export
 * @param {*} val
 */
export function baseGetTag(val) {
  const { symToStringTag, hasOwnProperty, toString } = baseFns()
  if (val == null) {
    return val === undefined ? '[object Undefined]' : '[object Null]'
  }
  if (!(symToStringTag && symToStringTag in Object(val))) {
    return toString.call(val)
  }
  const isOwn = hasOwnProperty.call(val, symToStringTag)
  const tag = val[symToStringTag]
  let unmasked = false
  try {
    val[symToStringTag] = undefined
    unmasked = true
  } catch (e) {}

  const result = toString.call(val)
  if (unmasked) {
    if (isOwn) {
      val[symToStringTag] = tag
    } else {
      delete val[symToStringTag]
    }
  }
  return result
}
export function isFunction(val) {
  if (!isObject(val)) {
    return false
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = baseGetTag(val)
  return (
    tag == '[object Function]' ||
    tag == '[object AsyncFunction]' ||
    tag == '[object GeneratorFunction]' ||
    tag == '[object Proxy]'
  )
}
export default {
  classNames,
  isObject,
  baseGetTag,
  isFunction
}
