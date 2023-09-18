<template>
  <Title>Home | {{ title }}</Title>
  <div class="container mx-auto py-8 divide-y space-y-8 divide-gray-300">
    <h2>Home page</h2>
    This is the index page Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Placeat dicta repellendus, modi ducimus, quo sunt aperiam non porro
    fugiat, aliquam in eveniet repellat dolorem! Sint voluptates rem dolore
    praesentium at?
  </div>
</template>

<script setup>
const title = useState("title");

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
</style>
