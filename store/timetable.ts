import { defineStore } from "pinia";

export const useTimetableStore = defineStore({
  id: "timetable",
  state: () => ({
    timetable: null,
    isLoading: true,
  }),
  getters: {
    getTimetable: (state) => state,
  },
  actions: {
    async fetchTimetable() {
      if (this.timetable) return;
      const response = await $fetch("/api/timetable");
      this.timetable = JSON.parse(response);
      if (this.timetable !== null) {
        this.isLoading = true;
      }
    },
  },
});
