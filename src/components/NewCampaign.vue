<template>
  <div>
    <div class="mx-auto max-w-6xl py-10 md:py-20">
      <h2
        class="text-3xl font-bold leading-6 text-gray-900 flex gap-2 items-center mb-10 px-8 md:px-0"
      >
        <TicketIcon class="h-8 w-8" />
        Criar Campanha
      </h2>
      <form class="flex flex-col gap-6 px-8 md:px-0">
        <div>
          <label for="name" class="block font-medium text-sm"
            >Nome da campanha</label
          >
          <div class="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="Nome da sua rifa digital"
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <Listbox as="div" v-model="selectedTickets">
          <ListboxLabel class="font-medium text-sm flex gap-1 items-center"
            >Quantidade de bilhetes <InformationCircleIcon class="h-4 w-4"
          /></ListboxLabel>
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none sm:text-sm"
            >
              <span class="block truncate">{{ selectedTickets.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm font-semibold"
              >
                <ListboxOption
                  as="template"
                  v-for="amount in amountTickets"
                  :key="amount.id"
                  :value="amount"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ amount.name }}</span
                    >

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <Listbox as="div" v-model="selectedCategory">
          <ListboxLabel class="block font-medium text-sm"
            >Categoria</ListboxLabel
          >
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none sm:text-sm"
            >
              <span class="block truncate">{{ selectedCategory.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm font-semibold"
              >
                <ListboxOption
                  as="template"
                  v-for="category in categories"
                  :key="category.id"
                  :value="category"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ category.name }}</span
                    >

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <div>
          <label
            for="ticketPrice"
            class="block text-sm font-medium text-gray-700"
            >Preço do bilhete</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center font-semibold rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
              >R$</span
            >
            <input
              id="ticketPrice"
              name="ticketPrice"
              type="tel"
              required=""
              v-mask="'###.###.###.###.###.###.###.###.###.###,##'"
              placeholder="0,00"
              class="block w-full appearance-none rounded-r-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <Listbox as="div" v-model="selectedHowRaffle">
          <ListboxLabel class="block font-medium text-sm"
            >Por onde será feito o sorteio?</ListboxLabel
          >
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none sm:text-sm"
            >
              <span class="block truncate">{{ selectedHowRaffle.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm font-semibold"
              >
                <ListboxOption
                  as="template"
                  v-for="raffle in howRaffle"
                  :key="raffle.id"
                  :value="raffle"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ raffle.name }}</span
                    >

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <div>
          <label for="name" class="block font-medium text-sm"
            >Telefone para suporte</label
          >

          <div class="flex items-center gap-2 mt-1 w-full">
            <Listbox as="div" v-model="selectedCountry">
              <div class="relative">
                <ListboxButton
                  class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none sm:text-sm"
                >
                  <span class="inline-flex w-full truncate">
                    <span class="truncate">{{ selectedCountry.acronym }}</span>
                    <span class="ml-2 truncate text-gray-500">{{
                      selectedCountry.name
                    }}</span>
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <ChevronUpDownIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-10 mt-1 max-h-44 w-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      as="template"
                      v-for="country in countries"
                      :key="country.acronym"
                      :value="country"
                      v-slot="{ active, selected }"
                    >
                      <li
                        :class="[
                          active ? 'text-white bg-primary' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9',
                        ]"
                      >
                        <div class="grid grid-cols-4">
                          <span
                            :class="[
                              selected ? 'font-semibold' : 'font-normal',
                              'truncate',
                            ]"
                            >{{ country.acronym }}</span
                          >
                          <span
                            :class="[
                              active ? 'text-white' : 'text-gray-500',
                              'ml-2 truncate col-span-3',
                            ]"
                            >{{ country.name }}</span
                          >
                        </div>

                        <span
                          v-if="selected"
                          :class="[
                            active ? 'text-white' : 'text-primary',
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                          ]"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>

            <div class="w-full">
              <input
                id="tel"
                name="tel"
                type="tel"
                required=""
                v-mask="'(##) #####-####'"
                placeholder="Telefone / WhatsApp"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
        </div>
      </form>

      <div class="bg-white shadow my-8 lg:border-t lg:border-gray-200">
        <div class="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div class="py-6 sm:flex sm:items-center sm:justify-between">
            <div class="min-w-0 flex-1">
              <div class="flex items-center">
                <div>
                  <div class="flex items-center">
                    <h1
                      class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9"
                    >
                      Taxas de publicação
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 sm:mt-0 flex space-x-3 md:mt-0 md:ml-4">
              <button
                type="button"
                class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Ver taxas
              </button>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 border-t py-4">
            <p class="justify-self-start text-sm font-medium">
              Taxa de publicação
            </p>
            <p class="justify-self-end text-red-600 font-medium">- R$ 7,00</p>

            <p class="justify-self-start text-sm font-medium">
              Arrecadação estimada
            </p>
            <p class="justify-self-end text-green-600 font-medium">+ R$ 0,00</p>
          </div>
        </div>
      </div>

      <div class="px-8 md:px-0">
        <button
          class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-primary text-white px-3 py-2 text-sm font-medium shadow-sm focus:outline-none"
          type="submit"
        >
          Prosseguir
          <ArrowRightIcon class="h-5 w-5" aria-hidden="true"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import {
  CheckIcon,
  ChevronUpDownIcon,
  TicketIcon,
  ArrowRightIcon,
} from "@heroicons/vue/20/solid";

