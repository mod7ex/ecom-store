<template>
      <TopAdsBanner />
      <Header />
      <div id="content">
            <router-view />
      </div>
</template>

<script>
import TopAdsBanner from "@/components/TopAdsBanner.vue";
import Header from "@/components/Header.vue";

export default {
      components: {
            TopAdsBanner,
            Header,
      },
};
</script>

<style lang="scss">
#app {
      min-height: 100vh;
      background-color: rgba($white-gray, 0.3);
      #content {
            @extend .center;
      }
}
</style>
