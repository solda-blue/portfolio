<template>
  <div class="container">
    <router-link to="/">
      <button>홈</button>
    </router-link>
    <router-link to="/contact">
      <button>컨택트</button>
    </router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>

export default {

  setup () {
    
    return {}
  }
}
</script>

<style lang="css" scoped src="@/assets/css/App.css">

</style>
