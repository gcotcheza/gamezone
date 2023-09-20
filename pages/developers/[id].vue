<template>
  <Head>
    <Title>Games | {{ developer.name }} </Title>
    <Meta name="developer" :content="developer.name" />
  </Head>
  <div class="div container mx-auto py-8">
    <DeveloperDetails :developer="developer" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const { data: developer } = await useFetch(
  `https://api.rawg.io/api/developers/${id}?key=d785dde9bfbe45fb85d5d39338328eb7`
);
</script>
