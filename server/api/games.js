// import { defineNuxtPlugin } from '@nuxtjs/composition-api';

    // export default defineNuxtPlugin(async () => {

    // const response = await $fetch("https://api.rawg.io/api/games?key=d785dde9bfbe45fb85d5d39338328eb7")
    // const data = await response.json();
    // return data
// });

export default defineEventHandler( async (event) => {

    // handle query param
    // const { name } = getQuery(event)

    // handle post data
    // const { age }  = await readBody(event)

    // api call with apikey 
    // const { games } = await $fetch("https://api.rawg.io/api/games?key=d785dde9bfbe45fb85d5d39338328eb7").catch((error) => error.data)
//     const { response } = await $fetch("https://api.rawg.io/api/games?key=d785dde9bfbe45fb85d5d39338328eb7").catch((error) => error.data)
//     console.error(error)
//     if (response === undefined ) {
//         throw new Error('Failed to fetch games from the api');
//     }
//     const { data } = await response.json();
// console.log(data);
//     return games
})