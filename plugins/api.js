export default defineNuxtPlugin(() => {
  const token = useCookie('token')
  return {
    provide: {
      // variable name: $fetch
      apiFetch: $fetch.create({
        baseURL: 'http://localhost:3001/api',
        headers: token.value ? { Authorization: token.value } : {}
      })
    }
  }
})