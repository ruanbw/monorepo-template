<script setup lang="ts">
import { toggleDark } from '@/logics'
</script>

<template>
  <div class="analytics">
    <button type="primary" @click="toggleDark">
      toggle dark mode
    </button>
  </div>
</template>

<style scoped></style>
