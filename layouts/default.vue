
<script lang="ts" setup>
  import NavBar from "../components/layouts/NavBar.vue";
</script>

<template>
  <div class="h-screen">
    <NavBar />
    <slot></slot>
  </div>
</template>