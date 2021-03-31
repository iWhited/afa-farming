<template>
  <div x-data="{ loading: false }">
    <button  
    x-on:click="loading = !loading"
    x-bind:disabled="loading"
    class="py-2 px-6 w-full relative text-md border-4 border-white rounded-full font-bold bg-black text-white hover:text-black hover:bg-white focus:text-gray-400 focus:outline-none"
    x-bind:class="{ 'cursor-not-allowed bg-gray-400 border-gray-400 hover:bg-gray-400' : loading }">
      <div class="absolute inset-0 bg-black rounded-full flex justify-center items-center"
      x-bind:class="{ 'hidden' : !loading, 'block tremble' : loading }">
        <span class="text-gray-400">{{ text }}</span>
      </div>
      <span>{{ text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonBlackOnBlack',
  props: ['text']
}
</script>
