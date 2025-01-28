<template>
  <router-link
    :to="`/tour/${slug}`"
    class="item-wrapper d-flex flex-column mb-4"
  >
    <!-- Используем prop image вместо tour.image -->
    <img :src="image" class="mb-3" alt="Tour image" />
    <h3>{{ title }}</h3>
    <div class="description">
      <p>{{ description }}</p>
      <br />
      <span>Читать далее ...</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: String,
    description: String,
    slug: String,
  },
};
</script>

<style scoped></style>
