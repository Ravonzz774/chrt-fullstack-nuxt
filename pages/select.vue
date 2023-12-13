<script setup lang="ts">
import { storeToRefs } from "pinia";

const timetable = useTimetableStore();

onMounted(async () => {
  for (let course of timetable.timetable) {
    console.log(course);
  }
});

const updateTimetable = async () => {
  await timetable.fetchTimetable();
};

await updateTimetable();
</script>

<template>
  <div class="w-full h-full p-4">
    <h1 class="font-lg text-2xl mb-10 text-center">Выбор Групп</h1>
    <LayoutGroups></LayoutGroups>
  </div>
</template>

<style scoped></style>
