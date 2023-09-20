<template>
  <div>
    <Title>Developers | {{ title }}</Title>
    <h1>Developers</h1>
    <div class="grid sm:grid-cols-12 lg:grid-cols-4 gap-7">
      <!-- {{ data.results[0] } -->

      {{ fetchData }}
      <!-- {{ getApiData }} -->
      <!-- <developer-card
        v-for="developer in data.results"
        :key="developer"
        :developer="developer"
      /> -->
    </div>
  </div>
</template>

<script setup lang="js">

const title = useState("title");

// const { data, error} = await useFetch("/api/developers");
// const developers  = new useTest();

const fetchData = await useTest();

// const foo = new useFoo();
// const { getApiData } = useFoo()
//   await getApiData()


// Data is fetched in the server and trasnferred to the client.
// const { data, error } = useAsyncData("developers", async () => {
//   const response = await $fetch(
//     `https://api.rawg.io/api/developers?key=d785dde9bfbe45fb85d5d39338328eb7&page_size=15`
//   );

//   return response;
// });
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
  font-size: 36px;
  font-family: poppins;
  color: rgba(112, 102, 119, 1);
}
p {
  margin: 20px 0;
}
</style>
