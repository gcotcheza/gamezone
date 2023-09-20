<template>
  <div class="flex justify-between">
    <div class="card"></div>

    <div></div>
  </div>
  <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-12">
    <title>Games | {{ title }}</title>
    {{}}
    <game-card v-for="game in data.results" :key="game" :game="game" />
  </div>
</template>

<script setup>
const title = useState("title");
const runtimeConfig = useRuntimeConfig();

const { data, error } = await useFetch("/api/games");
// const { response } = await useFetch('https://api.rawg.io/api/games?key=d785dde9bfbe45fb85d5d39338328eb7');

// const { data } = await useFetch("games", {
//   baseURL: runtimeConfig.public.baseUrl,
//   query: {
//     key: "d785dde9bfbe45fb85d5d39338328eb7",
//   },
// });
</script>

// How to put my game search in a service (Zelf onderzoek services in NuxtJS, dan Julien)
// Add pagination to game list (Zelf onderzoeken, pagina meesturen met query (page=2,3,4))
// Make carousel work in game detail (Zelf ) // Make search work through pinia (Julien,
Jordie) // Final touch UI (Siebe)
