<template>
  <div class="card bg-gray-100 text-center rounded-lg py-4">
    <NuxtLink :to="`/developers/${developer.id}`">
      <div class="block rounded-lg bg-white dark:bg-neutral-700">
        <div
          class="relative overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            class="rounded-t-lg"
            :src="developer.image_background"
            alt="background-image"
          />
          <a href="#!">
            <div
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            ></div>
          </a>
        </div>
        <div class="p-6">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-600 dark:text-neutral-50"
          >
            {{ developer.name }}
          </h5>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { developer } = defineProps(["developer"]);
</script>

<style scoped></style>
