<template>
  <div>
    <div
      class="md:mx-auto max-w-3xl py-6 bg-white shadow mx-10 mt-10 xl:mt-20 rounded-xl text-center px-8"
    >
      <div class="pb-4 border-b mb-6">
        <h1>Pagamento</h1>
      </div>
      <div class="space-y-4">
        <div class="flex md:items-center items-baseline gap-2">
          <span class="bg-primary text-white px-3 py-1 rounded-full">1</span>
          <p>Copie a chave PIX.</p>
        </div>
        <div class="flex md:items-center items-baseline gap-2">
          <span class="bg-primary text-white px-3 py-1 rounded-full">2</span>
          <p>
            Abra o aplicativo do seu banco e escolha a opção
            <b>PIX Copia e Cola.</b>
          </p>
        </div>
        <div class="flex md:items-center items-baseline gap-2">
          <span class="bg-primary text-white px-3 py-1 rounded-full">3</span>
          <p>
            Efetue o pagamento e aguarde a campanha ser liberada automaticamente
            😁🤝
          </p>
        </div>
      </div>
      <div class="my-8">
        <div>
          <div class="mt-1 flex rounded-md shadow-sm">
            <div
              class="relative flex flex-grow items-stretch focus-within:z-10"
            >
              <input
                type="pix"
                name="pix"
                id="pix"
                v-model="pix"
                class="block cursor-pointer w-full rounded-none rounded-l-md border-y border-l outline-0 border-black p-2"
                readonly
                @click="copyPix"
              />
            </div>
            <button
              type="button"
              @click="copyPix"
              class="relative -ml-px inline-flex items-center space-x-2 outline-0 border-y border-r border-black p-4 rounded-r-md px-3 text-sm font-medium text-gray-700"
            >
              <span>Copiar</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>OU</p>
        <p>ESCANEIE ESSE QRCODE</p>
      </div>
      <div class="flex justify-center my-4">
        <div class="border shadow rounded p-2">
          <img src="@/assets/pix-qrcode.png" class="w-36" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinalizeCampaign",
  data() {
    return {
      pix: "00020101021226880014BR.GOV.BCB.PIX2566qrcodes-pix.gerencianet.com.br/v2/8bd84ef1c182465ea294fb0a00f73a6d5204000053039865802BR5906EFI SA6009SAO PAULO62070503***6304E9C8",
    };
  },
  methods: {
    copyPix() {
      navigator.clipboard.writeText(this.pix);
    },
  },
};
</script>

<style></style>
