
<script setup lang="ts">
  //import { userLogout } from "~/composables/useAuth";
  import BackButton from '../elements/BackButton.vue';
  type Theme = 'light' | 'dark';

  const user = useState('user');
  const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
  };
  
  // const logout = userLogout();
  // const router = useRouter();
  // const colorMode = useColorMode()

  
  // const initalCheck = await useLoggedIn()
  // const isLoggedIn = ref(initalCheck)

  // const showSideDrawer = ref<boolean>(false);

  // router.afterEach(() => {
  //   showSideDrawer.value = false
  // })  

  // async function checkIfLoggedIn() {
  //   const check = await useLoggedIn()
  //   isLoggedIn.value = check
  // }

  // watch(user, async () => {
  //   await checkIfLoggedIn()
  // }, { deep: true });

</script>

<template>
  <div class="navbar relative dark:bg-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

        <div class="-mr-2 -my-2 hidden md:flex">

          <button type="button" class="bg-b rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span class="sr-only dark:bg-black">Open menu</span>
            
            <NuxtLink to="/">
              <img src="/public/img/logo_clear_fsj.png" alt="" class="h-6 w-6 dark:bg-black">
            </NuxtLink>
          </button>
        </div>

        <!-- Logo -->
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span class="sr-only dark:bg-black">Open menu</span>
            <svg class="h-6 w-6 dark:bg-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span class="sr-only dark:bg-black">Open menu</span>
            <img src="/public/img/logo_clear_fsj.png" alt="" class="h-6 w-6 dark:bg-black">
          </button>
        </div>

        <!-- NAV links -->
        <nav class="hidden md:flex space-x-10">
          <NuxtLink to="/subscribe">
            <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900">
              Premium Membership
            </span>
          </NuxtLink>
          <NuxtLink to="/categories">
            <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900">
              Videos
            </span>
          </NuxtLink>
          <NuxtLink to="/state-examples">
            <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900">
              State in Nuxt
            </span>
          </NuxtLink>
          <NuxtLink to="/ask-jack/search">
            <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900">
              Ask Jack
            </span>
          </NuxtLink>
          <NuxtLink to="/dashboard">
            <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900">
              Dashboard
            </span>
          </NuxtLink>
        </nav>

        <!-- LogIn and Sign Up -->
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <NuxtLink v-if="!user" to="/login" target="_blank" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Log In
          </NuxtLink>
          <User v-if="user" :user="user" />
          <NuxtLink v-if="!user" to="/register" target="_blank" class="transition duration-500 hover:scale-110 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign Up
          </NuxtLink>
          <!-- <a href="https://github.com/olorunshogo" class="ml-5">
            <img src="/public/img/github-logo.png" alt="Github logo">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="dark:text-gray-50 h-6 w-6 hidden lg:block hover:dark:text-gray-400 hover:text-gray-400" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512">
              <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </svg>
          </a>
          <NuxtLink to="https://x.com/Shownzy_Baba?t=RmNQSj0JMBIZm5fExNTZ2w&s=08">
            <i class="fa-brands fa-x-twitter"></i>
          </NuxtLink> -->
        </div>

        <button class="hidden md:block" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
          <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-50"  viewBox="0 0 20 20"  fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-50" viewBox="0 0 20 20" fill="currentColor ">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
        </button>
        
      </div>

      <BackButton />
    </div>
  </div>
</template>