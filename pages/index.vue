
<script setup lang="ts">
  useHead({
    script: [
      {
        src: 
        'https://kit.fontawesome.com/275a3cc349.js', 
        crossorigin:'anonymous',
        defer: true
      }
    ]
  })
</script>

<template>
    <div>
      <h1>Welcome to the index page</h1>
      <NuxtLink to="about">
        About Page
    </NuxtLink>
    </div>
</template>