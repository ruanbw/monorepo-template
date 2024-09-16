<script setup lang="ts">
import { BasicAside, BasicHeader, BasicLayout, BasicMain } from './components'

defineOptions({
  name: 'BasicLayout',
})
</script>

<template>
  <BasicLayout>
    <BasicAside>
      aside
    </BasicAside>
    <BasicLayout class="flex-col">
      <BasicHeader>
        header
      </BasicHeader>
      <BasicMain>
        <RouterView />
      </BasicMain>
    </BasicLayout>
  </BasicLayout>
</template>

<style scoped></style>
