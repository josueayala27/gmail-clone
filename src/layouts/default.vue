<template>
  <div class="flex flex-col h-screen">
    <Navbar></Navbar>
    <div class="flex h-full">
      <div class="p-3 w-[16rem] border-r"></div>
      <div class="p-3 w-[22rem] border-r"></div>
      <main class="flex-1 flex-row overflow-hidden">
        <div class="p-3 w-full flex items-center justify-between">
          <div class="flex gap-3 items-center">
            <Avatar
              src="https://images.unsplash.com/photo-1644775110946-86c566b53fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80"
            />
            <p>Mariyam Gucci</p>
          </div>
          <div class="flex items-center gap-x-3">
            <p>Today, 11:02 AM</p>
            <div class="flex gap-x-3">
              <Icon class="cursor-pointer hover:text-gray-600" name="reply" />
              <Icon class="cursor-pointer hover:text-gray-600" name="star" />
              <Icon class="cursor-pointer hover:text-gray-600" name="printer" />
              <Icon
                class="cursor-pointer hover:text-gray-600"
                name="dots-vertical"
              />
            </div>
          </div>
        </div>
        <router-view class="container mx-auto p-3" />
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
