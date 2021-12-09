<template>
      <TheTopAdsBanner />
      <TheHeader />
      <div id="content">
            <router-view />
      </div>
      <TheFooter />
</template>

<script>
import TheTopAdsBanner from "@/components/TheTopAdsBanner.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
      components: {
            TheTopAdsBanner,
            TheHeader,
            TheFooter,
      },
};
</script>

<style lang="scss">
#app {
      min-height: 100vh;
      background-color: rgba($white-gray, 0.3);
      #content {
            @include center();
            margin-bottom: $y-margin * 13 !important;
      }
}
</style>
