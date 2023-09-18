<template>
  <div>
    <Title>Developers | {{ title }}</Title>
    <h2>Developers</h2>
    <p>List of games from certain developers</p>
    {{ response.results[0].name }}
<!-- 
    <div v-for="item in response" :key="item.id">
      <p>
      {{ response.results.name }}
    </p>
    </div> -->

  </div>
</template>

<script setup>
const title = useState("title");

const { data: response } = await useFetch("https://api.rawg.io/api/genres?key=d785dde9bfbe45fb85d5d39338328eb7");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
