<template>
  <div>
    <div class="mx-auto max-w-6xl py-10 md:py-20">
      <div class="flex items-center justify-between mb-10 px-8 md:px-0">
        <h2
          class="text-2xl lg:text-3xl font-bold leading-6 text-gray-900 flex gap-2 items-center"
        >
          <PencilIcon class="h-8 w-8" />
          Editando: Nome da Campanha
        </h2>
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <EyeIcon class="h-4 w-4" />
        </button>
      </div>
      <form class="flex flex-col gap-6 px-8 md:px-0">
        <div>
          <label for="name" class="font-medium text-sm flex items-center gap-1"
            >Nome
            <span title="Nome da sua campanha">
              <InformationCircleIcon class="h-4 w-4" />
            </span>
          </label>
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
            >Quantidade de bilhetes
          </ListboxLabel>
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
          <ListboxLabel class="font-medium text-sm flex items-center gap-1"
            >Categoria
            <span title="Categoria da sua campanha">
              <InformationCircleIcon class="h-4 w-4" />
            </span>
          </ListboxLabel>
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
            for="description"
            class="font-medium text-sm flex items-center gap-1"
            >Descrição / Regulamento
            <span title="Descreva o regulamento da sua campanha">
              <InformationCircleIcon class="h-4 w-4" />
            </span>
          </label>
          <div class="mt-1">
            <textarea
              id="description"
              name="description"
              rows="4"
              cols="50"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            >
            </textarea>
          </div>
        </div>

        <div>
          <div class="flex gap-1">
            <label class="label">Imagens</label>
            <div
              class="inline-flex items-center px-2 py-0.5 default-radius text-xs font-medium bg-green-100 text-green-800"
            >
              <b class="mr-1">Tamanho recomendado: </b> 1365x758 pixels
            </div>
          </div>
          <div class="flex overflow-x-auto gap-4">
            <span class="flex-none bg-white w-full sm:w-[300px] h-28 text-2xl"
              ><label
                class="w-full relative flex cursor-pointer flex-col items-center text-blue-400 justify-center border-4 h-full border-blue-200 hover:text-gray-400 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300"
              >
                <CloudArrowUpIcon class="h-8 w-10 absolute" />
                <input
                  type="file"
                  accept="image/*"
                  multiple=""
                  class="hidden w-full" /></label
            ></span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="ticketsMin" class="text-sm font-medium text-gray-700"
              >Quantidade minima de bilhetes por compra
              <span
                title="Colaborador precisa comprar essa quantidade minima para participar"
              >
                <InformationCircleIcon class="h-4 w-4 inline-block" />
              </span>
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center font-semibold rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
                ><ShoppingCartIcon class="h-4 w-4"
              /></span>
              <input
                id="ticketsMin"
                name="ticketsMin"
                type="number"
                required=""
                placeholder="0"
                class="block w-full appearance-none rounded-r-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="ticketsMax" class="text-sm font-medium text-gray-700"
              >Quantidade máxima de bilhetes por compra

              <span
                title="Colaborador é permitido comprar essa quantidade máxima de bilhetes por cada compra"
              >
                <InformationCircleIcon class="h-4 w-4 inline-block" />
              </span>
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center font-semibold rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
                ><ShoppingCartIcon class="h-4 w-4"
              /></span>
              <input
                id="ticketsMax"
                name="ticketsMax"
                type="number"
                required=""
                placeholder="300"
                class="block w-full appearance-none rounded-r-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
        </div>

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
            >Local do sorteio
            <span
              title="Local onde será realizado o sorteio, o nosso sistema não realiza os sorteios"
            >
              <InformationCircleIcon class="h-4 w-4 inline-block" />
            </span>
          </ListboxLabel>
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
            >Telefone para suporte
            <span
              title="O Suporte ficará disponivel na página da sua campanha onde os colaboradores poderão entrar em contato para tirar dúvidas"
            >
              <InformationCircleIcon class="h-4 w-4 inline-block" /> </span
          ></label>

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

        <div>
          <label for="date" class="block text-sm font-medium text-gray-700"
            >Data de sorteio
            <span
              title="Data que o sorteio ocorrerá, caso informe, os colaboradores poderão fazer reservas até a data e a hora informada."
            >
              <InformationCircleIcon class="h-4 w-4 inline-block" /> </span
          ></label>

          <Switch
            v-model="enabled"
            :class="[
              enabled ? 'bg-primary' : 'bg-gray-200',
              'relative inline-flex h-6 mt-2 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
            ]"
          >
            <span class="sr-only">Use setting</span>
            <span
              :class="[
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
              ]"
            >
              <span
                :class="[
                  enabled
                    ? 'opacity-0 ease-out duration-100'
                    : 'opacity-100 ease-in duration-200',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                ]"
                aria-hidden="true"
              >
                <svg
                  class="h-3 w-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                :class="[
                  enabled
                    ? 'opacity-100 ease-in duration-200'
                    : 'opacity-0 ease-out duration-100',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                ]"
                aria-hidden="true"
              >
                <svg
                  class="h-3 w-3 text-primary"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                  />
                </svg>
              </span>
            </span>
          </Switch>

          <div v-if="enabled">
            <input
              id="date"
              name="date"
              type="datetime-local"
              required=""
              class="block mt-2 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <Listbox as="div" v-model="selectedTimePayment">
          <ListboxLabel class="block font-medium text-sm"
            >Tempo para pagamento
            <span
              title="Tempo que o seu colaborador tem para fazer o pagamento, após esse prazo e o bilhete não for pago ele ficará disponível novamente"
            >
              <InformationCircleIcon class="h-4 w-4 inline-block" /> </span
          ></ListboxLabel>
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none sm:text-sm"
            >
              <span class="block truncate">{{ selectedTimePayment.name }}</span>
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
                  v-for="time in timePayment"
                  :key="time.id"
                  :value="time"
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
                      >{{ time.name }}</span
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
      </form>

      <div class="grid grid-cols-2 gap-2 px-8 md:px-0 mt-6">
        <button
          type="button"
          class="inline-flex items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <TrophyIcon class="h-4 w-4" />
          Editar prêmios
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <BanknotesIcon class="h-4 w-4" />
          Editar promoções
        </button>
      </div>

      <div class="px-8 md:px-0 mt-8">
        <button
          class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-primary text-white px-3 py-2 text-sm font-medium shadow-sm focus:outline-none"
          type="submit"
        >
          Finalizar
          <ArrowRightIcon class="h-5 w-5" aria-hidden="true" />
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
  Switch,
} from "@headlessui/vue";
import {
  CheckIcon,
  ChevronUpDownIcon,
  PencilIcon,
  EyeIcon,
  TrophyIcon,
  BanknotesIcon,
  ArrowRightIcon,
  CloudArrowUpIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/20/solid";

import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import { mask } from "vue-the-mask";

export default {
  name: "NewCampaignVue",
  directives: { mask },
  components: {
    PencilIcon,
    EyeIcon,
    TrophyIcon,
    BanknotesIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Switch,
    ArrowRightIcon,
    ShoppingCartIcon,
    InformationCircleIcon,
    CloudArrowUpIcon,
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

      timePayment: [
        { id: 1, name: "10 Minutos" },
        { id: 2, name: "30 Minutos" },
        { id: 3, name: "1 Hora" },
        { id: 4, name: "3 Horas" },
        { id: 5, name: "1 dia" },
        { id: 6, name: "3 dias" },
        { id: 7, name: "15 dias" },
      ],

      selectedTickets: { name: "Escolha uma opção" },
      selectedCategory: { name: "Escolha uma opção" },
      selectedHowRaffle: { name: "Escolha uma opção" },
      selectedTimePayment: { name: "Escolha uma opção" },
      selectedCountry: { acronym: "BR", name: "Brasil" },
      name: "",
      tel: "",
      enabled: false,
    };
  },
};
</script>
