<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { NGrid, NGridItem, NCard, NStatistic, NIcon, NNumberAnimation } from 'naive-ui'
import {
  EyeOutline,
  PeopleOutline,
  CashOutline,
  CartOutline,
  ArrowUpOutline,
  ArrowDownOutline
} from '@vicons/ionicons5'
import { useEcharts } from '@/hooks/useEcharts'

// ===== 顶部卡片数据模拟 =====
const stats = computed(() => [
  {
    title: '用户总数',
    value: 10430,
    icon: PeopleOutline,
    color: '#7B61FF',
    trend: '+5.76%',
    desc: '4月新增 152 人'
  },
  {
    title: '今日访问',
    value: 13190,
    icon: EyeOutline,
    color: '#00B2FF',
    trend: '+4.21%',
    desc: '较昨日变化'
  },
  {
    title: '4月销售额',
    value: 1696727,
    icon: CashOutline,
    color: '#10B981',
    trend: '+8.33%',
    desc: '本月累计收入',
    isMoney: true
  },
  {
    title: '待处理订单',
    value: 234,
    icon: CartOutline,
    color: '#F59E0B',
    trend: '-4.16%',
    desc: '需要及时处理'
  }
])

// ===== ECharts 实例钩子 =====
const { chartRef: mainChartRef, setOption: setMainOption } = useEcharts()
const { chartRef: sideChartRef, setOption: setSideOption } = useEcharts()
const { chartRef: bottomLeftChartRef, setOption: setBottomLeftOption } = useEcharts()
const { chartRef: bottomRightChartRef, setOption: setBottomRightOption } = useEcharts()

// 统一的 X 轴月份数据
const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

// 定义通用的图表颜色系统，匹配截图
const colors = ['#8b5cf6', '#06b6d4', '#84cc16', '#f97316', '#ec4899']

