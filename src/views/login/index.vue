<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NForm, NFormItem, NInput, NButton, NIcon, NGradientText, NText, useMessage } from 'naive-ui'
import { PersonOutline, LockClosedOutline, ShieldCheckmarkOutline, RefreshOutline } from '@vicons/ionicons5'
import { useUserStore } from '@/store/modules/user'
import { generateCaptcha } from '@/utils/captcha'

const router = useRouter()
const route = useRoute()
const message = useMessage()
const userStore = useUserStore()

const loading = ref(false)
const formRef = ref<any>(null)
const captchaSvg = ref('')
const correctCaptcha = ref('')

const model = reactive({
  username: '',
  password: '',
  captcha: ''
})

const rules = {
  username: { required: true, message: '请输入用户名', trigger: 'blur' },
  password: { required: true, message: '请输入密码', trigger: 'blur' },
  captcha: { required: true, message: '请输入验证码', trigger: 'blur' }
}

const refreshCaptcha = () => {
  const result = generateCaptcha()
  captchaSvg.value = result.svg
  correctCaptcha.value = result.code
}

const handleLogin = async () => {
  formRef.value?.validate(async (errors: any) => {
    if (!errors) {
      // 验证码校验 (不区分大小写)
      if (model.captcha.toLowerCase() !== correctCaptcha.value.toLowerCase()) {
        message.error('验证码输入有误，请重试')
        refreshCaptcha()
        model.captcha = ''
        return
      }

      loading.value = true
      try {
        if (model.password !== '123456') {
          message.error('密码错误 (初始密码: 123456)')
          refreshCaptcha()
          return
        }
        
        await userStore.login(model.username)
        message.success('登录成功，欢迎回来')
        
        const redirect = route.query.redirect as string
        router.push(redirect || '/')
      } finally {
        loading.value = false
      }
    }
  })
}

onMounted(() => {
  refreshCaptcha()
})
</script>

<template>
  <div class="login-page">
    <div class="login-card-container animate-fade-in">
      <div class="login-content">
        <div class="login-brand">
          <div class="brand-logo">A</div>
          <n-gradient-text type="primary" :size="28" weight="800">
            Vue Naive Admin
          </n-gradient-text>
          <div class="brand-desc mt-1">
            <n-text depth="3">极简美学的企业级管理后台解决方案</n-text>
          </div>
        </div>

        <n-form
          ref="formRef"
          :model="model"
          :rules="rules"
          label-placement="top"
          size="large"
          class="mt-8"
        >
          <n-form-item path="username" label="用户名">
            <n-input v-model:value="model.username" placeholder="admin / user">
              <template #prefix>
                <n-icon :component="PersonOutline" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password" label="密码">
            <n-input
              v-model:value="model.password"
              type="password"
              show-password-on="mousedown"
              placeholder="123456"
              @keypress.enter="handleLogin"
            >
              <template #prefix>
                <n-icon :component="LockClosedOutline" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="captcha" label="验证码">
            <div class="flex w-full gap-3">
              <n-input v-model:value="model.captcha" placeholder="右侧字符" class="flex-1">
                <template #prefix>
                  <n-icon :component="ShieldCheckmarkOutline" />
                </template>
              </n-input>
              <div class="captcha-img-box" @click="refreshCaptcha" v-html="captchaSvg"></div>
              <n-button quaternary circle @click="refreshCaptcha">
                <template #icon><n-icon :component="RefreshOutline" /></template>
              </n-button>
            </div>
          </n-form-item>

          <div class="mt-6">
            <n-button
              type="primary"
              block
              size="large"
              :loading="loading"
              attr-type="submit"
              @click="handleLogin"
              style="border-radius: 8px;"
            >
              立即进入系统
            </n-button>
          </div>
        </n-form>

        <div class="login-page-footer mt-10">
          <n-text depth="3">Admin Pro v1.2.5 — 追求极致极致体验</n-text>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.login-page {
  height: 100vh;
  width: 100vw;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  // 注入轻微的装饰感，但保持干净
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(24, 144, 255, 0.05) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(24, 144, 255, 0.05) 0%, transparent 40%);
  }
}

.login-card-container {
  width: 480px;
  background: white;
  padding: 56px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.login-brand {
  text-align: center;
  
  .brand-logo {
    width: 56px;
    height: 56px;
    background: var(--n-color-primary, #18a058);
    color: white;
    font-size: 28px;
    font-weight: 900;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    box-shadow: 0 4px 12px rgba(24, 160, 88, 0.3);
  }
}

.captcha-img-box {
  width: 120px;
  height: 40px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 4px;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.login-page-footer {
  text-align: center;
  font-size: 13px;
}

// 暗黑模式适配
:deep(.dark) {
  .login-page {
    background-color: #000;
    &::before { opacity: 0.1; }
  }
  .login-card-container {
    background-color: #18181c;
    box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.02);
  }
}
</style>
