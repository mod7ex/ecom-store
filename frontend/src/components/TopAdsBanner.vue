<template>
      <div id="topbanner">
            <img src="@/assets/ads.gif" alt="" />
      </div>
</template>

<script>
export default {
      name: "TopAdsBanner",
};
</script>

<style lang="scss">
#topbanner {
      @include flex();
      img {
            @extend .center;
      }
      min-height: $first-height * 3;
      background-color: black;
      color: $white;
}
</style>
