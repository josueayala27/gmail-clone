<template>
  <div class="flex flex-col h-screen">
    <Navbar></Navbar>
    <div class="flex h-full">
      <div class="w-[16rem] border-r text-sm">
        <p class="text-gray-400 font-semibold text-sm select-none p-3">MENU</p>
        <div
          class="flex cursor-pointer justify-between items-center hover:bg-gray-100 p-3 border-r-[.18rem] border-red-500 text-red-500 gap-x-2"
        >
          <div class="flex gap-x-2">
            <Icon name="inbox" />
            <p class="font-semibold">Inbox</p>
          </div>
          <p class="font-semibold">1</p>
        </div>
        <div
          class="flex cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <Icon class="font-light" name="bell" />
          <p class="font-semibold">Notifications</p>
        </div>
        <div
          class="flex cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <Icon name="annotation" />
          <p class="font-semibold">Sent</p>
        </div>
        <div
          class="flex justify-between cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <div class="flex gap-x-2">
            <Icon name="pencil" />
            <p class="font-semibold">Drafts</p>
          </div>
          <p class="font-semibold text-gray-400">4</p>
        </div>
        <div
          class="flex cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <Icon name="exclamation" />
          <p class="font-semibold">Spam</p>
        </div>
        <div
          class="flex cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <Icon name="trash" />
          <p class="font-semibold">Trash</p>
        </div>
        <p class="text-gray-400 font-semibold text-sm select-none p-3">
          LABELS
        </p>
        <div
          class="flex cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <Avatar
            src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
          />
          <p class="font-semibold">Coding</p>
        </div>
        <div
          class="flex cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <Avatar
            src="https://pbs.twimg.com/profile_images/711985523062128640/cK6ji2TL_400x400.jpg"
          />
          <p class="font-semibold text-[#DA2826]">Youtube</p>
        </div>
        <p class="text-gray-400 font-semibold text-sm select-none p-3">CHATS</p>
        <div
          class="flex justify-between cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <div class="flex gap-x-2 items-center">
            <Avatar
              src="https://ca.slack-edge.com/T0451DWPD-U01698U7X7V-4f00417757ed-72"
            />
            <p class="font-semibold">Josué Montano</p>
          </div>
          <div>
            <Icon
              class="cursor-pointer hover:text-gray-600"
              name="dots-vertical"
            />
          </div>
        </div>
        <div
          class="flex justify-between cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <div class="flex gap-x-2 items-center">
            <Avatar
              src="https://ca.slack-edge.com/T0451DWPD-U01BLHD7CK0-49d34387eb9c-512"
            />
            <p class="font-semibold">Irvin Orantes</p>
          </div>
          <div>
            <Icon
              class="cursor-pointer hover:text-gray-600"
              name="dots-vertical"
            />
          </div>
        </div>
        <div
          class="flex justify-between cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <div class="flex gap-x-2 items-center">
            <Avatar
              src="https://ca.slack-edge.com/T0451DWPD-U027LRM8E1F-1dd933044515-72"
            />
            <p class="font-semibold">Roberto Salmeron</p>
          </div>
          <div>
            <Icon
              class="cursor-pointer hover:text-gray-600"
              name="dots-vertical"
            />
          </div>
        </div>
        <div
          class="flex justify-between cursor-pointer items-center hover:bg-gray-100 p-3 gap-x-2"
        >
          <div class="flex gap-x-2 items-center">
            <Avatar
              src="https://ca.slack-edge.com/T0451DWPD-U01BF9R5PBM-b90b01ddd65a-72"
            />
            <p class="font-semibold">Josué Ayala</p>
          </div>
          <div>
            <Icon
              class="cursor-pointer hover:text-gray-600"
              name="dots-vertical"
            />
          </div>
        </div>
      </div>
      <div class="p-3 w-[22rem] border-r"></div>
      <main class="flex-1 flex-row overflow-hidden">
        <div class="p-3 w-full flex items-center justify-between">
          <div class="flex gap-3 items-center">
            <Avatar
              src="https://images.unsplash.com/photo-1644775110946-86c566b53fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80"
            />
            <p>Mariyam Inoguchi</p>
          </div>
          <div class="flex items-center gap-x-5">
            <p>Today, 11:02 AM</p>
            <div class="border-r h-[2rem]"></div>
            <div class="flex gap-x-5">
              <Icon class="cursor-pointer hover:text-gray-600" name="reply" />
              <Icon class="cursor-pointer hover:text-gray-600" name="bell" />
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
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
