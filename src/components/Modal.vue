<template>
  <transition name="modal">
    <div
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen text-sm transition duration-200 mask modal"
    >
      <div class="transition duration-200">
        <div
          :style="`max-width: ${maxWidth}px; min-width: ${minWidth}px`"
          class="overflow-hidden transition duration-300 bg-white rounded-lg"
        >
          <div class="relative p-5">
            <slot name="header" />
            <div
              class="absolute top-0 right-0 p-5 cursor-pointer"
              @click="$emit('close')"
            >
              <i class='bx bx-x bx-sm'></i>
            </div>
            <slot></slot>
          </div>
          <div class="p-5 bg-white">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    /* The minimum width is specified */
    minWidth: { type: String, default: '300' },
    /* The maximun width is specified */
    maxWidth: { type: String, default: '300' }
  }
};
</script>

<style lang="less">
.mask {
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-enter,
.modal-leave-active {
  @apply opacity-0;
}
</style>
