<template>
      <Box>
            <div class="search-header search-header-up">
                  <h3>Tablets</h3>
                  <div class="filter-by">
                        <h4>filter by</h4>
                        <select name="" id="">
                              <option value="price">Price</option>
                              <option value="name">Name</option>
                              <option value="last_added">Last added</option>
                              <option value="best_sales">Best Sales</option>
                        </select>
                  </div>
            </div>
            <div class="search-header search-header-down">
                  <small>132 result</small>
                  <div class="display-mode">
                        <svg
                              :class="{ 'active-mode': display_mode }"
                              @click="change_display_mode()"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                        >
                              <path
                                    d="M24 3h-12v-2h12v2zm0 3h-12v2h12v-2zm0 5h-12v2h12v-2zm0 5h-12v2h12v-2zm0 5h-12v2h12v-2zm-14-20h-10v10h10v-10zm0 12h-10v10h10v-10z"
                              />
                        </svg>

                        <svg
                              :class="{ 'active-mode': !display_mode }"
                              @click="change_display_mode(false)"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                        >
                              <path
                                    d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z"
                              />
                        </svg>
                  </div>
            </div>
      </Box>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
      name: "Header",

      computed: {
            ...mapGetters({
                  display_mode: "features/display_mode",
            }),
      },

      methods: {
            ...mapActions({
                  change_display_mode: "features/change_display_mode",
            }),
      },
};
</script>

<style lang="scss">
.search-header {
      padding: $padding * 2;

      &.search-header-up {
            @include flex();

            .filter-by {
                  @include flex();

                  h4 {
                        margin: 0 $x-margin * 2;
                  }
            }

            border-bottom: 1px solid rgba($less-important-gray, 0.3);
      }

      &.search-header-down {
            @include flex();

            small {
                  color: $less-important-gray;
            }

            .display-mode {
                  svg {
                        margin: 0 $x-margin;
                        cursor: pointer;

                        &:hover,
                        &.active-mode {
                              fill: $brand-color;
                        }
                  }
            }
      }
}
</style>
