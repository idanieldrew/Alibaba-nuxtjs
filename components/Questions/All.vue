<template>
  <div>
    <h1 class="container mx-auto w-7/12 text-2xl font-semibold">پرسش های شما</h1>
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
  </div>
</template>

<script>
import Question from "./Question.vue";
export default {
  components: {
    Question,
  },
};
</script>
