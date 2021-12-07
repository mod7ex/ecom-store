<template>
      <Box id="search-listing">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
      </Box>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
      name: "Listing",

      components: {
            Product,
      },
};
</script>

<style lang="scss">
#search-listing {
      @include flex(row, flex-start, flex-start, wrap);
}
</style>
