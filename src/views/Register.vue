<template>
  <div class="flex flex-col justify-center items-center h-screen bg-gray-50">
    <img src="@/assets/logo.png" alt="logo" class="w-44" />
    <form class="flex flex-col gap-6 my-10 px-8 sm:px-32 md:p-0 w-full md:w-96">
      <div
        class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <label
          for="name"
          class="absolute -top-2 left-2 -mt-px inline-block bg-gray-50 px-1 text-xs font-medium text-gray-900"
          >Nome Completo</label
        >
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          autocomplete="name"
          required
          class="block outline-none w-full border-0 p-0 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        />
      </div>
      <div
        class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <label
          for="email"
          class="absolute -top-2 left-2 -mt-px inline-block bg-gray-50 px-1 text-xs font-medium text-gray-900"
          >E-mail</label
        >
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          autocomplete="email"
          required
          class="block outline-none w-full border-0 p-0 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="exemplo@email.com"
        />
      </div>

      <div
        class="pr-10 relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
      >
        <label
          for="password"
          class="absolute -top-2 left-2 -mt-px inline-block bg-gray-50 px-1 text-xs font-medium text-gray-900"
          >Senha</label
        >
        <input
          :type="passwordType"
          name="password"
          id="password"
          v-model="password"
          required
          class="block outline-none w-full border-0 p-0 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
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
          class="absolute -top-2 left-2 -mt-px inline-block bg-gray-50 px-1 text-xs font-medium text-gray-900"
          >Telefone</label
        >
        <input
          type="tel"
          name="tel"
          id="tel"
          v-model="tel"
          v-mask="'(##) #####-####'"
          autocomplete="tel"
          required
          class="block outline-none w-full border-0 p-0 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        />
      </div>
      <button
        @click="registerUser"
        type="button"
        class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-offset-0"
      >
        Cadastrar
      </button>
      <router-link to="/login" class="text-center"
        >Já possui uma conta?
        <span class="border-b-2 border-primary">Faça Login</span></router-link
      >
    </form>
    <AlertError v-if="hasError" :data="msgError" class=" transition-opacity ease-in duration-700 animate-fade"/>
  </div>
</template>

<script>
import { EyeSlashIcon, EyeIcon } from "@heroicons/vue/20/solid";
import { mask } from "vue-the-mask";
// import router from "@/router";
import axios from "axios";
// import Home from "@/views/Home.vue";
import AlertError from "@/components/AlertError.vue";

export default {
  name: "AboutVue",
  components: { EyeSlashIcon, EyeIcon, AlertError },
  directives: { mask },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      tel: "",
      passwordHidden: true,
      passwordType: "password",
      msgError: "",
      hasError: false,
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
    registerUser() {
      this.msgError = "";
      this.hasError = false;
      axios
        .post(
          "https://api.nossarifadigital.digital/v1/auth/register",
          {
            name: this.name,
            email: this.email,
            whatsapp: `${this.tel}`,
            password: this.password,
            device_name: "web",
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          // router.push({
          //   path: "/",
          //   name: "Home",
          //   component: Home,
          // });
        })

        .catch((error) => {
          this.msgError = error.response.data.message;
          this.hasError = true;
          setTimeout(() => {
            this.hasError = false;
          }, 5000);
        });
    },
  },
};
</script>
