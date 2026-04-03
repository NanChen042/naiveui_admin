<template>
  <n-modal 
    v-model:show="show" 
    preset="card" 
    title="修改水印信息" 
    style="width: 446px" 
    :bordered="false" 
    class="watermark-modal"
  >
    <template #header-extra>
      <n-button quaternary circle size="small" @click="resetWatermark">
        <template #icon>
          <n-icon><RefreshOutline /></n-icon>
        </template>
      </n-button>
    </template>

    <n-scrollbar style="max-height: 68vh" trigger="hover">
      <div class="px-1 pr-3 pb-6">
        <div class="flex flex-col gap-6">
          <!-- 文本内容 -->
          <div class="form-group">
            <label>水印内容</label>
            <n-input
              type="textarea"
              v-model:value="watermarkForm.content"
              placeholder="请输入水印内容"
              :autosize="{ minRows: 2, maxRows: 4 }"
              size="medium"
              @update:value="handleWatermarkUpdate('content', $event)"
            />
          </div>

          <!-- 字体设置 -->
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label>字体大小</label>
              <n-input-number
                v-model:value="watermarkForm.fontSize"
                size="medium"
                :min="10"
                :max="100"
                @update:value="handleWatermarkUpdate('fontSize', $event)"
              />
            </div>
            <div class="form-group">
              <label>字体风格</label>
              <n-select
                v-model:value="watermarkForm.fontStyle"
                size="medium"
                :options="fontStyleOptions"
                @update:value="handleWatermarkUpdate('fontStyle', $event)"
              />
            </div>
          </div>

          <!-- 颜色设置 -->
          <div class="form-group">
            <label>文字颜色</label>
            <n-color-picker
              v-model:value="watermarkForm.color"
              size="medium"
              :show-alpha="true"
              @update:value="handleWatermarkUpdate('color', $event)"
            />
          </div>

          <!-- 进阶文字属性 -->
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label>行高 (px)</label>
              <n-input-number
                v-model:value="watermarkForm.lineHeight"
                size="medium"
                :min="1"
                @update:value="handleWatermarkUpdate('lineHeight', $event)"
              />
            </div>
            <div class="form-group">
              <label>字重</label>
              <n-input-number
                v-model:value="watermarkForm.fontWeight"
                size="medium"
                :step="100"
                :min="100"
                :max="900"
                @update:value="handleWatermarkUpdate('fontWeight', $event)"
              />
            </div>
          </div>

          <!-- 布局尺寸 -->
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label>网格宽度</label>
              <n-input-number
                v-model:value="watermarkForm.width"
                size="medium"
                :min="10"
                @update:value="handleWatermarkUpdate('width', $event)"
              />
            </div>
            <div class="form-group">
              <label>网格高度</label>
              <n-input-number
                v-model:value="watermarkForm.height"
                size="medium"
                :min="10"
                @update:value="handleWatermarkUpdate('height', $event)"
              />
            </div>
          </div>

          <!-- 偏移设置 -->
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label>X轴偏移</label>
              <n-input-number
                v-model:value="watermarkForm.xOffset"
                size="medium"
                @update:value="handleWatermarkUpdate('xOffset', $event)"
              />
            </div>
            <div class="form-group">
              <label>Y轴偏移</label>
              <n-input-number
                v-model:value="watermarkForm.yOffset"
                size="medium"
                @update:value="handleWatermarkUpdate('yOffset', $event)"
              />
            </div>
          </div>

          <!-- 旋转与交互 -->
          <div class="grid grid-cols-3 gap-4 items-end">
            <div class="form-group">
              <label>旋转角度</label>
              <n-slider v-model:value="watermarkForm.rotate" :min="-180" :max="180" @update:value="handleWatermarkUpdate('rotate', $event)" />
            </div>
            <div class="form-group">
              <label>整体旋转</label>
              <n-slider v-model:value="watermarkForm.overallRotation" :min="-180" :max="180" @update:value="handleWatermarkUpdate('overallRotation', $event)" />
            </div>
            <div class="form-group flex items-center justify-between px-2 bg-gray-50 dark:bg-zinc-800/50 rounded-md py-1.5">
              <span class="text-[12px] font-semibold text-gray-500">跨越边界</span>
              <n-switch v-model:value="watermarkForm.cross" size="medium" @update:value="handleWatermarkUpdate('cross', $event)" />
            </div>
          </div>

          <!-- 图片水印设置 -->
          <div class="image-section border-t border-gray-100 dark:border-gray-800 pt-6">
            <div class="form-group mb-5">
              <label>图像地址 (URL)</label>
              <n-input
                type="textarea"
                v-model:value="watermarkForm.image"
                placeholder="请输入图像URL地址"
                :autosize="{ minRows: 2, maxRows: 3 }"
                size="medium"
              />
            </div>

            <div class="grid grid-cols-3 gap-4 items-start">
              <div class="form-group">
                <div class="flex items-center gap-1 mb-1.5">
                  <label class="mb-0!">图像宽度</label>
                  <n-tooltip trigger="hover">
                    <template #trigger>
                      <n-icon size="16" class="text-gray-400 cursor-help"><HelpCircleOutline /></n-icon>
                    </template>
                    控制图像水印显示的像素宽度
                  </n-tooltip>
                </div>
                <n-input-number v-model:value="watermarkForm.imageWidth" size="medium" :min="1" />
              </div>
              <div class="form-group">
                <div class="flex items-center gap-1 mb-1.5">
                  <label class="mb-0!">图像高度</label>
                  <n-tooltip trigger="hover">
                    <template #trigger>
                      <n-icon size="16" class="text-gray-400 cursor-help"><HelpCircleOutline /></n-icon>
                    </template>
                    控制图像水印显示的像素高度
                  </n-tooltip>
                </div>
                <n-input-number v-model:value="watermarkForm.imageHeight" size="medium" :min="1" />
              </div>
              <div class="form-group">
                <div class="flex items-center gap-1 mb-1.5">
                  <label class="mb-0!">图像透明度</label>
                  <n-tooltip trigger="hover">
                    <template #trigger>
                      <n-icon size="16" class="text-gray-400 cursor-help"><HelpCircleOutline /></n-icon>
                    </template>
                    调整图像水印的不透明度 (0-1)
                  </n-tooltip>
                </div>
                <div class="flex items-center gap-2">
                  <n-slider v-model:value="watermarkForm.imageOpacity" :min="0" :max="1" :step="0.01" class="flex-1" />
                  <n-button strong secondary type="primary" size="medium" @click="applyImageSettings">
                    应用
                  </n-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </n-scrollbar>
  </n-modal>
