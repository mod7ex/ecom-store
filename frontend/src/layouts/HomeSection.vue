<template>
      <Block>
            <Box>
                  <slot name="title">Title goes here</slot>

                  <div
                        class="home-section-content"
                        @mouseenter="toggle_show_scroll_btn"
                        @mouseleave="toggle_show_scroll_btn"
                  >
                        <span
                              @click="scroll(false)"
                              v-if="show_scroll_btn"
                              class="scroll-btn left"
                        >
                              &#60;
                        </span>

                        <span
                              @click="scroll()"
                              v-if="show_scroll_btn"
                              class="scroll-btn right"
                        >
                              &#62;
                        </span>

                        <div ref="scroll_area" class="scroll-area">
                              <slot>Products goes here</slot>
                        </div>
                  </div>
            </Box>
      </Block>
</template>

<script>
export default {
      name: "HomeSection",

      data: () => {
            return {
                  show_scroll_btn: false,
            };
      },

      methods: {
            toggle_show_scroll_btn() {
                  this.show_scroll_btn = !this.show_scroll_btn;
            },

            scroll(bool = true) {
                  if (bool) {
                        this.$refs.scroll_area.scrollBy(227, 0);
                        return;
                  }

                  this.$refs.scroll_area.scrollBy(-227, 0);
                  return;
            },
      },
};
</script>

<style lang="scss">
.home-section-content {
      position: relative;

      .scroll-area {
            font-size: large;
            margin-top: $y-margin * 5 !important;
            overflow-x: scroll;
            scroll-behavior: smooth;
            &::-webkit-scrollbar {
                  display: none;
            }
            @include flex(row, flex-start, flex-start, nowrap);
      }

      .scroll-btn {
            position: absolute;
            top: 50%;
            z-index: 3;
            background-color: rgba($black-gray, 0.5);
            color: white;
            font-weight: bolder;
            padding: $padding * 2 $padding * 2.7;
            cursor: pointer;
            border-radius: 60%;

            &.left {
                  left: 13px;
            }
            &.right {
                  right: 13px;
            }

            &:hover {
                  background-color: rgba($black-gray, 0.9);
            }
      }
}
</style>
