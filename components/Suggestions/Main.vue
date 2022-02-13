<template>
  <div class="grid grid-cols-2 gap-4 w-7/12 mx-auto container py-16">
    <Plus />
    <SafarAsan />
  </div>
</template>

<script>
import Plus from "./Suggestion/plus.vue";
import SafarAsan from "./Suggestion/safar-asan.vue";
export default {
  name: "MainSuggestion",

  components: {
    Plus,
    SafarAsan,
  },
};
</script>
