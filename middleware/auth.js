// export default defineNuxtRouteMiddleware((to) => {
//   const token = useCookie('token')
//   const userRole = useCookie('role')

//   // Belum login (token kosong)
//   if (!token.value) {
//     return navigateTo('/unauthorized')
//   }

//   // Jika route punya syarat role tertentu (misalnya admin, user, dll)
//   const requiredRole = to.meta.requiresRole
//   if (requiredRole && userRole.value !== requiredRole) {
//     return navigateTo('/unauthorized')
//   }
// })
