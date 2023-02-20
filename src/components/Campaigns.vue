<template>
  <div class="mt-8">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-lg font-medium leading-6 text-gray-900">Campanhas</h2>
      <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card -->
        <div
          v-for="card in cards"
          :key="card.name"
          class="overflow-hidden rounded-lg bg-white shadow"
        >
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <component
                  :is="card.icon"
                  class="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="truncate text-sm font-medium text-gray-500">
                    {{ card.name }}
                  </dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">
                      {{ card.amount }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <a
                :href="card.href"
                class="font-medium text-cyan-700 hover:text-cyan-900"
                >View all</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TicketIcon, ScaleIcon } from "@heroicons/vue/24/outline";

export default {
  name: "CampaignsVue",
  components: {
    TicketIcon,
    ScaleIcon,
  },
  data() {
    return {
      cards: [
        {
          name: "Account balance",
          href: "#",
          icon: ScaleIcon,
          amount: "$30,659.45",
        },
      ],
    };
  },
};
</script>

<style></style>
