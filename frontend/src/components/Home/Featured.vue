<template>
      <HomeSection>
            <template v-slot:title>
                  <h2>the featured section</h2>
            </template>

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
      </HomeSection>
</template>

<script>
import Product from "@/components/Product.vue";
import HomeSection from "@/layouts/HomeSection.vue";

export default {
      name: "Featured",

      components: {
            Product,
            HomeSection,
      },
};
</script>
