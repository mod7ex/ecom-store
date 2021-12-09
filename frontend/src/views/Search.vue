<template>
      <div id="search-area">
            <Block>
                  <Box>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores sint non illo necessitatibus!
                  </Box>
            </Block>

            <BLock>
                  <Header />
                  <Listing />
            </BLock>
      </div>
</template>

<script>
import Listing from "@/components/search/Listing.vue";
import Header from "@/components/search/Header.vue";

export default {
      name: "Search",

      components: {
            Listing,
            Header,
      },
};
</script>

<style lang="scss">
#search-area {
      display: grid;
      // grid-template-columns: 1fr 2.5fr;
      grid-template-columns: 1fr 3.06fr;
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
}
</style>
