<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { NGrid, NGridItem, NCard, NIcon, NNumberAnimation, NGradientText, NText, NSkeleton } from 'naive-ui'
import {
  EyeOutline,
  PeopleOutline,
  CashOutline,
  CartOutline,
  ArrowUpOutline,
  ArrowDownOutline
} from '@vicons/ionicons5'
import { useEcharts } from '@/hooks/useEcharts'
import { getDashboardStats, getDashboardChartData } from '@/api/dashboard'

// ===== 数据逻辑 =====
const stats = ref<any[]>([])
const loading = ref(true)

// ===== ECharts 实例钩子 =====
const { chartRef: mainChartRef, setOption: setMainOption } = useEcharts()
const { chartRef: sideChartRef, setOption: setSideOption } = useEcharts()
const { chartRef: bottomLeftChartRef, setOption: setBottomLeftOption } = useEcharts()
const { chartRef: bottomRightChartRef, setOption: setBottomRightOption } = useEcharts()

// 通用颜色
const colors = ['#8b5cf6', '#06b6d4', '#84cc16', '#f97316', '#ec4899']

const fetchData = async () => {
  loading.value = true
  try {
    const [statsRes, chartRes] = await Promise.all([
      getDashboardStats(),
      getDashboardChartData()
    ])
    
    stats.value = statsRes || []
    
    if (chartRes && chartRes.series) {
      const { months, series } = chartRes

      // 1. 设置主图表 (收入概览)
      setMainOption({
        color: colors,
        tooltip: { trigger: 'axis', axisPointer: { type: 'line' } },
        legend: { data: series.map((s: any) => s.name), icon: 'circle', right: 0, top: 0 },
        grid: { left: '2%', right: '2%', bottom: '5%', top: '15%', containLabel: true },
        xAxis: { type: 'category', boundaryGap: false, data: months },
        yAxis: { type: 'value', splitLine: { lineStyle: { type: 'dashed' } } },
        series: series.map((s: any) => ({
          ...s,
          type: 'line',
          smooth: true,
          areaStyle: { opacity: 0.1 }
        }))
      })

      // 2. 设置副图表 (迷你趋势)
      if (series.length >= 2) {
        setSideOption({
          color: colors,
          tooltip: { trigger: 'axis' },
          legend: { data: series.map((s: any) => s.name), icon: 'circle', top: 0, itemWidth: 8, itemHeight: 8 },
          grid: { left: 10, right: 10, top: 50, bottom: 20 },
          xAxis: { type: 'category', show: false, data: months },
          yAxis: { type: 'value', show: false },
          series: [
            { name: series[0].name, type: 'line', smooth: true, symbolSize: 4, data: series[0].data },
            { name: series[1].name, type: 'bar', barWidth: '40%', itemStyle: { color: colors[0], opacity: 0.15 }, data: series[1].data }
          ]
        })
      }

      // 3. 底部左侧 (业务对比)
      setBottomLeftOption({
        color: colors,
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '5%', right: '5%', bottom: '5%', top: '20%', containLabel: true },
        xAxis: { type: 'category', data: series.map((s: any) => s.name), axisTick: { show: false } },
        yAxis: { type: 'value', splitLine: { lineStyle: { type: 'dashed' } } },
        series: [{
          name: '业务数据',
          type: 'bar',
          barWidth: 32,
          data: series.map((s: any, i: number) => ({ value: s.data[3], itemStyle: { color: colors[i % colors.length] } }))
        }]
      })

      // 4. 底部右侧 (峰值趋势)
      setBottomRightOption({
        color: [colors[0], '#d1d5db'],
        tooltip: { trigger: 'axis' },
        legend: { data: ['最高', '趋势'], icon: 'circle', right: 0 },
        grid: { left: '2%', right: '2%', bottom: '5%', top: '15%', containLabel: true },
        xAxis: { type: 'category', data: months, boundaryGap: false, axisLabel: { show: false } },
        yAxis: { type: 'value', splitLine: { lineStyle: { type: 'dashed' } } },
        series: [
          { name: '最高', type: 'line', step: 'start', data: series[0].data, areaStyle: { opacity: 0.1 } }
        ]
      })
    }
  } catch (e) {
    console.error('Fetch dashboard data error:', e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="flex flex-col gap-6 p-1">
    <!-- 1. 顶部数据看板 -->
    <n-grid :x-gap="24" :y-gap="24" :cols="4" responsive="screen">
      <template v-if="loading">
        <n-grid-item v-for="i in 4" :key="i">
          <n-card bordered><n-skeleton text :repeat="3" /></n-card>
        </n-grid-item>
      </template>
      <template v-else>
        <n-grid-item v-for="s in stats" :key="s.title">
          <n-card bordered class="shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex justify-between items-start mb-2">
              <div class="overflow-hidden">
                <div class="text-xs font-medium mb-1 truncate opacity-70">{{ s.title }}</div>
                <div class="font-bold tracking-tight flex items-baseline" :class="s.isMoney ? 'text-2xl' : 'text-3xl'">
                  <span v-if="s.isMoney" class="text-xl mr-1 font-semibold">¥</span>
                  <n-number-animation :from="0" :to="s.value" :active="true" :duration="2000" show-separator />
                </div>
              </div>
              <div class="p-3 rounded-full flex items-center justify-center shrink-0 ml-2" :style="{ backgroundColor: (s.color || '#8b5cf6') + '15' }">
                <n-icon size="24" :color="s.color || '#8b5cf6'">
                  <component :is="s.title.includes('用户') ? PeopleOutline : s.title.includes('访问') ? EyeOutline : s.title.includes('销售') ? CashOutline : CartOutline" />
                </n-icon>
              </div>
            </div>
            <div class="flex items-center text-xs mt-4">
              <div class="px-2 py-0.5 rounded flex items-center gap-1 font-medium mr-2 shrink-0" :class="s.trend.includes('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'">
                <n-icon size="12">
                  <ArrowUpOutline v-if="s.trend.includes('+')" />
                  <ArrowDownOutline v-else />
                </n-icon>
                {{ s.trend }}
              </div>
              <span class="truncate opacity-50">{{ s.desc }}</span>
            </div>
          </n-card>
        </n-grid-item>
      </template>
    </n-grid>

    <!-- 2. 中部核心图表区 -->
    <n-grid :x-gap="24" :y-gap="24" :cols="12" responsive="screen">
      <n-grid-item :span="8">
        <n-card bordered class="shadow-sm" title="收入概览">
          <template #header-extra>
            <div class="text-xs opacity-50">总收入趋势与增长分析</div>
          </template>
          <div ref="mainChartRef" class="w-full h-[320px]"></div>
        </n-card>
      </n-grid-item>
      <n-grid-item :span="4">
        <n-card bordered class="shadow-sm" content-style="padding: 10px;">
          <div ref="sideChartRef" class="w-full h-[375px]"></div>
        </n-card>
      </n-grid-item>
    </n-grid>

    <!-- 3. 下半部业务分析区 -->
    <n-grid :x-gap="24" :y-gap="24" :cols="12" responsive="screen">
      <n-grid-item :span="5">
        <n-card bordered class="shadow-sm" title="当月各业务收入">
          <template #header-extra>
            <div class="text-xs opacity-50">数据对比</div>
          </template>
          <div ref="bottomLeftChartRef" class="w-full h-[250px]"></div>
        </n-card>
      </n-grid-item>
      <n-grid-item :span="7">
        <n-card bordered class="shadow-sm" title="年度统计分析">
          <div ref="bottomRightChartRef" class="w-full h-[250px]"></div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>