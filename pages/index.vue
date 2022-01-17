<template>
  <div class="landing-page divide-x-0">
    <div class="relative">
      <Hero />
      <Homepage class="absolute"/>
    </div>
  </div>
</template>

<script>

import Hero from "../components/Hero/Hero";
import Homepage from "../components/Homepage/Homepage";

export default {
  name: 'index',
  components: {
    Hero,
    Homepage
  }
};
</script>
