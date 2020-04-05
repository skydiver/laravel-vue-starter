<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div
      class="py-10 px-20 bg-white border-2 border-gray-600 rounded shadow-lg text-center"
    >
      <h2 class="text-2xl font-bold">Example Component</h2>
      <h3 class="mt-4">{{ $store.state.message }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('Component mounted.');
  }
};
</script>
