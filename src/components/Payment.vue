<template>
  <div class="mt-8">
    <div
      class="mx-4 lg:mx:auto max-w-6xl p-4 sm:p-6 lg:p-8 bg-white shadow-card rounded-lg"
    >
      <div class="flex gap-2 items-center">
        <img src="@/assets/logo-pix.png" alt="logo pix" class="w-12" />
        <h1 class="text-lg font-semibold">Pix</h1>
      </div>

      <p class="text-sm my-4">
        Pedidos com este meio de pagamento
        <spam class="font-semibold">NÃO liberam automaticamente</spam>, você
        terá que liberar manualmente.
      </p>

      <form class="my-8 flex flex-col gap-8">
        <div>
          <label for="deletePhrase" class="block font-medium text-sm"
            >Seu nome</label
          >
          <div class="mt-1">
            <input
              id="name"
              name="name"
              v-model="bankAccount.name"
              type="text"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <Listbox as="div" v-model="bankAccount.typeKey">
          <ListboxLabel class="block font-medium text-sm"
            >Tipo de chave</ListboxLabel
          >
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none sm:text-sm"
            >
              <span class="block truncate">{{ bankAccount.typeKey.name }}</span>
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
                  v-for="type in typeKey"
                  :key="type.id"
                  :value="type"
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
                      >{{ type.name }}</span
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
          <label for="key" class="block font-medium text-sm">Chave Pix</label>
          <div class="mt-1">
            <input
              id="key"
              name="key"
              v-model="bankAccount.key"
              type="text"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <span class="flex flex-grow flex-col">
            <span
              class="text-sm font-medium text-gray-900"
              id="availability-label"
              > {{ enabled ? "Desabilitar Pix" : "Habilitar Pix" }}</span
            >
            <span class="text-sm text-gray-500" id="availability-description"
              >Essa função quando habilitada, torna necessário que você faça a baixa manualmente das vendas feitas.</span
            >
          </span>
          <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
        
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
  </div>
</template>

<script>
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Switch
} from "@headlessui/vue";

export default {
  name: "PaymentVue",
  components: {
    CheckIcon,
    ChevronUpDownIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Switch,
  },
  data() {
    return {
      enabled: false,
      bankAccount: {
        name: "",
        key: "",
        typeKey: { id: 1, name: "Chave aleatória" },
      },
      typeKey: [
        { id: 1, name: "Chave aleatória" },
        { id: 2, name: "Email" },
        { id: 3, name: "Telefone" },
        { id: 4, name: "CPF/CNPJ" },
      ],
    };
  },
};
</script>

<style></style>
