<template>
  <div x-data="{ loading: false }"  
  :class="{ 'cursor-not-allowed' : attribute === 'disable' }">

    <button v-if="attribute === 'soon'" 
    class="py-2 lg:px-5 px-8 relative text-base text-white bg-green-400 rounded-full font-bold hover:text-black hover:bg-gray-400 cursor-not-allowed tooltip" disabled>
      {{ text }}
      <span class="tooltiptext">Available soon!</span>
    </button>

    <button v-if="attribute === 'disable'"
    x-on:click="loading = !loading"
    x-bind:disabled="loading"
    class="py-2 px-8 lg:px-5 relative text-base text-white bg-green-200 rounded-full font-bold focus:bg-green-600 focus:outline-none cursor-not-allowed pointer-events-none">
      <div x-bind:class="{ 'hidden' : !loading, 'block' : loading }"
      class="absolute inset-0 bg-green-600 rounded-full flex justify-center items-center">
        <span x-bind:class="{ 'inline spinner' : loading, 'hidden' : !loading }"
        class="w-4 h-4 rounded-full text-gray-400 border-t-2 z-10 spinner"></span>
      </div>
      {{ text }}
    </button>


    <button v-if="attribute === 'normal'" 
    x-on:click="loading = !loading"
    x-bind:disabled="loading"
    class="py-1 px-8 lg:px-5 relative text-base text-white bg-green-400 rounded-full font-bold focus:bg-green-600 focus:outline-none"
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
  props: ['text', 'attribute']
}
</script>


<style>


/* ------------------------ SOON */
/* Tooltip text */
.tooltip .tooltiptext {
  width: 180px;
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 10px 15px;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -90px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>