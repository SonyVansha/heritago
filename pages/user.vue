<script setup>
const data = ref('')
const { $apiFetch } = useNuxtApp()

definePageMeta({
  middleware: 'auth',
  requiresRole: 'user'
})


onMounted(async () => {
  try {
    const res = await $apiFetch('/user/profile')
    data.value = res.message
  } catch {
    data.value = 'Unauthorized'
  }
})
</script>

<template>
  <div>
    <h1>User Page</h1>
    <p>{{ data }}</p>
  </div>
</template>
