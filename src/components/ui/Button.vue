<template>
  <button
    class="bg-red-500 hover:bg-red-600 p-3 text-white rounded-lg flex justify-center items-center gap-2"
    :class="[
      {
        'w-full': block,
      },
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    block: { type: Boolean, default: true },
  },
};
</script>
