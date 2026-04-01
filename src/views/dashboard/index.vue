<script lang="ts" setup>
import { h } from 'vue'
import { NGrid, NGridItem, NCard, NStatistic, NIcon, NTag, NTimeline, NTimelineItem } from 'naive-ui'
import { 
  TrendingUpOutline, 
  PeopleOutline, 
  CashOutline, 
  CartOutline 
} from '@vicons/ionicons5'

/**
 * 业务大盘演示页面：采用容器化卡片布局
 * 解决了之前裸露文字导致的“颜色不统一”感官问题
 */

const renderIcon = (icon: any) => h(NIcon, null, { default: () => h(icon) })

// 模拟业务数据
const stats = [
  { title: '昨日营收', value: '¥ 12,840', icon: CashOutline, color: '#1890ff', sub: '较前日 +12.5%' },
  { title: '新增访客', value: '1,240', icon: PeopleOutline, color: '#52c41a', sub: '较前日 -2.1%' },
  { title: '待处理订单', value: '48', icon: CartOutline, color: '#faad14', sub: '急需发货 12' },
  { title: '转化率', value: '15.4%', icon: TrendingUpOutline, color: '#722ed1', sub: '稳定增长' }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- 顶部数据看板 -->
    <n-grid :x-gap="24" :y-gap="24" :cols="4" responsive="screen">
      <n-grid-item v-for="s in stats" :key="s.title">
        <n-card bordered class="shadow-sm hover:shadow-md transition-shadow duration-300">
          <n-statistic :label="s.title">
            <template #prefix>
              <div class="p-2 mr-3 rounded-lg" :style="{ backgroundColor: s.color + '15' }">
                <n-icon size="24" :color="s.color">
                  <component :is="s.icon" />
                </n-icon>
              </div>
            </template>
            <span class="text-2xl font-bold tracking-tight">{{ s.value }}</span>
          </n-statistic>
          <div class="mt-3 text-xs text-gray-500 flex items-center gap-1">
            <span :class="s.sub.includes('+') ? 'text-green-500' : 'text-red-500'">{{ s.sub }}</span>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>

    <!-- 中部内容区块：图表占位与动态 -->
    <n-grid :x-gap="24" :y-gap="24" :cols="12" responsive="screen">
      <n-grid-item :span="8">
        <n-card title="流量趋势分析" bordered class="h-[400px]">
          <div class="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded border-2 border-dashed border-gray-200 dark:border-gray-700">
            <div class="text-center text-gray-400">
               <n-icon size="48"><TrendingUpOutline /></n-icon>
               <p class="mt-2 ml-1">ECharts 图表连接区域</p>
            </div>
          </div>
        </n-card>
      </n-grid-item>
      
      <n-grid-item :span="4">
        <n-card title="最近系统动态" bordered class="h-[400px]">
          <n-timeline>
            <n-timeline-item type="success" title="成功部署" content="V1.2.0 版本已上线" time="10:30" />
            <n-timeline-item type="info" title="数据备份" content="自动备份任务已完成" time="06:00" />
            <n-timeline-item type="warning" title="安全预警" content="检测到 3 次异常登录尝试" time="昨天" />
            <n-timeline-item title="系统初始化" content="基础地基架构搭建成功" time="三天前" />
          </n-timeline>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<style scoped lang="less">
:deep(.n-card) {
  border-radius: 12px;
}
</style>