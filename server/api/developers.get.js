export default defineEventHandler(async (event) => {
    // const body = await readBody(event)
    // return { body }

    const { apiKey } = useRuntimeConfig()
    // const runtimeConfig = useRuntimeConfig();
    // return {
    //     hello: 'slava' 
    // }

    const data = await $fetch(`https://api.rawg.io/api/developers?key=${apiKey}&page_size=15`)
    return data;

})