onMounted(() => {
  // 1. 中部左侧：收入概览 (大折线面积图)
  setMainOption({
    color: colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'line' }
    },
    legend: {
      data: ['主要收入', '核心业务', '辅助收入', '订阅收入', '广告收入'],
      icon: 'circle',
      right: 0,
      top: 0
    },
    grid: { left: '2%', right: '2%', bottom: '5%', top: '15%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: months
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } }
    },
    series: [
      { name: '主要收入', type: 'line', smooth: true, data: [42000, 68000, 54000, 58000, 70000, 80000, 84000, 78000, 69000, 68000, 82000, 60000], areaStyle: { opacity: 0.1 } },
      { name: '核心业务', type: 'line', smooth: true, data: [46000, 54000, 48000, 68000, 70000, 60000, 44000, 44000, 50000, 48000, 64000, 50000], areaStyle: { opacity: 0.1 } },
      { name: '辅助收入', type: 'line', smooth: true, data: [42000, 44000, 44000, 46000, 44000, 48000, 36000, 40000, 38000, 48000, 48000, 46000], areaStyle: { opacity: 0.1 }, lineStyle: { type: 'dashed' } },
      { name: '订阅收入', type: 'line', smooth: true, data: [30000, 22000, 24000, 26000, 22000, 32000, 28000, 28000, 22000, 20000, 22000, 28000], areaStyle: { opacity: 0.1 }, lineStyle: { type: 'dashed' } },
      { name: '广告收入', type: 'line', smooth: true, data: [16000, 16000, 14000, 20000, 22000, 16000, 16000, 18000, 24000, 18000, 16000, 18000], areaStyle: { opacity: 0.1 }, lineStyle: { type: 'dashed' } }
    ]
  })

  // 2. 中部右侧：迷你趋势图 (折线 + 淡柱形)
  setSideOption({
    color: colors,
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['主要收入', '核心业务', '辅助收入', '订阅收入', '广告收入'],
      icon: 'circle',
      top: 0,
      itemWidth: 8,
      itemHeight: 8
    },
    grid: { left: 0, right: 0, top: 40, bottom: 20 },
    xAxis: { type: 'category', show: false, data: months },
    yAxis: { type: 'value', show: false },
    series: [
      { name: '主要收入', type: 'line', smooth: true, symbolSize: 4, data: [70, 78, 74, 76, 80, 84, 85, 80, 77, 85, 75, 68] },
      { name: '核心业务', type: 'bar', barWidth: '40%', itemStyle: { color: '#8b5cf6', opacity: 0.15 }, data: [40, 50, 45, 48, 55, 58, 60, 52, 48, 60, 45, 38] }
    ]
  })

  // 3. 底部左侧：当月各业务收入 (柱状对比图)
  setBottomLeftOption({
    color: ['#c4b5fd', '#a5f3fc', '#d9f99d', '#fed7aa', '#fbcfe8'],
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '5%', right: '5%', bottom: '5%', top: '20%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['主要收入', '核心业务', '辅助收入', '订阅收入', '广告收入'],
      axisLine: { show: true, lineStyle: { type: 'dashed' } },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } },
      axisLabel: {
        formatter: (val: number) => (val / 1000) + 'k'
      }
    },
    series: [
      {
        name: '4月数据',
        type: 'bar',
        barWidth: 32,
        itemStyle: { borderRadius: [4, 4, 0, 0] },
        data: [
          { value: 60000, itemStyle: { color: '#c4b5fd' } },
          { value: 68000, itemStyle: { color: '#a5f3fc' } },
          { value: 24000, itemStyle: { color: '#d9f99d' } },
          { value: 20000, itemStyle: { color: '#fed7aa' } },
          { value: 18000, itemStyle: { color: '#fbcfe8' } }
        ]
      }
    ]
  })

  // 4. 底部右侧：年度最高业务收入 (阶梯折线图)
  setBottomRightOption({
    color: ['#8b5cf6', '#d1d5db'],
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['最高', '最低'],
      icon: 'circle',
      right: 0,
      top: 0
    },
    grid: { left: '2%', right: '2%', bottom: '5%', top: '15%', containLabel: true },
    xAxis: {
      type: 'category',
      data: months,
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } }
    },
    series: [
      {
        name: '最高',
        type: 'line',
        step: 'start',
        data: [68000, 68000, 52000, 52000, 60000, 73000, 84000, 84000, 82000, 68000, 82000, 62000],
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{ offset: 0, color: 'rgba(139, 92, 246, 0.2)' }, { offset: 1, color: 'rgba(139, 92, 246, 0)' }]
          }
        }
      }
    ]
  })
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- 1. 顶部数据看板 (含动态数字特效) -->
    <n-grid :x-gap="24" :y-gap="24" :cols="4" responsive="screen">
      <n-grid-item v-for="s in stats" :key="s.title">
        <n-card bordered class="shadow-sm hover:shadow-md transition-shadow duration-300">
          <!-- 上半部份 -->
          <div class="flex justify-between items-start mb-2">
            <div class="overflow-hidden">
              <div class="text-xs font-medium mb-1 truncate opacity-70">{{ s.title }}</div>
              <div class="font-bold tracking-tight flex items-baseline" :class="s.isMoney ? 'text-2xl' : 'text-3xl'">
                <span v-if="s.isMoney" class="text-xl mr-1 font-semibold leading-none">¥</span>
                <n-number-animation :from="0" :to="s.value" :active="true" :duration="2000" show-separator />
              </div>
            </div>
            <div class="p-3 rounded-full flex items-center justify-center shrink-0 ml-2" :style="{ backgroundColor: s.color + '15' }">
              <n-icon size="24" :color="s.color">
                <component :is="s.icon" />
              </n-icon>
            </div>
          </div>
          <!-- 下半部份 -->
          <div class="flex items-center text-xs mt-4">
            <div class="px-2 py-0.5 rounded flex items-center gap-1 font-medium mr-2 shrink-0" :class="s.trend.includes('+') ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-red-100 text-red-600 dark:bg-red-900/30'">
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
    </n-grid>

    <!-- 2. 中部核心图表区 -->
    <n-grid :x-gap="24" :y-gap="24" :cols="12" responsive="screen">
      <!-- 收入概览 -->
      <n-grid-item :span="8">
        <n-card bordered class="shadow-sm">
          <template #header>
            <div>
              <div class="text-base font-bold">收入概览</div>
              <div class="text-xs font-normal mt-1 opacity-60">总收入趋势与增长分析</div>
            </div>
          </template>
          <div ref="mainChartRef" class="w-full h-[320px]"></div>
        </n-card>
      </n-grid-item>

      <!-- 迷你趋势副表 -->
      <n-grid-item :span="4">
        <n-card bordered class="shadow-sm">
          <div ref="sideChartRef" class="w-full h-[375px]"></div>
        </n-card>
      </n-grid-item>
    </n-grid>

    <!-- 3. 下半部业务分析区 -->
    <n-grid :x-gap="24" :y-gap="24" :cols="12" responsive="screen">
      <!-- 当月各业务收入 -->
      <n-grid-item :span="5">
        <n-card bordered class="shadow-sm">
          <template #header>
            <div>
              <div class="text-base font-bold">当月各业务收入</div>
              <div class="text-xs font-normal mt-1 opacity-60">4月数据对比</div>
            </div>
          </template>
          <div ref="bottomLeftChartRef" class="w-full h-[250px]"></div>
        </n-card>
      </n-grid-item>

      <!-- 年度最高业务收入 -->
      <n-grid-item :span="7">
        <n-card bordered class="shadow-sm">
          <template #header>
            <div>
              <div class="text-base font-bold">年度最高业务收入</div>
            </div>
          </template>
          <div ref="bottomRightChartRef" class="w-full h-[272px]"></div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>