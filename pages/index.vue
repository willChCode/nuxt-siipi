<template>
  <div
    class="w-full h-screen border-2 border-red-500 flex flex-col justify-center items-center gap-4"
  >
    <Login />
    <NuxtLink class="cardtest bg-blue-500" to="/sede">SEDE</NuxtLink>
    <NuxtLink class="cardtest bg-green-500" to="/marca">MARCA</NuxtLink>
    <NuxtLink class="cardtest bg-red-500" to="/punto">PUNTO</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
});
import Login from '../components/Login.vue';
</script>

<style scoped>
.cardtest {
  @apply card p-4 rounded-none min-w-[100px] text-center text-white font-bold;
}
</style>
