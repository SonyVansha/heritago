export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token')
  const userRole = useCookie('role')

  // Jika belum login
  if (!token.value) {
    return navigateTo('/unauthorized')
  }

  // Jika halaman butuh role tertentu (misalnya "admin")
  if (to.meta.requiresRole && userRole.value !== to.meta.requiresRole) {
    return navigateTo('/unauthorized')
  }
})
