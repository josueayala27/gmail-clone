<template>
    <nav class="h-16 w-full flex items-center justify-between border-b lg:pl-60">
        <button class="focus:outline-none p-4 lg:hidden"><i class='bx bx-menu'></i></button>
        <div class="flex w-full items-center px-4 py-2">
            <input type="text" placeholder="Search email" class="w-full transition duration-300 focus: text-xs p-4 rounded-lg focus:outline-none bg-gray-50">
        </div>
        <div class="pl-10 pr-5 lg:flex mf:flex hidden">
            <Avatar><i class='bx bx-info-circle'></i></Avatar>
            <Avatar><i class='bx bx-cog'></i></Avatar>
            <Avatar><i class='bx bx-transfer-alt'></i></Avatar>
            <Avatar class="ml-2">
                <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="">
            </Avatar>
        </div>

        <Modal v-show="showModal" @close="showModal = false">
            <div>
                Theme Switcher
                <div class="mt-7 flex justify-between">
                    <div @click="$store.theme = 'indigo'" class="h-12 w-12 border-2 hover:border-indigo-600 border-white bg-indigo-400 rounded-full cursor-pointer"></div>
                    <div @click="$store.theme = 'red'" class="h-12 w-12 border-2 hover:border-red-600 border-white bg-red-400 rounded-full cursor-pointer"></div>
                    <div @click="$store.theme = 'yellow'" class="h-12 w-12 border-2 hover:border-yellow-600 border-white bg-yellow-400 rounded-full cursor-pointer"></div>
                    <div @click="$store.theme = 'green'" class="h-12 w-12 border-2 hover:border-green-600 border-white bg-green-400 rounded-full cursor-pointer"></div>
                </div>
            </div>
            <template #actions>
                <div class="flex justify-end">
                    <ButtonApp>Save</ButtonApp>
                </div>
            </template>
        </Modal>

    </nav>
</template>

<script>
import Avatar from '@/components/Avatar'
import Modal from '@/components/Modal.vue'
import ButtonApp from '@/components/ButtonApp.vue'

export default {
    name: 'Navbar',
    components: {
        Avatar,
        Modal,
        ButtonApp
    },
    data() {
        return {
            showModal: false
        }
    },
}
</script>