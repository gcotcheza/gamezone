<template>
  <Head>
    <Title>Games | {{ game.name }} </Title>
    <Meta name="description" :content="game.description" />
  </Head>
  <div class="div container mx-auto py-8">
    <GameDetails :game="game" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const { data: game } = await useFetch(
  `https://api.rawg.io/api/games/${id}?key=d785dde9bfbe45fb85d5d39338328eb7`
);
</script>
