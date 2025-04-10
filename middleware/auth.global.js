export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token')

  // Allow access to login & register page
  if (to.path === '/login' || to.path === '/register') {
    return
  }

  // If not logged in, redirect to login page
  if (!token.value) {
    return navigateTo('/login')
  }
})
