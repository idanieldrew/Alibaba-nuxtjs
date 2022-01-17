<template>
<div>
  <header>
    <Navbar/>
  </header>
  <nuxt-child />
</div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar";

export default {
  name: "default",
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
