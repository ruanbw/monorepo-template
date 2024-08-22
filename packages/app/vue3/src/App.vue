<script setup lang="ts">
const count = ref(0)

</script>

<template>
  <button @click="count++">
    add
  </button>
  <div class="text-red">
    {{ count }}
  </div>
  <button @click="count--">
    sub
  </button>
</template>

<style scoped></style>
