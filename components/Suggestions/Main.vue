<template>
  <div class="flex my-10 container mx-auto w-8/12">
    <Suggestion class="mx-5" />
    <Suggestion class="mx-5" />
  </div>
</template>

<script>
import Suggestion from "./Suggestion.vue";
export default {
  name: "MainSuggestion",

  components: {
    Suggestion,
  },
};
</script>
