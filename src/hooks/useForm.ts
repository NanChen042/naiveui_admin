import { reactive, ref } from 'vue'

export function useForm<T extends object>(initialValues: T) {
  const formValue = reactive({ ...initialValues })
  const formRef = ref<any>(null)
  const loading = ref(false)

  const resetForm = () => {
    Object.assign(formValue, initialValues)
  }

  const validate = async () => {
    if (!formRef.value) return false
    try {
      await formRef.value.validate()
      return true
    } catch (e) {
      return false
    }
  }

  return {
    formValue,
    formRef,
    loading,
    resetForm,
    validate
  }
}
