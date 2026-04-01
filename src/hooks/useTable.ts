import { ref, onMounted } from 'vue'

interface TableOptions {
  requestApi: (params: any) => Promise<{ list: any[], total: number }>
  pagination?: boolean
  pageSize?: number
}

export function useTable(options: TableOptions) {
  const loading = ref(false)
  const data = ref<any[]>([])
  const total = ref(0)
  const page = ref(1)
  const pageSize = ref(options.pageSize || 10)

  const refresh = async () => {
    loading.value = true
    try {
      const res = await options.requestApi({
        page: page.value,
        pageSize: pageSize.value
      })
      data.value = res.list
      total.value = res.total
    } catch (error) {
      console.error('useTable refresh error:', error)
    } finally {
      loading.value = false
    }
  }

  const handlePageChange = (p: number) => {
    page.value = p
    refresh()
  }

  const handlePageSizeChange = (ps: number) => {
    pageSize.value = ps
    page.value = 1
    refresh()
  }

  onMounted(() => {
    refresh()
  })

  return {
    loading,
    data,
    total,
    page,
    pageSize,
    refresh,
    handlePageChange,
    handlePageSizeChange
  }
}
