<template>
  <div>
    <li class="mx-10 flex flex-col">
      <nuxt-link :to="Url">
       <slot></slot>
        <span class="flex justify-center">{{ Content }}</span>
      </nuxt-link>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    Url: {
      required: true,
      type: String,
    },
    Content: {
      required: true,
      type: String,
    },
  },
};
</script>
