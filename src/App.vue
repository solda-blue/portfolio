<template>
  <div class="container">
    <NavPage />
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import NavPage from '@/components/nav/NavPage.vue'
export default {
  
  components : {
    NavPage
  },
  setup () {
    
    return {}
  }
}
</script>

<style lang="css" scoped src="@/assets/css/App.css">

</style>
