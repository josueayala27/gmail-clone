<template>
  <div id="app" class="flex flex-col h-screen">
    <Navbar />
    <div class="flex h-full">
      <SideBar />
      <div class="flex-auto overflow-auto">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Navbar from '@/components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SideBar,
    Navbar
  },
  computed: {
    ...mapState(['theme'])
  },
  mounted() {
    /* console.log(this.$route.path) */
  },
}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
