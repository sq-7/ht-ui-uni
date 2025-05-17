/*
 * @Author: weisheng
 * @Date: 2023-07-02 22:51:06
 * @LastEditTime: 2024-03-16 19:59:07
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /ht-ui-uni/src/uni_modules/ht-ui-uni/components/common/clickoutside.ts
 * 记得注释
 */
let queue: any[] = []

export function pushToQueue(comp: any) {
  queue.push(comp)
}

export function removeFromQueue(comp: any) {
  queue = queue.filter((item) => {
    return item.$.uid !== comp.$.uid
  })
}

export function closeOther(comp: any) {
  queue.forEach((item) => {
    if (item.$.uid !== comp.$.uid) {
      item.$.exposed.close()
    }
  })
}

export function closeOutside() {
  queue.forEach((item) => {
    item.$.exposed.close()
  })
}
