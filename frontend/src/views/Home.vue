<template>
      <TheTopSection />
      <Featured />
      <Category />
</template>

<script>
import TheTopSection from "@/components/Home/TheTopSection.vue";
import Featured from "@/components/Home/Featured.vue";
import Category from "@/components/Home/Category.vue";

export default {
      name: "Home",

      components: {
            TheTopSection,
            Featured,
            Category,
      },
};
</script>
