<template>
  <div x-data="{ loading: false }"
  class="cursor-not-allowed">
    <button 
    x-on:click="loading = !loading"
    x-bind:disabled="loading"
    class="px-8 py-3 lg:px-5 lg:py-2 relative text-sm text-white bg-green-200 rounded-full font-bold focus:bg-green-600 focus:outline-none cursor-not-allowed pointer-events-none">
      <div x-bind:class="{ 'hidden' : !loading, 'block' : loading }"
      class="absolute inset-0 bg-green-600 rounded-full flex justify-center items-center">
        <span x-bind:class="{ 'inline spinner' : loading, 'hidden' : !loading }"
        class="w-4 h-4 rounded-full text-gray-400 border-t-2 z-10 spinner"></span>
      </div>
      Claim
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonGreenSMDisable',
  props: ['text']
}
</script>
