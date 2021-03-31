<template>
  <div x-data="{ loading: false }">
    <button 
    x-on:click="loading = !loading"
    x-bind:disabled="loading"
    class="py-1 px-8 lg:px-5 relative text-md text-white bg-green-400 rounded-full font-bold focus:bg-green-600 focus:outline-none"
    x-bind:class="{ 'cursor-not-allowed' : loading }">
      <div x-bind:class="{ 'hidden' : !loading, 'block' : loading }"
      class="absolute inset-0 bg-green-600 rounded-full flex justify-center items-center">
        <span x-bind:class="{ 'inline spinner' : loading, 'hidden' : !loading }"
        class="w-4 h-4 rounded-full text-gray-400 border-t-2 z-10 spinner"></span>
      </div>
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonGreenSM',
  props: ['text']
}
</script>
