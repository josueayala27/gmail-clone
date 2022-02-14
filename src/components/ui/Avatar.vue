<template>
  <div class="w-[2rem] aspect-square rounded-full overflow-hidden">
    <img :src="src" :alt="alt" class="w-full h-full object-cover">
  </div>
</template>

<script>
export default {
  name: 'AvatarComponent',
  props: {
    src: { type: String, default: '' },
    alt: { type: String, default: '' },
  }
}
</script>