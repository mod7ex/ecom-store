<template>
      <Block>
            <div id="homeTopSection">
                  <Box>categories</Box>

                  <Box class="slider">slider</Box>

                  <div>
                        <Box class="ad">ad 1</Box>
                        <Box class="ad">
                              <img src="@/assets/img/adbox.gif" alt="" />
                        </Box>
                  </div>
            </div>
      </Block>
</template>

<script>
export default {
      name: "TheTopSection",
};
</script>

<style lang="scss">
#homeTopSection {
      @include flex(row, space-between, stretch);
      .slider {
            flex: 1;
            min-height: $basic-height * 2;
      }

      div {
            .ad {
                  min-height: $basic-height;
                  margin-left: 0 !important;
                  margin-right: 0 !important;
                  padding: 0 !important;
            }
      }
}
</style>
