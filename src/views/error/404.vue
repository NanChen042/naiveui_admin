<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <n-result status="404" title="404 资源不存在" description="生活总是有删减，但你可以选择回到首页">
      <template #footer>
        <n-button @click="$router.push('/')">找点乐子</n-button>
      </template>
    </n-result>
  </div>
</template>
