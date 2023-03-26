<template>
    <div class="mt-8">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <!---->
        <h1 class="font-semibold text-xl mb-6">Histórico de Vendas</h1>
        <div
          class="border shadow-sm divide-y divide-gray-300 -mx-4 sm:-mx-0 rounded-t-none rounded-b-none sm:rounded-b-lg sm:rounded-t-lg"
        >
          <div class="bg-white p-4 sm:p-6 rounded-t-lg">
            <form class="space-y-6">
              <div class="flex flex-wrap gap-2 items-end">
                <fieldset class="flex-grow">
                  <div>
                    <Listbox as="div" v-model="selected">
                      <ListboxLabel
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Selecione uma campanha</ListboxLabel
                      >
                      <div class="relative mt-2">
                        <ListboxButton
                          class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                        >
                          <span class="block truncate">{{ selected.name }}</span>
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
                            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            <ListboxOption
                              as="template"
                              v-for="person in people"
                              :key="person.id"
                              :value="person"
                              v-slot="{ active, selected }"
                            >
                              <li
                                :class="[
                                  active
                                    ? 'bg-primary text-white'
                                    : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9',
                                ]"
                              >
                                <span
                                  :class="[
                                    selected ? 'font-semibold' : 'font-normal',
                                    'block truncate',
                                  ]"
                                  >{{ person.name }}</span
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
                  </div>
                </fieldset>
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="flex gap-2 items-center text-sm rounded-md border px-4 py-2"
                  >
                    <EyeSlashIcon class="h-4 w-4" aria-hidden="true" />
                    <span>Dados</span>
                  </button>
                  <button
                    type="button"
                    class="flex gap-2 items-center text-sm rounded-md border px-4 py-2"
                  >
                    <FunnelIcon class="h-4 w-4" aria-hidden="true" />
                    <span>Filtros</span>
                  </button>
                </div>
              </div>
              <!---->
            </form>
          </div>
          <div
            class="bg-gray-50 overflow-hidden overflow-x-auto px-4 py-3 flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-x-4 gap-y-2 sm:px-6"
          >
            <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <p class="text-sm text-gray-700 text-center">
                Mostrando <span class="font-medium">3</span> até
                <span class="font-medium">10</span> de
                <span class="font-medium">3</span> resultados
              </p>
            </div>
            <nav class="relative inline-flex rounded-md shadow-sm -space-x-px">
              <span
                preserve-scroll=""
                preserve-state=""
                class="disabled relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                ><span class="sr-only">Anterior</span>
                <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" /> </span
              ><a
                class="relative inline-flex items-center px-4 py-2 border text-sm font-medium border-gray-300 bg-ToneQuaternary-100/5 border-ToneQuaternary-100 text-ToneQuaternary-100"
                >1</a
              >
              <a
                class="disabled relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                href=""
                ><span class="sr-only">Próximo</span>
                <ChevronRightIcon class="h-6 w-6" aria-hidden="true" />
              </a>
            </nav>
          </div>
  
          <section class="divide-y bg-white sm:rounded-b-lg">
            <div class="px-4 sm:px-6 py-4 text-sm">
              <span
                class="sm:!hidden mb-3 text-xs rounded-full px-2 bg-red-100 text-red-400"
                >EXPIRADO</span
              >
              <div class="flex items-center justify-between gap-x-4">
                <div class="font-medium text-green-600">
                  <span class="uppercase mr-2.5">João Vieira</span
                  ><span
                    class="!hidden sm:!inline-flex text-xs rounded-full px-2 bg-red-100 text-red-600"
                    >EXPIRADO</span
                  >
                </div>
              </div>
              <div class="relative">
                <hr class="my-3.5 block sm:hidden" />
                <div
                  class="mt-1 text-gray-500 flex flex-col sm:flex-row flex-wrap items-start gap-x-4 gap-y-1.5"
                >
                  <span class="inline-flex items-center gap-1.5">
                    <CurrencyDollarIcon class="h-6 w-6" aria-hidden="true" />
  
                    Preço R$&nbsp;2,00</span
                  ><span class="inline-flex flex-wrap items-center gap-x-1.5">
                    <TicketIcon class="h-6 w-6" aria-hidden="true" />
                    2 bilhetes</span
                  ><span class="inline-flex items-center gap-1.5">
                    <CalendarIcon class="h-6 w-6" aria-hidden="true" />
  
                    Criada em 27/02/2023, 23:22</span
                  >
                </div>
              </div>
              <hr class="my-4" />
              <div
                class="flex flex-wrap gap-x-3 gap-y-1.5 max-h-48 overflow-y-auto pb-2"
              >
                <span class="text-xs rounded-full px-2 bg-red-100 text-red-600"
                  >01</span
                >
                <span class="text-xs rounded-full px-2 bg-red-100 text-red-600"
                  >02</span
                >
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {} from "@heroicons/vue/24/outline";
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckIcon,
    ChevronUpDownIcon,
    EyeSlashIcon,
    FunnelIcon,
  } from "@heroicons/vue/20/solid";
  import {
    CurrencyDollarIcon,
    TicketIcon,
    CalendarIcon,
  } from "@heroicons/vue/24/outline";
  import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
  } from "@headlessui/vue";
  
  export default {
    name: "SalesHistoryComponent",
    components: {
      ChevronLeftIcon,
      ChevronRightIcon,
      CheckIcon,
      ChevronUpDownIcon,
      EyeSlashIcon,
      FunnelIcon,
      CurrencyDollarIcon,
      TicketIcon,
      CalendarIcon,
      Listbox,
      ListboxButton,
      ListboxLabel,
      ListboxOption,
      ListboxOptions,
    },
    data() {
      return {
        selected: { id: 1, name: "Wade Cooper" },
        people: [
          { id: 1, name: "Wade Cooper" },
          { id: 2, name: "Arlene Mccoy" },
          { id: 3, name: "Devon Webb" },
          { id: 4, name: "Tom Cook" },
          { id: 5, name: "Tanya Fox" },
          { id: 6, name: "Hellen Schmidt" },
          { id: 7, name: "Caroline Schultz" },
          { id: 8, name: "Mason Heaney" },
          { id: 9, name: "Claudie Smitham" },
          { id: 10, name: "Emil Schaefer" },
        ],
      };
    },
  };
  </script>
  
  <style></style>
  