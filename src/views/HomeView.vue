<script setup lang="ts">
</script>

<template>
  <main class="text-2xl">
    你好
  </main>
  <!-- 调整 naive-ui 的字重配置 -->
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <p class="text-xl text-amber-300">测试</p>
  </n-config-provider>
  <n-button>naive-ui1231323</n-button>

</template>
