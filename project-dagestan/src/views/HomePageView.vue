<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <card-component
          v-for="(tour, index) in tours"
          :key="index"
          :slug="tour.slug"
          :image="require(`@/assets/img/${tour.image}`)"
          :title="tour.title"
          :description="tour.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import { tours } from "@/store/tours";

export default {
  name: "HomePageView",
  components: {
    CardComponent,
  },
  data() {
    return {
      tours, // Массив туров, который будет передаваться в дочерний компонент
    };
  },
};
</script>

<style scoped></style>
