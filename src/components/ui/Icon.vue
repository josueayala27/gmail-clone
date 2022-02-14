<template>
  <div v-html="icon" class="w-[1.5rem] aspect-square stroke-current"></div>
</template>

<script>
import star from "../../assets/icons/star.svg?raw";
import reply from "../../assets/icons/reply.svg?raw";
import printer from "../../assets/icons/printer.svg?raw";
import dotsVertical from "../../assets/icons/dots-vertical.svg?raw";
import paperAirplane from "../../assets/icons/paper-airplane.svg?raw";
import inbox from "../../assets/icons/inbox.svg?raw";
import pencil from "../../assets/icons/pencil.svg?raw";
import trash from "../../assets/icons/trash.svg?raw";
import informationCircle from "../../assets/icons/information-circle.svg?raw";

export default {
  name: "IconComponent",
  data() {
    return {
      icons: {
        star,
        reply,
        printer,
        "dots-vertical": dotsVertical,
        inbox,
        "paper-airplane": paperAirplane,
        pencil,
        "information-circle": informationCircle,
        trash,
      },
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
