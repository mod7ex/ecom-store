<template>
      <TheTopAdsBanner />
      <TheHeader />
      <div id="content">
            <router-view />
      </div>
</template>

<script>
import TheTopAdsBanner from "@/components/TheTopAdsBanner.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
      components: {
            TheTopAdsBanner,
            TheHeader,
      },
};
</script>

<style lang="scss">
#app {
      min-height: 100vh;
      background-color: rgba($white-gray, 0.3);
      #content {
            @include center();
      }
}
</style>