import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import { mask } from "vue-the-mask";

export default {
  name: "NewCampaignVue",
  directives: { mask },
  components: {
    TicketIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    ArrowRightIcon,
    InformationCircleIcon,
    CheckIcon,
    ChevronUpDownIcon,
  },
  data() {
    return {
      amountTickets: [
        { id: 1, name: "25 bilhetes - (00 à 24)" },
        { id: 2, name: "50 bilhetes - (00 à 49)" },
        { id: 3, name: "100 bilhetes - (00 à 99)" },
        { id: 4, name: "200 bilhetes - (00 à 199)" },
        { id: 5, name: "300 bilhetes - (00 à 299)" },
        { id: 6, name: "400 bilhetes - (00 à 399)" },
        { id: 7, name: "500 bilhetes - (00 à 499)" },
        { id: 8, name: "600 bilhetes - (00 à 599)" },
        { id: 9, name: "700 bilhetes - (00 à 699)" },
        { id: 10, name: "800 bilhetes - (00 à 799)" },
        { id: 11, name: "900 bilhetes - (00 à 899)" },
        { id: 12, name: "1.000 bilhetes - (00 à 999)" },
        { id: 13, name: "2.000 bilhetes - (00 à 1.999)" },
        { id: 14, name: "3.000 bilhetes - (00 à 2.999)" },
        { id: 15, name: "4.000 bilhetes - (00 à 3.999)" },
        { id: 16, name: "5.000 bilhetes - (00 à 4.999)" },
        { id: 17, name: "6.000 bilhetes - (00 à 5.999)" },
        { id: 18, name: "10.000 bilhetes - (00 à 9.999)" },
        { id: 19, name: "20.000 bilhetes - (00 à 19.999)" },
        { id: 20, name: "30.000 bilhetes - (00 à 29.999)" },
        { id: 21, name: "50.000 bilhetes - (00 à 49.999)" },
        { id: 22, name: "100.000 bilhetes - (00 à 99.999)" },
      ],
      categories: [
        { id: 1, name: "Beneficente" },
        { id: 2, name: "Ação entre amigos" },
        { id: 3, name: "Eletrônicos" },
        { id: 4, name: "Carros" },
        { id: 5, name: "Motos" },
        { id: 6, name: "Esportes" },
        { id: 7, name: "Beleza" },
        { id: 8, name: "Infantil" },
        { id: 9, name: "Serviços" },
        { id: 10, name: "Imóveis" },
        { id: 12, name: "Agro" },
        { id: 13, name: "Outros" },
      ],
      howRaffle: [
        { id: 1, name: "Sorteador.com.br" },
        { id: 2, name: "Live no Instagram" },
        { id: 3, name: "Live no Youtube" },
        { id: 4, name: "Live no TikTok" },
        { id: 5, name: "Loteria Federal" },
        { id: 6, name: "Outros" },
      ],
      countries: [
        { acronym: "BR", name: "Brasil" },
        { acronym: "US", name: "Estados Unidos" },
        { acronym: "AR", name: "Argentina" },
        { acronym: "ES", name: "Espanha" },
        { acronym: "DE", name: "Alemanha" },
        { acronym: "PE", name: "Peru" },
        { acronym: "MX", name: "México" },
        { acronym: "CL", name: "Chile" },
        { acronym: "CO", name: "Colômbia" },
        { acronym: "PT", name: "Portugal" },
        { acronym: "BO", name: "Bolívia" },
        { acronym: "PY", name: "Paraguai" },
        { acronym: "UY", name: "Urugai" },
        { acronym: "BW", name: "Botsuana" },
        { acronym: "JP", name: "Japão" },
        { acronym: "IT", name: "Itália" },
        { acronym: "GB", name: "Reino Unido" },
      ],

      selectedTickets: { name: "Escolha uma opção" },
      selectedCategory: { name: "Escolha uma opção" },
      selectedHowRaffle: { name: "Escolha uma opção" },
      selectedCountry: { acronym: "BR", name: "Brasil" },
    };
  },
};
</script>
