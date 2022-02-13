<template>
  <div
    class="
      my-5
      container
      w-7/12
      mx-auto
      bg-gray-50
      rounded-md
      shadow-lg
      border border-gray-200
    "
  >
    <div class="flex justify-between w-full p-3">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
          />
        </svg>
        <span class="px-2 font-bold text-lg">
          چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
        </span>
      </div>
      <div>
        <button type="button" @click="doShow()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            :class="{ hidden: show }"
          >
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            :class="{ hidden: !show }"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
          </svg>
        </button>
      </div>
    </div>
    <Answer v-show="show" />
  </div>
</template>

<script>
import Answer from "./answer.vue";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    Answer,
  },

  methods: {
    doShow() {
      return (this.show = !this.show);
    },
  },
};
</script>
