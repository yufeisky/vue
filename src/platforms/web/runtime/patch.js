/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
/**
 * yufeisky
 * 把平台的modules跟基础的modules合并； 
 */
const modules = platformModules.concat(baseModules)

/**
 * yufeisky
 * 把{ nodeOps, modules })传入createPatchFunction函数，经过一系列处理返回一个新的函数patch
 */
export const patch: Function = createPatchFunction({ nodeOps, modules })
