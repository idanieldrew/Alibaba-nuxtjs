<template>
  <nav class="bg-gray-50 shadow-md p-5">
    <div class="flex container mx-auto w-full justify-evenly">
      <div class="logo w-1/6">
        <span class="font-sans">alibaba.ir</span>
      </div>
      <div class="select flex w-4/6">
        <NavLink to="/flight" body="پرواز" />
        <NavLink to="/train" body="قطار" />
        <NavLink to="/bus" body="اتوبوس" />
        <NavLink to="/tour" body="تور" />
        <NavLink to="/hotel" body="هتل" />
        <NavLink to="/accomandation" body="ویلا و اقامتگاه" />
        <NavLink to="/" body="بیشتر" />
      </div>
      <div class="auth w-2/6 flex">
        <div class="bill flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0,0h24v24H0V0z" fill="none" />
            <g>
              <path
                d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"
              />
              <rect height="2" width="6" x="9" y="7" />
              <rect height="2" width="2" x="16" y="7" />
              <rect height="2" width="6" x="9" y="10" />
              <rect height="2" width="2" x="16" y="10" />
            </g>
          </svg>
          <button class="mx-2">پیگیری خرید</button>
        </div>
        <div class="login flex mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
          <button class="mx-2">ورود یا ثبت نام</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLink from "./Nav-link";

export default {
  name: "Navbar",
  components: { NavLink },
};
</script>

<style scoped>
</style>
