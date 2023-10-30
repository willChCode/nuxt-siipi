<template>
  <header>
    <nav class="navbar border-2 h-[10vh]">
      <div class="navbar-start uppercase font-bold text-2xl">
        {{ path.replace(/^\//, '') }}
      </div>
      <div class="navbar-center">NOMBRE</div>
      <div class="navbar-end">
        <div className="avatar online">
          <div className="w-[60px] rounded-full">
            <img
              src="https://i.pinimg.com/564x/44/2e/46/442e4647bc3188137798e0c67ebbd4b9.jpg"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main class="p-4">
    <slot></slot>
  </main>
  <footer>footer</footer>
</template>
<script setup>
import { useRoute } from 'vue-router';

const { path } = useRoute();
console.log(path);
</script>
