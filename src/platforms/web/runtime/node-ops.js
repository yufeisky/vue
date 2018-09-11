/* @flow */

import { namespaceMap } from 'web/util/index'

/**
 * yufeisky描述:传一个标签名，新建一个dom，假如标签名是select，会去检测vnode里面的数据，满足判断条件就会给select设置属性
 * @param {*} tagName 
 * @param {*} vnode 
 */
export function createElement (tagName: string, vnode: VNode): Element {
  const elm = document.createElement(tagName)
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple')
  }
  return elm
}


/**
 * namespace 为svg或者math的时候加上这段
 * @param {*} namespace 
 * @param {*} tagName 
 */
export function createElementNS (namespace: string, tagName: string): Element {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

/**
 * 创建一个文本节点
 * @param {*} text 
 */
export function createTextNode (text: string): Text {
  return document.createTextNode(text)
}
/**
 * 创建注释节点
 * @param {*} text 
 */
export function createComment (text: string): Comment {
  return document.createComment(text)
}

/**
 * 把newNode元素插入到传入的parentNode元素下面，
 * 假如传的referenceNode不为null就插入到referenceNode前面，
 * 要是referenceNode为null，就插入到parentNode下面的元素末尾；
 * @param {*} parentNode 
 * @param {*} newNode 
 * @param {*} referenceNode 
 */
export function insertBefore (parentNode: Node, newNode: Node, referenceNode: Node) {
  parentNode.insertBefore(newNode, referenceNode)
}

/**
 * 从node节点移除child子节点
 * @param {*} node 
 * @param {*} child 
 */
export function removeChild (node: Node, child: Node) {
  node.removeChild(child)
}

/**
 * 把child节点添加到node节点
 * @param {*} node 
 * @param {*} child 
 */
export function appendChild (node: Node, child: Node) {
  node.appendChild(child)
}


/**
 * 传入node节点，获取它的父节点
 */
export function parentNode (node: Node): ?Node {
  return node.parentNode
}

/**
 * 传入node节点，获取他的下一个兄弟节点
 * @param {*} node 
 */
export function nextSibling (node: Node): ?Node {
  return node.nextSibling
}

/**
 * 获取元素的tagName
 * @param {*} node 
 */
export function tagName (node: Element): string {
  return node.tagName
}

/**
 * 给元素设置文本
 * @param {*} node 
 * @param {*} text 
 */
export function setTextContent (node: Node, text: string) {
  node.textContent = text
}


/**
 * 个人觉得这个是因为weex里面有setStyleScope方法，这里好像没有做什么，不过只是个人理解
 * @param {*} node 
 * @param {*} scopeId 
 */
export function setStyleScope (node: Element, scopeId: string) {
  node.setAttribute(scopeId, '')
}
