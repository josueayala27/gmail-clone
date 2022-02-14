<template>
  <div class="flex flex-col h-screen">
    <Navbar></Navbar>
    <div class="flex h-full">
      <div class="p-3 w-[16rem] bg-purple-500"></div>
      <div class="p-3 w-[22rem] bg-pink-500"></div>
      <main class="flex-1 bg-yellow-500 flex-row overflow-hidden">
        <div class="p-3 w-full flex items-center">
          <div class="flex gap-3 items-center">
            <Avatar
              src="https://images.unsplash.com/photo-1644760748646-9cbe0f914c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            />
            <p>Josué Ayala</p>
          </div>
          <p>Today, 11:02 AM</p>
          <Icon name="reply" />
          <Icon name="star" />
          <Icon name="printer" />
          <Icon class="hover:text-red-500" name="dots-vertical" />
        </div>
        <router-view class="container mx-auto" />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar.vue";
import Icon from "../components/ui/Icon.vue";
import Avatar from "../components/ui/Avatar.vue";

export default {
  components: { Navbar, Icon, Avatar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
</style>
