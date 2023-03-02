<template>
  <div class="flex flex-col justify-center items-center h-screen bg-gray-50">
    <img src="@/assets/logo.png" alt="logo" class="w-44" />
    <form class="flex flex-col gap-6 my-10 px-8 sm:px-32 md:p-0 w-full md:w-96">
      <div
        class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <span class="text-gray-500 sm:text-sm"
            ><AtSymbolIcon class="h-5 w-5 text-gray-400" aria-hidden="true"
          /></span>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          autocomplete="email"
          class="block outline-none w-full border-0 pl-7 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Email"
        />
      </div>

      <div
        class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <span class="text-gray-500 sm:text-sm"><KeyIcon class="w-5" /></span>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          autocomplete="password"
          class="block outline-none w-full border-0 pl-7 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Nova senha"
        />
      </div>

      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-offset-0"
      >
        Trocar senha
      </button>
      <router-link to="/login" class="text-center"
        >Deseja fazer login?
        <span class="border-b-2 border-primary">Clique aqui!</span></router-link
      >
    </form>
  </div>
</template>

<script>
import { KeyIcon, AtSymbolIcon } from "@heroicons/vue/20/solid";

export default {
  name: "ResetPassword",
  components: { KeyIcon, AtSymbolIcon },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      passwordHidden: true,
      passwordType: "password",
    };
  },
  methods: {
    rememberMeCheck() {
      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);
    },
    tooglePassword() {
      this.passwordHidden = !this.passwordHidden;
      if (this.passwordHidden) {
        this.passwordType = "password";
      } else {
        this.passwordType = "text";
      }
    },
  },
  created() {
    this.email = localStorage.getItem("email");
    this.password = localStorage.getItem("password");
  },
};
</script>
