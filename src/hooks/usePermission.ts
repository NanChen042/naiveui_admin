/**
 * 权限控制 Hook (预留)
 */
export function usePermission() {
  const hasPermission = (permission: string) => {
    // 实际应从 userStore 获取角色权限列表进行比对
    return true
  }

  return {
    hasPermission
  }
}
