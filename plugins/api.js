// export default defineNuxtPlugin(() => {
//   const token = useCookie('token')
//   return {
//     provide: {
//       apiFetch: $fetch.create({
//         baseURL: 'http://localhost:5000/api',
//         headers: token.value ? { Authorization: `Bearer ${token.value}` } : {}
//       })
//     }
//   }
// })
// plugins/api.ts
export default defineNuxtPlugin(() => {
  return {
    provide: {
      apiFetch: $fetch.create({
        baseURL: 'http://localhost:5000/api',
        credentials: 'include' // ini penting agar cookie dikirim
      })
    }
  }
})
