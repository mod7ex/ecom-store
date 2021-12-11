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
import { mapGetters, mapActions } from "vuex";

export default {
      name: "Listing",

      components: {
            Product,
      },

      methods: {
            ...mapActions({
                  prepare_display_mode: "features/prepare_display_mode",
            }),
      },

      computed: {
            ...mapGetters({
                  display_mode: "features/display_mode",
            }),
      },

      beforeMount() {
            this.prepare_display_mode();
      },

      // watch: {
      //       display_mode: (val) => {
      //             console.log(val);
      //       },
      // },
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
