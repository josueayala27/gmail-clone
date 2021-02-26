<template>
    <div class="h-full w-60 hidden lg:flex mf:flex">
        <div class="flex-auto">
            <div class="header p-4">
            <ButtonApp class="w-full"><i class='bx bx-plus mr-4'></i>Compose</ButtonApp>
        </div>
        <div class="mt-3 flex-auto">
            <ItemSidebar :quantity="inbox.length + social.length + promotions.length" active icon="inbox">Inbox</ItemSidebar>
            <ItemSidebar icon="star">Starred</ItemSidebar>
            <ItemSidebar icon="time-five">Snoozed</ItemSidebar>
            <ItemSidebar icon="bookmark-alt">Important</ItemSidebar>
            <ItemSidebar :active="$router.path === '/starred'" icon="navigation">Sent</ItemSidebar>
            <ItemSidebar icon="book">Drafts</ItemSidebar>
            <ItemSidebar icon="x-circle">Spam</ItemSidebar>
        </div>
        </div>
    </div>
</template>

<script>
import ButtonApp from '@/components/ButtonApp.vue'
import ItemSidebar from '@/components/ItemSidebar.vue'
import { mapState } from 'vuex'

export default {
    name: 'SideBar',
    components: {
        ButtonApp,
        ItemSidebar
    },
    computed: {
        ...mapState(['inbox', 'social', 'promotions'])
    },
    mounted() {
        /* console.log(this.$router.currentRoute.fullPath) */
    },
}
</script>