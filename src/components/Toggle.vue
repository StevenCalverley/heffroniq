<template>
  <!-- Enabled: "bg-teal-500", Not Enabled: "bg-gray-200" -->
  <button
    type="button"
    @click="isOn = !isOn"
    :class=" isOn ? 'bg-teal-500' : 'bg-gray-200'"
    class="ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
    aria-pressed="true"
    :aria-labelledby="aria.labelledby"
    :aria-describedby="aria.describedby">
    <span class="sr-only">Use setting</span>
    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
    <span
      aria-hidden="true"
      :class="isOn ? 'translate-x-5' : 'translate-x-0'"
      class="inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
    ></span>
  </button>
</template>

<script>
  export default {
    props: {
      aria: {
        type: Object,
      },
    },
    data: () => ({
      isOn: false,
    })
  }
</script>