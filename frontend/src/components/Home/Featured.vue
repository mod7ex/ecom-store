<template>
      <Block>
            <Box>
                  <h2>the featured section</h2>
                  <div class="featured-items">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                  </div>
            </Box>
      </Block>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
      name: "Featured",

      components: {
            Product,
      },
};
</script>

<style lang="scss">
.featured-items {
      font-size: large;
      margin-top: $y-margin * 5 !important;
      @include flex(row, flex-start, flex-start, wrap);
}
</style>
