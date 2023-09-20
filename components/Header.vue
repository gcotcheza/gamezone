<template>
  <div>
    <header
      class="flex justify-between sticky top-0 z-50 items-center space-x-1 border-b bg-white p-4 shadow-md"
    >
      <nav class="sticky top-0 z-50 items-center bg-white text-lg px-6 py-6">
        <div class="container mx-auto flex w-full items-center px-6">
          <div><NuxtLink to="/">Gamezone</NuxtLink></div>
          <div>
            <ul class="flex space-x-20 pl-12 text-gray-600">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li><NuxtLink to="/games">Games</NuxtLink></li>
              <li><NuxtLink to="/developers">Developers</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="flex justify-between">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <input
              type="text"
              id="game-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-400 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search game..."
              required
            />
          </div>
        </form>
        <svg
          class="h-7 w-7 mt-6 pl-0 mx-6"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path
            d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"
          />
        </svg>
      </div>
    </header>
  </div>
</template>

<script></script>
