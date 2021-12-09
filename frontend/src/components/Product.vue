<template>
      <router-link :to="{ name: 'singleproduct' }">
            <div
                  class="singleProduct"
                  @mouseenter="switchCTA"
                  @mouseleave="switchCTA"
            >
                  <img src="https://placeimg.com/200/200/tech" alt="" />

                  <div class="cta-area">
                        <div class="text-area">
                              <h3 class="name text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Labore?
                              </h3>

                              <div class="price text">
                                    <p>31$</p>
                                    <small>40$</small>
                              </div>
                        </div>

                        <button
                              class="btn"
                              :class="{ hidden: !show_addtocartBTN }"
                        >
                              Add to cart
                        </button>
                  </div>
            </div>
      </router-link>
</template>

<script>
export default {
      name: "Product",

      data() {
            return {
                  show_addtocartBTN: false,
            };
      },

      methods: {
            switchCTA() {
                  this.show_addtocartBTN = !this.show_addtocartBTN;
            },
      },
};
</script>

<style lang="scss">
.singleProduct {
      margin: $margin !important;
      padding: $padding !important;
      border-radius: $border-radius;

      .cta-area {
            .text {
                  padding: $padding !important;

                  &.price {
                        small {
                              text-decoration: line-through;
                              color: $less-important-gray;
                        }
                  }
            }

            button {
                  @include shadow($color: $black-gray, $a: 1px);
                  width: 100%;

                  &.hidden {
                        background-color: transparent;
                        color: transparent;
                        box-shadow: none;
                  }
            }
      }

      transition: all 0.2s ease-in-out;
      &:hover {
            @include shadow();
            transform: scale(1.03);
      }
}

#search-listing {
      &.grid {
            .singleProduct {
                  .cta-area {
                        max-width: 201px;

                        button {
                              &.hidden {
                                    background-color: transparent;
                                    color: transparent;
                                    box-shadow: none;
                              }
                        }
                  }
            }
      }

      &.list {
            .singleProduct {
                  @include flex(
                        $direction: row,
                        $justify: flex-start,
                        $align: stretch,
                        $wrap: nowrap
                  );

                  .cta-area {
                        padding: $padding * 3;
                        flex: 1;

                        @include flex(
                              $direction: column,
                              $justify: space-between,
                              $align: stretch,
                              $wrap: nowrap
                        );

                        .text-area {
                              @include flex(
                                    $direction: row,
                                    $justify: space-between,
                                    $align: flex-start,
                                    $wrap: wrap
                              );

                              .text {
                                    &.name {
                                          max-width: $basic-width * 0.5;
                                    }

                                    &.price {
                                          margin-left: auto;
                                    }
                              }
                        }

                        button {
                              max-width: $basic-width * 0.25;
                              align-self: flex-end;
                        }
                  }
            }
      }
}
</style>
