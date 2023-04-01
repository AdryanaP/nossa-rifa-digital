<template>
  <div class="mt-8 flex flex-col gap-8">
    <div
      class="mx-4 lg:mx:auto max-w-6xl p-4 sm:p-6 lg:p-8 bg-white shadow-card rounded-lg"
    >
      <h1 class="text-lg font-medium">Redes Sociais</h1>
      <form class="my-4 flex flex-col gap-8">
        <div class="space-y-8">
          <div>
            <label for="wpp" class="block font-medium text-sm"
              >Grupo no WhatsApp</label
            >
            <div class="mt-1">
              <input
                id="wpp"
                name="wpp"
                v-model="socialMedias.whatsapp"
                type="text"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label for="telegram" class="block font-medium text-sm"
              >Grupo no Telegram</label
            >
            <div class="mt-1">
              <input
                id="telegram"
                name="telegram"
                v-model="socialMedias.telegram"
                type="text"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="instagram" class="block font-medium text-sm"
              >Perfil no Instagram</label
            >
            <div class="mt-1">
              <input
                id="instagram"
                name="instagram"
                v-model="socialMedias.instagram"
                type="text"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="tiktok" class="block font-medium text-sm"
              >Perfil no Tiktok</label
            >
            <div class="mt-1">
              <input
                id="tiktok"
                name="tiktok"
                v-model="socialMedias.tiktok"
                type="text"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label for="youtube" class="block font-medium text-sm"
              >Canal no Youtube</label
            >
            <div class="mt-1">
              <input
                id="youtube"
                name="youtube"
                v-model="socialMedias.youtube"
                type="text"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div class="text-right">
          <button
            class="rounded-md bg-black text-white px-4 py-3 text-sm font-medium shadow-sm focus:outline-none"
            type="button"
            @click="updateSocials"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
    <AlertError
      v-if="hasError"
      :data="msgError"
      class="transition-opacity ease-in duration-700 animate-fade"
    />
  </div>
</template>

<script>
import axios from "axios";
import AlertError from "@/components/AlertError.vue";

export default {
  name: "MyAccount",
  components: { AlertError },
  data() {
    return {
      socialMedias: {},
      msgError: "",
      hasError: false,
    };
  },
  methods: {
    updateSocials() {
      const token = sessionStorage.getItem("token");

      axios
        .post(
          "https://api.nossarifadigital.digital/v1/resources/settings/social",
          {
            social_whatsapp: this.socialMedias.whatsapp,
            social_telegram: this.socialMedias.telegram,
            social_instagram: this.socialMedias.instagram,
            social_tiktok: this.socialMedias.tiktok,
            social_youtube: this.socialMedias.youtube,
            device_name: "web",
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          window.history.go();
        })

        .catch((error) => {
          this.msgError = error.response.data.message;
          this.hasError = true;
          setTimeout(() => {
            this.hasError = false;
          }, 6000);
        });
    },
  },
  created() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    this.socialMedias = user.social;
  },
};
</script>

<style scopped>
.shadow-card {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
</style>
