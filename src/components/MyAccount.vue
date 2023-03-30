<template>
  <div class="mt-8 flex flex-col gap-8">
    <div
      class="mx-4 lg:mx:auto max-w-6xl p-4 sm:p-6 lg:p-8 bg-white shadow-card rounded-lg"
    >
      <h1 class="text-lg font-medium">Minha Conta</h1>
      <form class="my-4 flex flex-col gap-8">
        <div class="space-y-4">
          <div>
            <label for="name" class="block font-medium text-sm">Nome</label>
            <div class="mt-1">
              <input
                id="name"
                name="name"
                v-model="user.name"
                type="text"
                required=""
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block font-medium text-sm">Email</label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                v-model="user.email"
                type="email"
                required=""
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 mt-1 w-full">
          <Listbox as="div" v-model="country">
            <div class="relative">
              <ListboxButton
                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none sm:text-sm"
              >
                <span class="inline-flex w-full truncate">
                  <span class="truncate">{{ country.acronym }}</span>
                  <span class="ml-2 truncate text-gray-500">{{
                    country.name
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
              v-model="user.profile.whatsapp"
              v-mask="'(##) #####-####'"
              placeholder="Telefone / WhatsApp"
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <div class="text-right">
          <button
            class="rounded-md bg-black text-white px-4 py-3 text-sm font-medium shadow-sm focus:outline-none"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
    <div
      class="mx-4 lg:mx:auto max-w-6xl p-4 sm:p-6 lg:p-8 bg-white shadow-card rounded-lg"
    >
      <h1 class="text-lg font-medium">Excluir Conta</h1>

      <div class="rounded-md bg-blue-50 p-4 my-6">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              class="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3 flex-1 md:flex md:justify-between">
            <p class="text-sm text-blue-700">
              Esta ação é irreversível. Prosseguindo, irá deletar todos os seus
              dados do nosso sistema.
            </p>
          </div>
        </div>
      </div>

      <form>
        <div>
          <label for="deletePhrase" class="block font-medium text-sm"
            >Confirmar exclusão</label
          >
          <div class="mt-1">
            <input
              id="deletePhrase"
              name="deletePhrase"
              v-model="deletePhrase"
              type="text"
              placeholder="Autorizo excluir minha conta"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
          <p class="mt-2 text-sm text-gray-500" id="email-description">
            Digite no campo acima 'Autorizo excluir minha conta'
          </p>
        </div>
        <div class="text-right">
          <button
            class="rounded-md bg-red-500 text-white px-4 py-3 text-sm font-medium shadow-sm focus:outline-none"
            type="submit"
          >
            Excluir
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { ChevronUpDownIcon } from "@heroicons/vue/20/solid";

export default {
  name: "MyAccount",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    ChevronUpDownIcon,
  },
  data() {
    return {
      user: "",
      deletePhrase: "",
      country: { acronym: "BR", name: "Brasil" },
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
    };
  },

  created() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
  },
};
</script>

<style scopped>
.shadow-card {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
</style>
