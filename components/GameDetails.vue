<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 gap-8">
      <div class="card border-none p-7">
        <div class="card bg-gray-100">
          <img
            :src="game.background_image"
            alt="game img"
            class="h-96 object-cover mx-auto my-4 p-4 max-w-full"
          />
        </div>
        <di class="card mt-4 w-full h-50">
          <media-carousel :images="data.results"></media-carousel>
        </di>
      </div>
      <div class="p-7">
        <h3 class="font-poppins decoration-gray-800 text-4xl my-7">
          {{ game.name }}
        </h3>
        <p class="text-xl my-7">€ 49,99</p>
        <p class="mb-4">{{ strippedHtmlDescription }}</p>
        <h5 class="font-bold mb-2">Specifications:</h5>
        <div class="ml-8 leading-8">
          <ul>
            <li v-for="item in items" :key="item.id">
              <span class="font-bold"> {{ item.name }} : </span>
              <span class="">
                <button
                  v-for="value in item.values"
                  :key="value"
                  type="button"
                  class="inline-block rounded-full m-1 bg-primary-100 px-3 pb-2 pt-2.5 text-xs font-medium leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                >
                  {{ value }}
                </button>
              </span>
            </li>
          </ul>
        </div>

        <button
          class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          <div class="flex items-center py-2">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to cart</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { game } = defineProps(["game"]);
</script>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Developers", values: [] },
        { id: 2, name: "Platforms", values: [] },
        { id: 3, name: "Genres", values: [] },
        { id: 3, name: "Tags", values: [] },
      ],
      // data: {
      //   results: [],
      // }
    };
  },

  mounted() {
    const developerValues = this.game.developers.map(
      (developer) => developer.name
    );
    this.items[0].values = developerValues;

    const platformNames = this.game.platforms.map(
      (platform) => platform.platform.name
    );
    this.items[1].values = platformNames;

    const genres = this.game.genres.map((genre) => genre.name);
    this.items[2].values = genres;

    const tags = this.game.tags.map((tag) => tag.name);
    this.items[3].values = tags;
  },

  computed: {
    strippedHtmlDescription() {
      let regex = /(<([^>]+)>)/gi;
      return this.game.description.replace(regex, "");
    },
  },
};

const { id } = useRoute().params;

const { data, error } = await useFetch(
  `https://api.rawg.io/api/games/${id}/screenshots?key=d785dde9bfbe45fb85d5d39338328eb7`
);

</script>

<style scoped>
ul {
  list-style-type: disc;
}
</style>
