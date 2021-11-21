<template>
      <TopBanner />
      <Header />
</template>

<script>
import TopBanner from "@/components/TopBanner.vue";
import Header from "@/components/Header.vue";

export default {
      components: {
            TopBanner,
            Header,
      },
};
</script>

<style lang="scss">
@import "@/assets/style/_reset.scss";
@import "@/assets/style/_variables.scss";
@import "@/assets/style/_mixins.scss";
</style>
