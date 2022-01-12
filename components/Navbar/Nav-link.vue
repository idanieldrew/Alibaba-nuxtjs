<template>
  <ul class="px-5">
    <li>
      <div class="links border-r-2 border-gray-300">
        <nuxt-link :to="to" class="p-2 text-gray-700 hover:text-gray-500">
          <span>{{ body }}</span>
        </nuxt-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Nav-link",

  props: {
    body: {
      required: true,
      type: String,
    },

    to: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
</style>
