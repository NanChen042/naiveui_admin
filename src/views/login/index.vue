<template>
  <div class="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
    <div class="p-8 bg-white dark:bg-gray-800 rounded shadow-md w-96">
      <h1 class="text-2xl font-bold mb-6 text-center dark:text-white">登录 Admin Pro</h1>
      <n-form>
        <n-form-item label="账号">
          <n-input placeholder="admin" />
        </n-form-item>
        <n-form-item label="密码">
          <n-input type="password" placeholder="123456" />
        </n-form-item>
        <n-button type="primary" block @click="$router.push('/')">登录</n-button>
      </n-form>
    </div>
  </div>
</template>
