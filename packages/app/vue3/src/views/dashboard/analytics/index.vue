<script setup lang="ts">
import { toggleDark } from '@/logics'
import { Button } from '@lon/ui'
</script>

<template>
  <div class="analytics">
    <div>123</div>
    <Button @click="toggleDark">
      toggle dark mode
    </Button>
  </div>
</template>

<style scoped></style>
