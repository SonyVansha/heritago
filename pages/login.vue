<script setup>
const username = ref('')
const password = ref('')
const router = useRouter()
const token = useCookie('token')
const role = useCookie('role')

const { $apiFetch } = useNuxtApp()

async function login() {
  try {
    const res = await $apiFetch('/auth/login', {
      method: 'POST',
      body: { username: username.value, password: password.value }
    })

    token.value = res.token
    role.value = res.role

    if (!token.value) {
    return navigateTo('/login')
}


    if (res.role === 'admin') {
      router.push('/admin')
    } else {
      router.push('/user')
    }
  } catch (err) {
    console.error(err)
    alert('Login gagal')
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
