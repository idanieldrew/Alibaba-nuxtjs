<template>
  <div class="landing-page divide-x-0">
    <div class="relative">
      <Hero />
      <Homepage class="absolute" />
    </div>
    <TabView />
    <Main-Suggestion />
    <Question />
  </div>
</template>

<script>
import Hero from "../components/Hero/Hero";
import Homepage from "../components/Homepage/Homepage";
import TabView from "../components/Homepage/Tab-view/Tab-view.vue";
import MainSuggestion from "@/components/Suggestions/Main.vue";
import Question from "@/components/Questions/All.vue";

export default {
  name: "index",
  components: {
    Hero,
    Homepage,
    TabView,
    MainSuggestion,
    Question,
  },
};
</script>
