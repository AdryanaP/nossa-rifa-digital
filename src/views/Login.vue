<template>
  <div class="flex flex-col justify-center items-center h-screen bg-gray-50">
    <img src="@/assets/logo.png" alt="logo" class="w-44" />
    <form class="flex flex-col gap-6 my-10 px-8 md:p-0 w-full md:w-96">
      <div class="isolate -space-y-px rounded-md shadow-sm">
        <div
          class="relative rounded-md rounded-b-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
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
            class="block w-full outline-none border-0 pl-7 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Email"
          />
        </div>
        <div
          class="relative rounded-md rounded-t-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
        >
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <span class="text-gray-500 sm:text-sm"
              ><KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true"
            /></span>
          </div>
          <input
            :type="passwordType"
            name="password"
            id="password"
            v-model="password"
            class="block w-full outline-none border-0 pl-7 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Senha"
          />
          <button
            class="z-50 absolute inset-y-0 right-0 flex items-center pr-3"
            type="button"
            @click="tooglePassword"
          >
            <EyeSlashIcon
              v-if="passwordHidden"
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <EyeIcon v-else class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div class="flex gap-2">
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          v-model="rememberMe"
          @click="rememberMeCheck"
        />
        <label for="rememberMe">Lembrar senha</label>
      </div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-offset-0"
      >
        Entrar
      </button>
      <router-link to="/recuperar-senha" class="text-center"
        >Esqueceu sua senha?</router-link
      >
      <router-link to="/cadastro" class="text-center"
        >Não tem uma conta ainda?
        <span class="border-b-2 border-primary">Registre-se!</span></router-link
      >
    </form>
  </div>
</template>

<script>
import {
  EyeSlashIcon,
  EyeIcon,
  KeyIcon,
  AtSymbolIcon,
} from "@heroicons/vue/20/solid";

export default {
  name: "AboutVue",
  components: { EyeSlashIcon, EyeIcon, KeyIcon, AtSymbolIcon },
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
