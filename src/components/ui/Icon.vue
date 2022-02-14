<template>
  <div v-html="icon" class="w-[1.5rem] aspect-square stroke-current"></div>
</template>

<script>
import star from "../../assets/icons/star.svg?raw";
import reply from "../../assets/icons/reply.svg?raw";
import printer from "../../assets/icons/printer.svg?raw";
import dotsVertical from "../../assets/icons/dots-vertical.svg?raw";

export default {
  name: "IconComponent",
  data() {
    return {
      icons: { star, reply, printer, "dots-vertical": dotsVertical },
    };
  },
  props: {
    name: { type: String, required: true },
  },
  computed: {
    icon() {
      return this.icons[this.name];
    },
  },
};
</script>
