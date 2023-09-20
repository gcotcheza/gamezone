<template>
  <div class="max-w-full container mx-auto  mt-4 shadow-sm bg-white min-h-screen text-gray-900">
    <Title class="text-orange-400">{{ title }}</Title>
    <Header></Header>
    <div class="container max-w-full p-4 m-4">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
.router-link-active {
  @apply font-bold;
}
.router-link-active:hover {
  @apply font-bold;
}
</style>
<script setup>
const title = useState("title", () => "Gamezone");
</script>

