<script setup>
const data = ref('')
const { $apiFetch } = useNuxtApp()
const { logout } = useAuth()

definePageMeta({
  middleware: 'auth',
  requiresRole: 'admin'
})


onMounted(async () => {
  try {
    const res = await $apiFetch('/admin/dashboard')
    data.value = res.message
  } catch {
    data.value = 'Unauthorized'
  }
})
</script>

<template>
  <div>
    <h1>Admin Page</h1>
    <p>{{ data }}</p>

    <h4>This admin Page</h4>
    <button @click="logout">Logout</button>
  </div>
</template>
