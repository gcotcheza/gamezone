<template>
  <div class="card bg-gray-100 text-center rounded-lg">
    <NuxtLink :to="`/games/${game.id}`">
      <!-- {{ game.short_screenshots }} -->
      <NuxtImg
        :src="game.background_image"
        alt="game thumb"
        class="w-full h-96 object-cover p-4 rounded-lg"
      />
      <p class="font-bold text-gray-500 m-4 truncate">{{ game.name }}</p>
      <p class="text-xl my-7">€ 49,99</p>
    </NuxtLink>
    <div class="flex justify-between">
      <p class="pl-4 mt-3">In stock</p>
      <button
        type="button"
        class="text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex"
      >
        <i class="material-icons mr-2">add_shopping_cart</i>
      </button>
    </div>
  </div>
</template>
<script setup>
const { game } = defineProps(["game"]);
</script>

<script>
export default {};
</script>

<style scoped>
.thumb {
  height: 178px;
  width: 210px;
  margin: 0 auto;
}
</style>
