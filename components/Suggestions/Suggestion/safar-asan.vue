<template>
  <Suggestion>
    <div class="w-full flex">
      <div class="my-auto px-9 relative">
        <span
          class="bg-green-300 rounded-md mx-auto left-16 px-3 absolute text-xs"
          >جدید</span
        >
        <img
          src="https://cdn.alibaba.ir/h/desktop/assets/icons/alibaba-plus-logo-gold-4bd34e37.svg"
          alt="alibaba-plus"
        />
      </div>
      <div class="flex py-5 w-full">
        <p class="leading-normal pl-14 block">
          <strong>علی‌بابا پلاس؛ جمع تجربه‌های سفر</strong>
          <br />
          <span class="text-sm">
            به علی‌بابا پلاس بیایید تا هم تجربه‌های سفرهایتان را در اختیار
            هزاران ‌هزار مسافر قرار دهید، هم تجربه بقیه را بخوانید.
          </span>
        </p>
      </div>
    </div>
    <div class="flex mb-2">
      <nuxt-link
        to="plus"
        class="text-sm text-center text-white bg-black rounded-3xl mx-auto"
      >
        <span class="flex w-full justify-center justify-items-center">
          <span class="my-auto w-auto pr-3 font-bold">
            رفتن به علی بابا پلاس
          </span>
          <span class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#F8F8FF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
              />
            </svg>
          </span>
        </span>
      </nuxt-link>
    </div>
  </Suggestion>
</template>

<script>
import Suggestion from "../Suggestion.vue";
export default {
  components: { Suggestion },
};
</script>
