<template>
  <div x-data="{ loading: false }">

    <button v-if="attribute === 'soon'" 
    class="w-full py-2 px-7 relative text-lg border-4 border-black rounded-full font-extrabold bg-white text-black hover:text-black hover:bg-gray-400 cursor-not-allowed tooltip" disabled>
      <span>{{ text }}</span>
      <span class="tooltiptext">Available soon!</span>
    </button>

    <!-- animation bubble -->
    <button v-if="attribute === 'normal'"
    x-on:click="loading = !loading"
    x-bind:disabled="loading"
    class="w-full py-2 px-6 relative text-lg border-4 border-black rounded-full font-bold hover:text-white hover:bg-black focus:text-gray-400 focus:outline-none"
    x-bind:class="{ 'cursor-not-allowed bg-gray-400 border-gray-400 hover:bg-gray-400' : loading }">
      <div class="absolute inset-0 bg-white rounded-full flex justify-center items-center"
      x-bind:class="{ 'hidden' : !loading, 'block loadingBlack2' : loading }">
        <span class="text-gray-400"> {{ text }}</span>
      </div>
      <span> {{ text }} </span>
    </button>

    <!-- animation tremble -->
    <!-- <button v-if="attribute === 'normal'"
    x-on:click="loading = !loading"
    x-bind:disabled="loading"
    class="w-full py-2 px-6 relative text-lg border-4 border-black rounded-full font-bold hover:text-white hover:bg-black focus:text-gray-400 focus:outline-none"
    x-bind:class="{ 'cursor-not-allowed bg-gray-400 border-gray-400 hover:bg-gray-400' : loading }">
      <div class="absolute inset-0 bg-white rounded-full flex justify-center items-center"
      x-bind:class="{ 'hidden' : !loading, 'block tremble' : loading }">
        <span class="text-gray-400"> {{ text }}</span>
      </div>
      <span> {{ text }} </span>
    </button> -->
  </div>
</template>

<script>
export default {
  name: 'ButtonWhite',
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


/* ------------------------ Loading bubbles */
.loadingBlack2 {
  position: relative;
  overflow: hidden;
}
@keyframes loop {
  0% {
    left: 50%;
    top: 50%;
    width: 0px;
    height: 0px;
    opacity: 0.4;
  }
  25% {
    left: calc(50% - 100px / 2);
    top: calc(50% - 100px / 2);
    width: 100px;
    height: 100px;
    opacity: 0.2;
  }
  40% {
    left: calc(50% - 70px / 2);
    top: calc(50% - 70px / 2);
    width: 70px;
    height: 70px;
    opacity: 0.3;
  }
  90% {
    left: calc(50% - 400px / 2);
    top: calc(50% - 400px / 2);
    width: 400px;
    height: 400px;
    opacity: 0;
  }
  100% {
    left: calc(50% - 400px / 2);
    top: calc(50% - 400px / 2);
    width: 400px;
    height: 400px;
    opacity: 0;
  }
}
.loadingBlack2::before, 
.loadingBlack2.loading::after {
  position: absolute;
  background: black;
  content: "";
  border-radius: 50%;
  animation: loop 3s infinite;
}
.loadingBlack2::after {
  animation: loop 3s 1.2s infinite;
}


</style>