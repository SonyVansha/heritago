<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/posts/1">Post 1</NuxtLink>

      <slot />

      <footer>This Footer</footer>
    </nav>
  </div>
</template>