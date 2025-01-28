<!-- SinglePageView.vue -->

<template>
  <div class="tour-details">
    <div v-if="tour">
      <img
        :src="require(`@/assets/img/${tour.image}`)"
        alt="Tour Image"
        class="tour-image"
      />
      <h2>{{ tour.title }}</h2>
      <p>{{ tour.description }}</p>
    </div>
    <div v-else>
      <p>Тур не найден.</p>
    </div>
  </div>
</template>

<script>
import { tours } from "@/store/tours";

export default {
  name: "SinglePageView",
  props: ["slug"], // Получаем slug из маршрута
  data() {
    return {
      tour: null,
    };
  },
  created() {
    this.loadTour();
  },
  methods: {
    loadTour() {
      // Ищем тур по slug
      this.tour = tours.find((tour) => tour.slug === this.slug);
      if (!this.tour) {
        this.$router.push("/"); // Если тур не найден, перенаправляем на главную
      }
    },
  },
};
</script>

<style scoped>
/* Стили для страницы с подробным туром */
.tour-image {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}
</style>
