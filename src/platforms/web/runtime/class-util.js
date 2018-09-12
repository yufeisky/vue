/* @flow */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
export function addClass (el: HTMLElement, cls: ?string) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  /**
   * yufeisky
   * if：首先判断浏览器支不支持el.classList，支持的话通过el.classList.add的方法来添加class
   * else：用getAttribute('class')的方式获取本身的class，当新添加的class不在当前元素的class里面，就把要新添加的class添加到当前的样式里面
   */
  if (el.classList) {
    //if：当cls有空格，cls通过空格转成一个数组之后循环添加到元素class中 else：说明只有一个字符串，直接调用add添加
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(c => el.classList.add(c))
    } else {
      el.classList.add(cls)
    }
  } else {
    //不支持el.classList 就用getAttribute，setAttribute方式添加，trim为删除两端空格
    const cur = ` ${el.getAttribute('class') || ''} `
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim())
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
 /**
   * yufeisky
   * if：首先判断浏览器支不支持el.classList，支持的话通过el.classList.remove的方法来移除class
   * else：用getAttribute('class') setAttribute的方式来移除class
 */
export function removeClass (el: HTMLElement, cls: ?string) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(c => el.classList.remove(c))
    } else {
      el.classList.remove(cls)
    }
    if (!el.classList.length) {
      el.removeAttribute('class')
    }
  } else {
    let cur = ` ${el.getAttribute('class') || ''} `
    const tar = ' ' + cls + ' '
    //yufei这里有个疑问？例如原先cur 为 'test1 test2 test3'  cls为'test1 test3'在这里是如何执行？？？ 试过应该是移除不了的，只能单个移除
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ')
    }
    cur = cur.trim()
    //yufei 假如移除之后还存在class，重新通过setAttribute添加到元素中，否则移除元素到class属性
    if (cur) {
      el.setAttribute('class', cur)
    } else {
      el.removeAttribute('class')
    }
  }
}
