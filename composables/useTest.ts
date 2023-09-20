export default async function useTest() {
  // return useState('getDevelopers', () => 'Ghie')


  
  const fetchData = await $fetch(
    `https://api.rawg.io/api/developers?key=d785dde9bfbe45fb85d5d39338328eb7&page_size=20`
  );

  return fetchData
  
};

//   const response = useFetch(
//     `https://api.rawg.io/api/developers?key=d785dde9bfbe45fb85d5d39338328eb7&page_size=15`,{
//       method: "GET",
//     }
//   );

// return response;



// async function getDevelopers(): Promise<DataT>
// {
//     const response = await $fetch(
//           `https://api.rawg.io/api/developers?key=d785dde9bfbe45fb85d5d39338328eb7&page_size=15`,{
//             method: "GET",
//           }
//         );

//     return response;

// }


