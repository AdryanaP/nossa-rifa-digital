<template>
  <div>
    <div
      class="bg-yellow-50 border-l-4 border-yellow-400 w-screen py-4 shadow-sm z-50 p-5 fixed"
    >
      <div class="flex items-center justify-center text-center">
        <div class="ml-5 mr-5 text-4xl">⚠️</div>
        <div class="text-sm">
          <p class="text-yellow-700 font-bold">Modo demonstração.</p>
          <a
            href="/login"
            class="text-sm text-yellow-700 hover:text-yellow-600"
          >
            Faça o pagamento para publicar esta campanha e começar a sua ação
          </a>
        </div>
      </div>
    </div>
    <main class="max-w-5xl mx-auto pt-[72px]">
      <section class="lg:pt-8">
        <div
          class="flex overflow-hidden relative lg:rounded-3xl lg:border bg-white"
        >
          <div class="aspect-video">
            <img
              src="@/assets/pessoas-em-show-com-textura-de-camada-de-fumaca.jpg"
              alt="imagem de capa rifa"
            />
          </div>
        </div>
        <div class="px-4 sm:px-6 w-full absolute">
          <button
            class="rounded-lg px-4 w-full bg-white border py-2 flex gap-2 justify-center -translate-y-2/3 sm:-translate-y-[160%] text-sm font-medium sm:max-w-max"
          >
            🔥 Participe por apenas R$ 2,00
          </button>
        </div>
      </section>
      <div class="mt-8 sm:mt-6 px-4 lg:px-0 space-y-4 sm:space-y-6">
        <section>
          <h1 class="text-2xl mt-4 font-bold">teste</h1>
          <p
            class="mt-1.5 w-fit rounded px-2 py-1 font-semibold text-xs text-yellow-700 bg-yellow-100"
          >
            ENCERRA EM 16/03/2023 12:58
          </p>
          <hr class="my-4" />
          <div class="space-y-4 justify-between">
            <div class="flex items-start gap-3">
              <div>
                <div class="flex items-center gap-1.5">
                  <a class="font-medium" href="">Adryana Portugal</a>
                </div>
                <div class="mt-1 text-sm flex items-center gap-4">
                  <a
                    target="_blank"
                    href="https://wa.me/5521948484465"
                    class="flex gap-2 items-center"
                  >
                    <ChatBubbleBottomCenterTextIcon class="w-4" />

                    <span>Suporte</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="grid gap-4 sm:gap-6 text-white grid-cols-2">
          <div
            class="rounded-2xl p-4 sm:p-6 border bg-orange-400 border-orange-600"
          >
            <div class="flex items-center gap-3">
              <img src="@/assets/medal.png" class="h-10 w-10" />
              <div
                class="bg-orange-500 rounded-full inline-block text-xs font-semibold px-4 py-1.5"
              >
                Prêmios
              </div>
            </div>
            <div class="mt-4">
              <div class="mt-2">
                <div class="text-sm font-medium">
                  <span class="font-semibold">1º lugar </span
                  ><span>- moto</span>
                </div>
              </div>
              <div class="mt-2">
                <div class="text-sm font-medium">
                  <span class="font-semibold">2º lugar </span
                  ><span>- moto só que quebrada</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="rounded-2xl p-4 sm:p-6 bg-primary border border-green-600"
          >
            <div class="flex items-center gap-3">
              <img src="@/assets/promocao.png" class="h-10 w-10" />
              <div
                class="bg-green-600 rounded-full inline-block text-xs font-semibold px-4 py-1.5"
              >
                Promoção
              </div>
            </div>
            <div class="mt-4 space-y-2 font-medium">
              <div class="text-sm">
                <span
                  >Compre <span class="font-semibold">2</span> bilhetes
                  por</span
                >
                <span class="font-semibold">R$&nbsp;3,00</span>
              </div>
            </div>
          </div>
        </section>

        <section class="border p-4 sm:p-6 bg-white rounded-2xl break-all">
          <p
            class="text-xs sm:text-sm font-semibold text-gray-500 tracking-wider text-center"
          >
            DESCRIÇÃO / REGULAMENTO
          </p>
          <p class="mt-4 text-sm max-w-xl mx-auto rx-content">
            Aqui tem uma descrição cosia e tal
          </p>
        </section>

        <section class="relative">
          <form class="border bg-white px-4 sm:px-6 py-6 rounded-2xl">
            <h2
              class="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-semibold text-center"
            >
              Selecione a quantidade de bilhetes
            </h2>
            <div class="grid grid-cols-4 gap-2 mt-4 max-w-xl mx-auto">
              <button
                type="button"
                class="border text-sm py-2 text-center rounded-lg"
              >
                +1</button
              ><button
                type="button"
                class="border text-sm py-2 text-center rounded-lg"
              >
                +5</button
              ><button
                type="button"
                class="border text-sm py-2 text-center rounded-lg"
              >
                +10</button
              ><button
                type="button"
                class="border text-sm py-2 text-center rounded-lg"
              >
                +100
              </button>
            </div>
            <div class="flex items-center gap-4 mt-4 max-w-xl mx-auto">
              <button type="button" @click="--amountTicket">-</button>
              <input
                autofocus=""
                type="number"
                v-model="amountTicket"
                class="outline-none focus:ring-primary focus:ring border w-full rounded-lg py-2 text-center"
              />
              <button type="button" @click="++amountTicket">+</button>
            </div>
            <div class="max-w-xl mx-auto mt-6 text-sm">
              <div class="flex justify-between">
                <span>Valor final</span><span>{{ finalPrice }}</span>
              </div>
            </div>
            <div class="max-w-xl mx-auto">
              <button
                type="button"
                class="text-center mt-6 text-white rounded-md py-2 bg-primary w-full"
              >
                RESERVAR
              </button>
            </div>
          </form>
        </section>
        <section class="grid grid-cols-2 gap-4 sm:gap-6 pb-10">
          <div class="border p-4 sm:p-6 rounded-2xl bg-white">
            <p
              class="text-xs sm:text-sm tracking-wider text-gray-500 uppercase font-semibold"
            >
              MEIO DE PAGAMENTO
            </p>
            <p
              class="mt-4 font-medium text-xs sm:text-sm flex items-center gap-3"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
              >
                <path
                  d="M18.6687 19.9616L15.0317 16.3245C14.8987 16.1916 14.7417 16.1674 14.6571 16.1674C14.5725 16.1674 14.4154 16.1916 14.2825 16.3245L10.6333 19.9737C10.2225 20.3845 9.58208 21.0491 7.44333 21.0491L11.9262 25.5199C12.6059 26.1988 13.5273 26.5801 14.4879 26.5801C15.4485 26.5801 16.3699 26.1988 17.0496 25.5199L21.5446 21.037C20.445 21.037 19.5267 20.8195 18.6687 19.9616ZM10.6333 9.02619L14.2825 12.6754C14.3792 12.772 14.5242 12.8324 14.6571 12.8324C14.79 12.8324 14.935 12.772 15.0317 12.6754L18.6446 9.06244C19.5025 8.16828 20.4812 7.96286 21.5808 7.96286L17.0858 3.47994C16.4061 2.8011 15.4848 2.4198 14.5242 2.4198C13.5635 2.4198 12.6422 2.8011 11.9625 3.47994L7.47958 7.95078C9.60625 7.95078 10.2587 8.65161 10.6333 9.02619Z"
                  fill="#51D2BB"
                ></path>
                <path
                  d="M25.5079 11.9021L22.7892 9.17126H21.2667C20.6142 9.17126 19.9617 9.43709 19.5146 9.90834L15.8896 13.5333C15.5512 13.8717 15.1042 14.0408 14.6571 14.0408C14.1967 14.0344 13.756 13.8529 13.4246 13.5333L9.77542 9.87209C9.31625 9.41293 8.68792 9.14709 8.02333 9.14709H6.24708L3.48 11.9263C2.80116 12.606 2.41986 13.5273 2.41986 14.4879C2.41986 15.4486 2.80116 16.3699 3.48 17.0496L6.24708 19.8288H8.03542C8.68792 19.8288 9.31625 19.5629 9.7875 19.1038L13.4367 15.4546C13.775 15.1163 14.2221 14.9471 14.6692 14.9471C15.1163 14.9471 15.5633 15.1163 15.9017 15.4546L19.5387 19.0917C19.9979 19.5508 20.6263 19.8167 21.2908 19.8167H22.8133L25.5321 17.0858C26.2138 16.3939 26.5939 15.4603 26.5894 14.489C26.5848 13.5177 26.196 12.5876 25.5079 11.9021Z"
                  fill="#51D2BB"
                ></path>
              </svg>
              <span>PIX</span>
            </p>
          </div>
          <div class="border p-4 sm:p-6 rounded-2xl bg-white">
            <p
              class="text-xs sm:text-sm tracking-wider text-gray-500 uppercase font-semibold"
            >
              SORTEIO
            </p>
            <p
              class="mt-4 font-medium text-xs sm:text-sm flex items-center gap-3"
            >
              <span class="h-6 w-6 text-base text-center">🍀</span
              ><span class="uppercase break-all">Sorteador.com.br</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/vue/24/outline";

export default {
  name: "RafflePage",
  components: { ChatBubbleBottomCenterTextIcon },
  data() {
    return {
      amountTicket: 0,
      priceTicket: 2,
    };
  },
  computed: {
    finalPrice() {
      const final = this.priceTicket * this.amountTicket;
      return `R$ ${final},00`;
    },
  },
};
</script>
