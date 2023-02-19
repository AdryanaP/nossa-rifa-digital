<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <img src="@/assets/logo.png" alt="logo" class="w-44" />
    <h1 class="text-lg md:text-2xl font-semibold my-8">Faça seu cadastro</h1>
    <form class="flex flex-col gap-6 md:w-96">
      <div
        class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <label
          for="name"
          class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >Nome Completo</label
        >
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          autocomplete="name"
          class="block outline-none w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        />
      </div>
      <div
        class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <label
          for="email"
          class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >E-mail</label
        >
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          autocomplete="email"
          class="block outline-none w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="exemplo@email.com"
        />
      </div>
      <div
        class="pr-10 relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <label
          for="password"
          class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >Senha</label
        >
        <input
          :type="passwordType"
          name="password"
          id="password"
          v-model="password"
          class="block outline-none w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
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
      <div
        class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <label
          for="tel"
          class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >Telefone</label
        >
        <input
          type="tel"
          name="tel"
          id="tel"
          v-model="tel"
          v-mask="'(##) #####-####'"
          autocomplete="tel"
          class="block outline-none w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        />
      </div>
      <!-- <div class="flex gap-2">
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          v-model="rememberMe"
          @click="rememberMeCheck"
        />
        <label for="rememberMe">Lembrar senha</label>
      </div> -->
      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-offset-0"
      >
        Cadastrar
      </button>
      <router-link to="/login" class="text-center"
        >Já possui uma conta?
        <span class="border-b-2 border-primary">Faça Login</span></router-link
      >
    </form>
  </div>
</template>

<script>
import { EyeSlashIcon, EyeIcon } from "@heroicons/vue/20/solid";
import { mask } from "vue-the-mask";

export default {
  name: "AboutVue",
  components: { EyeSlashIcon, EyeIcon },
  directives: { mask },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      tel: "",
      passwordHidden: true,
      passwordType: "password",
    };
  },
  methods: {
    tooglePassword() {
      this.passwordHidden = !this.passwordHidden;
      if (this.passwordHidden) {
        this.passwordType = "password";
      } else {
        this.passwordType = "text";
      }
    },
  },
};
</script>
