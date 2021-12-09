<template>
      <Box
            id="search-listing"
            :class="{ list: display_mode, grid: !display_mode }"
      >
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
import { mapGetters } from "vuex";

export default {
      name: "Listing",

      components: {
            Product,
      },

      computed: {
            ...mapGetters({
                  display_mode: "features/display_mode",
            }),
      },

      watch: {
            display_mode: (val) => {
                  console.log(val);
            },
      },
};
</script>

<style lang="scss">
#search-listing {
      @include flex(row, flex-start, flex-start, wrap);

      &.list {
            @include flex(column, flex-start, stretch, nowrap);
      }
}
</style>
