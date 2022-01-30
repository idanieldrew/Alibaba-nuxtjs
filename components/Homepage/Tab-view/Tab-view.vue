<template>
  <div class="tab-view container mx-auto w-7/12 my-10">
    <div>
      <form autocomplete="off">
        <Tab />
        <Select />
      </form>
    </div>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
import Select from "./Select.vue";
export default {
  name: "Tab-view",

  components: {
    Tab,
    Select,
  },
};
</script>

<style scoped>
</style>
