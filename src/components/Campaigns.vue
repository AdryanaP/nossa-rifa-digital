<template>
  <div class="mt-8">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mb-20">
        <div class="min-w-0 flex-1">
          <div class="flex items-center">
            <div>
              <div class="flex items-center">
                <h1
                  class="text-2xl leading-7 text-gray-900 sm:truncate sm:leading-9"
                >
                  Olá, <span class="font-semibold">Fulana de Tal</span>!
                </h1>
              </div>
            </div>
          </div>
          <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <button
              type="button"
              class="inline-flex items-center uppercase rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              @click="newCampaign"
            >
              <TicketIcon
                class="h-4 w-4 inline-block mr-2"
                aria-hidden="true"
              />
              Criar Campanha
            </button>
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
              <p>Teste 5</p>
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
    </div>
  </div>
</template>

<script>
import {
  TicketIcon,
  EyeIcon,
  EllipsisVerticalIcon,
} from "@heroicons/vue/20/solid";

export default {
  name: "CampaignsVue",
  components: {
    TicketIcon,
    EyeIcon,
    EllipsisVerticalIcon,
  },
  data() {
    return {
      cards: [
        {
          name: "Account balance",
          href: "#",
          amount: "$30,659.45",
        },
      ],
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
  },
};
</script>

<style></style>
