<script setup>
const username = ref('')
const password = ref('')
const router = useRouter()
const token = useCookie('token') // simpan token
const role = useCookie('role')   // simpan role
const { $apiFetch } = useNuxtApp()

async function login() {
  try {
    // Request login
    const loginRes = await $apiFetch('/auth/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      },
      credentials: 'include'
    })

    // Simpan token ke cookie
    token.value = loginRes.token

    // Ambil status user untuk mendapatkan role
    const status = await $apiFetch('/auth/status', {
      credentials: 'include'
    })

    // Simpan role ke cookie
    role.value = status.user?.role || ''

    // Redirect berdasarkan role
    if (role.value === 'admin') {
      router.push('/admin')
    } else {
      router.push('/user')
    }
  } catch (err) {
    console.error('Login gagal:', err)
    alert('Login gagal. Periksa username/password.')
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>
