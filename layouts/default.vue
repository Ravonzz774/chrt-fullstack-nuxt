<script lang="ts" setup></script>

<template>
  <section class="grid h-screen w-screen">
    <LayoutSidebar></LayoutSidebar>
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
