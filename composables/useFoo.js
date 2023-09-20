

export const useFoo = () => {
  return {
    name: 'Ghie'
  }
  const data = ref([])
  const { apiKey } = useRuntimeConfig()

  const getApiData = async () => {
    const data = await $fetch(`https://api.rawg.io/api/developers?key=${apiKey}&page_size=10`)

  return { getApiData }
  }
}   