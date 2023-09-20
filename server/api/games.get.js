export default defineEventHandler(async (event) => {


    const { apiKey } = useRuntimeConfig()


    const data = await $fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=15`)
    return data;

})