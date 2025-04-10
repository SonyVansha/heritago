export default defineNuxtPlugin(() => {
  const token = useCookie('token')
  return {
    provide: {
      apiFetch: $fetch.create({
        baseURL: 'http://localhost:5000/api',
        headers: token.value ? { Authorization: `Bearer ${token.value}` } : {}
      })
    }
  }
})
