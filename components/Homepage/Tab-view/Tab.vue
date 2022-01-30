<template>
  <div class="flex w-full justify-start">
    <span @click="open">
      <button type="button" class="flex">
        <span class="text-sm">{{ travelType }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>
      <div class="z-20 rounded-2xl border border-gray-20" v-show="isOpen">
        <div>
          <ul class="px-4 py-2">
            <li
              class="border-b-2 border-blue-100 py-2 text-blue-500 text-center"
            >
              <nuxt-link to="/">
                <span> یک طرفه </span>
              </nuxt-link>
            </li>
            <li class="py-2 text-center">
              <nuxt-link to="/">
                <span> رفت و برگشت </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false,
      type: ["single-way", "sweep"],
    };
  },

  computed: {
    travelType() {
      if (this.type[0] == "single-way") {
        return "یک طرفه";
      } else {
        return "رفت و برگشت";
      }
    },
  },

  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