</template>

<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
import {
  NModal,
  NInput,
  NInputNumber,
  NSelect,
  NColorPicker,
  NSlider,
  NSwitch,
  NButton,
  NIcon,
  NTooltip,
  NScrollbar
} from 'naive-ui'
import { RefreshOutline, HelpCircleOutline } from '@vicons/ionicons5'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits(['update:show'])

const show = computed({
  get: () => props.show,
  set: (val) => emit('update:show', val)
})

const appStore = useAppStore()
const watermarkForm = reactive({ ...appStore.watermarkConfig })

// 监听 store 变化同步表单
watch(() => appStore.watermarkConfig, (newVal) => {
  Object.assign(watermarkForm, newVal)
}, { deep: true })

const handleWatermarkUpdate = (key: string, value: any) => {
  appStore.setWatermarkConfig({ [key]: value })
}

const applyImageSettings = () => {
  appStore.setWatermarkConfig({
    image: watermarkForm.image,
    imageWidth: watermarkForm.imageWidth,
    imageHeight: watermarkForm.imageHeight,
    imageOpacity: watermarkForm.imageOpacity
  })
  window.$message?.success('图像水印配置已应用')
}

const resetWatermark = () => {
  appStore.resetWatermarkConfig()
  window.$message?.info('水印配置已恢复默认')
}

const fontStyleOptions = [
  { label: '正常 (Normal)', value: 'normal' },
  { label: '斜体 (Italic)', value: 'italic' },
  { label: '偏斜 (Oblique)', value: 'oblique' }
]
</script>

<style scoped>
@reference "../../../assets/main.css";

.form-group {
  @apply flex flex-col gap-2;
}

.form-group label {
  @apply text-[13px] font-bold text-gray-700 dark:text-gray-300;
}

:deep(.n-input), :deep(.n-input-number), :deep(.n-select-selection) {
  display: flex !important;
  align-items: center !important;
}

:deep(.n-input--textarea .n-input__textarea-el) {
  padding: 8px 12px !important;
}
</style>
