import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import * as echarts from 'echarts'
import { useAppStore } from '@/store/modules/app'

export function useEcharts() {
  const chartRef = ref<HTMLDivElement | null>(null)
  let chartInstance: echarts.ECharts | null = null
  let resizeObserver: ResizeObserver | null = null
  const appStore = useAppStore()

  let cachedOption: any = null

  const setOption = (option: echarts.EChartsOption | any, notMerge = false) => {
    cachedOption = option
    if (!chartInstance) return
    chartInstance.setOption(option, notMerge)
  }

  const initChart = () => {
    if (!chartRef.value) return
    
    if (chartInstance) {
      chartInstance.dispose()
    }

    const theme = appStore.isDark ? 'dark' : undefined
    chartInstance = echarts.init(chartRef.value, theme, {
      renderer: 'canvas'
    })

    // 默认确保背景透明，以融入系统主体的卡片颜色
    chartInstance.setOption({ backgroundColor: 'transparent' })

    if (cachedOption) {
      chartInstance.setOption(cachedOption)
    }
  }

  const resize = () => {
    if (chartInstance) {
      chartInstance.resize()
    }
  }

  onMounted(() => {
    nextTick(() => {
      initChart()
      if (chartRef.value) {
        resizeObserver = new ResizeObserver(() => {
          resize()
        })
        resizeObserver.observe(chartRef.value)
      }
    })
  })

  // 主题切换时，销毁重建图表实例以切换内在主体，并重新应用原有配置
  watch(
    () => appStore.isDark,
    () => {
      if (chartInstance) {
        initChart()
      }
    }
  )

  onUnmounted(() => {
    if (resizeObserver && chartRef.value) {
      resizeObserver.unobserve(chartRef.value)
    }
    if (chartInstance) {
      chartInstance.dispose()
      chartInstance = null
    }
  })

  return {
    chartRef,
    setOption,
    getInstance: () => chartInstance,
    resize
  }
}
