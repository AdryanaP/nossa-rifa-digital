<template>
  <div>
    <div class="flex bg-yellow-50 justify-center gap-4 p-4 sticky">
      <ExclamationTriangleIcon class="w-10 text-yellow-500" />
      <div class="text-yellow-600 text-sm text-center">
        <p class="font-bold">Modo demonstração.</p>
        <p>Faça o o pagemento para publicar essa rifa e começar a sua ação</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ExclamationTriangleIcon } from "@heroicons/vue/20/solid";

export default {
  name: "RafflePage",
  components: { ExclamationTriangleIcon },

};
</script>
