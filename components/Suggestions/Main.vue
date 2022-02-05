<template>
  <div class="flex container mx-auto w-7/12">
    <Suggestion class="ml-1.5" />
    <Suggestion class="mr-5" />
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
