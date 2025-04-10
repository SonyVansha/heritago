

<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->

    <!-- Navigation -->
    <!-- <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav> -->

    <!-- Pages/Content -->
    <!-- <NuxtPage /> -->

    <!-- Pages Layout -->
     <NuxtLayout :name="'custom'">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
