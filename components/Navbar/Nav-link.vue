<template>
  <ul class=" px-3 py-3 lg:py-0 lg:px-5">
    <li>
      <div class="links border-none">
        <nuxt-link :to="to" class="p-0 lg:p-2 text-gray-700 hover:text-gray-500">
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
