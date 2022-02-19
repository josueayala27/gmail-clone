<template>
  <div class="relative">
    <div
      v-if="active"
      :style="`background: ${color}`"
      class="absolute rounded-full h-[.9rem] border-[.2rem] border-white aspect-square bottom-0 right-0"
    ></div>
    <div class="overflow-hidden rounded-full w-[2.5rem] aspect-square">
      <img :src="src" :alt="alt" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AvatarComponent",
  props: {
    src: { type: String, default: "" },
    alt: { type: String, default: "" },
    active: { type: Boolean, default: false },
    color: { type: String, default: "#22C55E" },
  },
};
</script>
