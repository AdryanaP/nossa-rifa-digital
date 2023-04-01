<template>
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div
                class="flex flex-shrink-0 items-center justify-center px-4 my-4"
              >
                <img class="w-36" src="@/assets/logo.png" alt="logo" />
              </div>
              <nav
                class="mt-5 h-full flex-shrink-0 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div class="space-y-1 px-2">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-primaryMedium text-primary'
                        : 'hover:text-gray-800',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md transition text-gray-500',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    <component
                      :is="item.icon"
                      class="mr-4 h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
              </nav>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col border bg-white"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like 
        -->
      <div class="flex flex-grow flex-col overflow-y-auto pt-5 pb-4">
        <div class="flex flex-shrink-0 items-center justify-center px-4 my-6">
          <img class="w-52" src="@/assets/logo.png" alt="logo" />
        </div>
        <nav
          class="mt-5 flex flex-1 flex-col overflow-y-auto"
          aria-label="Sidebar"
        >
          <div class="space-y-1 px-2">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-primaryMedium text-primary'
                  : 'hover:text-gray-800',
                'group flex items-center px-2 py-2 text-base font-medium rounded-md transition text-gray-500',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <component
                :is="item.icon"
                class="mr-4 h-6 w-6 flex-shrink-0"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
        </nav>
      </div>
    </div>

    <div class="flex flex-1 flex-col lg:pl-64 h-full">
      <div class="flex h-12 flex-shrink-0 border-b shadow bg-white">
        <button
          type="button"
          class="px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3CenterLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div
          class="flex flex-1 justify-end px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8"
        >
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:hover:bg-gray-50"
                >
                  <!-- <p>{{ user?.name }}</p>
                  <ChevronDownIcon
                    class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                    aria-hidden="true"
                  /> -->
                  <img
                    :src="user.profile.avatar"
                    alt="avatar"
                    class="w-9 h-9 rounded-full shadow"
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      href="/configuracoes"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >Configuracoes</a
                    >
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                    <a
                      href="/login"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >Sair</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main class="flex-1 pb-8 h-full">
        <SalesHistory />
      </main>
    </div>
  </div>
</template>

<script>
import router from "@/router";
// import axios from "axios";
import Login from "@/views/Login.vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  TicketIcon,
  ArrowRightOnRectangleIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
  Cog8ToothIcon,
} from "@heroicons/vue/24/outline";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/20/solid";
import SalesHistory from "@/components/SalesHistory.vue";

export default {
  name: "SalesHistoryView",
  components: {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    SalesHistory,
    ArrowRightOnRectangleIcon,
    Bars3CenterLeftIcon,
    BellIcon,
    ClockIcon,
    CogIcon,
    CreditCardIcon,
    DocumentChartBarIcon,
    TicketIcon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    XMarkIcon,
    BanknotesIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
  },
  data() {
    return {
      sidebarOpen: false,
      navigation: [
        { name: "Minhas Rifas", href: "/", icon: TicketIcon, current: false },
        {
          name: "Histórico de Vendas",
          href: "/historico",
          icon: ClockIcon,
          current: true,
        },
        {
          name: "Configurações",
          href: "/configuracoes",
          icon: Cog8ToothIcon,
          current: false,
        },
        {
          name: "Sair",
          href: "/login",
          icon: ArrowRightOnRectangleIcon,
          current: false,
        },
      ],
      cards: [
        {
          name: "Account balance",
          href: "#",
          icon: ScaleIcon,
          amount: "$30,659.45",
        },
      ],
      user: "",
    };
  },

  created() {
    // sessionStorage.removeItem("clientId");
    const token = sessionStorage.getItem("token");
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if (!token) {
      router.push({
        path: "/login",
        name: "Login",
        component: Login,
      });
    }
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  background-color: #f9fafb !important;
}
</style>
