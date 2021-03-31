<template>
    <button class="py-1 px-7 relative text-base border-4 border-black rounded-full font-bold bg-white text-black hover:text-black hover:bg-gray-400 cursor-not-allowed tooltip" disabled>
      <span>{{ text }}</span>
      <span class="tooltiptext">Available soon!</span>
    </button>
</template>

<script>
export default {
  name: 'ButtonWhiteSoon',
  props: ['text']
}
</script>

<style>

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