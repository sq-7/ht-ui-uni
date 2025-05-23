import { computed } from 'vue'
import { useParent } from './useParent'
import { CELL_GROUP_KEY } from '../ht-cell-group/types'

export function useCell() {
  const { parent: cellGroup, index } = useParent(CELL_GROUP_KEY)

  const border = computed(() => {
    return cellGroup && cellGroup.props.border && index.value
  })

  return { border }
}
