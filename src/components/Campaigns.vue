<template>
  <div class="mt-8">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <div class="min-w-0 flex-1">
          <div class="flex items-center">
            <div>
              <div class="flex flex-col">
                <h1
                  class="text-xl leading-7 text-gray-900 sm:truncate sm:leading-9"
                >
                  <span class="animate-waving">👋🏽</span>
                  Olá, <span class="font-semibold">{{ user?.name }}</span>!
                </h1>
                <p class="text-gray-500 text-sm">
                  Algumas informações relevantes logo abaixo.
                </p>
              </div>
            </div>
          </div>

          <div
            v-if="campaigns.length > 0"
            class="my-6 flex justify-center sm:justify-start space-x-3 mb-8"
          >
            <button
              type="button"
              class="inline-flex items-center uppercase rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
              @click="newCampaign"
            >
              <TicketIcon
                class="h-4 w-4 inline-block mr-2"
                aria-hidden="true"
              />
              Criar Campanha
            </button>
          </div>

          <div class="flex items-center gap-4 bg-black rounded-md px-6 py-3 my-4">
            <ExclamationTriangleIcon class="w-20 h-20 md:w-16 md:h-16 lg:w-10 lg:h-10 text-yellow-500" />
            <p class="text-white">
              Você ainda não possui nenhum meio de pagamento para receber o
              valor das vendas.
              <button class="font-medium inline-block" @click="goConfig">
                Clique aqui para configurar!
              </button>
            </p>
          </div>

        </div>
      </div>
      <h2 class="text-lg font-medium leading-6 text-gray-900">
        <TicketIcon
          class="h-6 w-6 inline-block mr-1"
          aria-hidden="true"
        />Minhas Campanhas
      </h2>
      <div class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <!-- Card -->
        <div
          v-for="campaign in campaigns"
          :key="campaign.id"
          :class="[
            campaign.paid ? 'border-transparent' : 'border-red-500',
            'overflow-hidden rounded-2xl bg-white shadow border',
          ]"
        >
          <img
            src="@/assets/pessoas-em-show-com-textura-de-camada-de-fumaca.jpg"
            alt="imagem cover"
            class="h-28 w-full object-cover object-center"
          />

          <div class="m-4">
            <div class="flex justify-between items-center">
              <p>{{ campaign.name }}</p>
              <button class="rounded-lg p-2 bg-gray-700">
                <EllipsisVerticalIcon
                  class="h-4 w-4 text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-2 mt-4">
              <button
                type="button"
                class="inline-flex items-center justify-center gap-3 rounded-lg border bg-gray-700 border-gray-300 px-4 py-2 text-sm font-medium text-white uppercase shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <TicketIcon class="h-4 w-4 text-white" />
                Publicar
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center gap-3 rounded-lg border bg-gray-700 border-gray-300 px-4 py-2 text-sm font-medium text-white uppercase shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <EyeIcon class="h-4 w-4 text-white" />
                Visualizar Demonstração
              </button>
            </div>
          </div>
          <div
            v-if="!campaign.paid"
            class="bg-red-500 flex flex-col items-center p-2"
          >
            <p class="text-white font-medium">Faça o pagamento em até</p>
            <p class="text-white">
              2 dias e 23 horas e 21 minutos e 33 segundos
            </p>
          </div>
        </div>
      </div>
      <div v-if="campaigns.length === 0" class="mt-4">
        <div
          class="bg-white w-full rounded-lg border border-gray-200 shadow-sm py-6 flex flex-col justify-center items-center gap-4"
        >
          <FaceFrownIcon class="w-16 h-16" aria-hidden="true" />
          <p class="text-sm">Não há Campanhas</p>
          <button
            type="button"
            class="inline-flex w-fit items-center uppercase rounded-md bg-black px-4 py-2 text-white font-semibold shadow-sm focus:outline-none"
            @click="newCampaign"
          >
            <TicketIcon class="h-4 w-4 inline-block mr-2" aria-hidden="true" />
            Criar Campanha
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TicketIcon,
  EyeIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/20/solid";
import router from "@/router";
import Settings from "@/views/Settings.vue";

export default {
  name: "CampaignsVue",
  components: {
    TicketIcon,
    EyeIcon,
    EllipsisVerticalIcon,
    FaceFrownIcon,
    ExclamationTriangleIcon,
  },
  data() {
    return {
      campaigns: [
        {
          name: "Teste",
          img: "",
          id: 1,
        },
        {
          name: "Teste 2",
          img: "",
          id: 2,
        },
        {
          name: "Teste 3",
          img: "",
          id: 3,
        },
      ],
      user: "",
    };
  },
  computed: {
    campaign() {
      return this.$store.state.campaign;
    },
  },
  methods: {
    newCampaign() {
      this.$store.commit("openNewCampaign");
    },
    goConfig() {
      this.$store.commit("openPayment");
      router.push({
        path: "/configuracoes",
        name: "Settings",
        component: Settings,
      });
    },
  },

  created() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }
};
</script>

<style>
.animate-waving {
  animation: waving-hand 2s linear infinite;
}
</style>
