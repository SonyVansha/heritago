// ~/composables/useAuth.ts
export const useAuth = () => {
  const token = useCookie('token')

  const logout = () => {
    token.value = null
    navigateTo('/login')
  }

  return { logout }
}
