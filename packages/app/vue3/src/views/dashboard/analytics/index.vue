<script setup lang="ts">
import { toggleDark } from '@/logics'
import { Button, Card } from 'ant-design-vue'
</script>

<template>
  <div class="analytics">
    <div>123</div>
    <Button type="primary" @click="toggleDark">
      toggle dark mode
    </Button>
    <Card v-for="item in 10" class="mb-5">
      <img src="https://picsum.photos/200/300">
    </Card>
  </div>
</template>

<style scoped></style>
