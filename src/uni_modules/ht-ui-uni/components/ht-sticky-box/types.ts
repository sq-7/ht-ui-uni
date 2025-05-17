/*
 * @Author: weisheng
 * @Date: 2024-04-08 22:34:01
 * @LastEditTime: 2024-06-01 16:04:56
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /ht-ui-uni/src/uni_modules/ht-ui-uni/components/ht-sticky-box/types.ts
 * 记得注释
 */
import type { ComponentInternalInstance, InjectionKey } from 'vue'

export type stickyBoxProvide = {
  boxStyle: {
    height: number // 高度
    width: number // 宽度
  }
  observerForChild: (child: ComponentInternalInstance) => void // 监听子组件
}

export const STICKY_BOX_KEY: InjectionKey<stickyBoxProvide> = Symbol('ht-sticky-box')
