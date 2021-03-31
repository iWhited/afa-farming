<template>
  <div x-data="{ loading: false }" 
  class="">
    <button  
    x-on:click="loading = !loading"
    x-bind:disabled="loading"
    class="py-1 px-6 relative text-base border-4 border-black rounded-full font-bold hover:text-white hover:bg-black focus:text-gray-400 focus:outline-none"
    x-bind:class="{ 'cursor-not-allowed bg-gray-400 border-gray-400 hover:bg-gray-400' : loading }">
      <div class="absolute inset-0 bg-white rounded-full flex justify-center items-center"
      x-bind:class="{ 'hidden' : !loading, 'block tremble' : loading }">
        <span class="text-gray-400"> {{ text }}</span>
      </div>
      <span> {{ text }} </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonWhite',
  props: ['text']
}
</script>
