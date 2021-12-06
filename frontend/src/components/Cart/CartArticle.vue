<template>
      <div class="cart-article">
            <Box class="article cart-article-section">
                  <img src="https://placeimg.com/70/70/tech" alt="" />
                  <div>
                        <h2>
                              <router-link to="/">
                                    Lorem ipsum dolor sit amet.
                              </router-link>
                        </h2>
                        <span>
                              <router-link to="/">like</router-link>
                              <router-link to="/">delete</router-link>
                        </span>
                  </div>
            </Box>
            <Box class="quantity cart-article-section">
                  <input type="number" step="1" value="1" min="1" max="10" />
            </Box>
            <Box class="item-price cart-article-section">
                  <p>239.00 Dhs</p>
                  <div>
                        <small>599.00 Dhs</small>
                        <small class="economy">Economie : 360.00 Dhs</small>
                  </div>
            </Box>
            <Box class="sub-total cart-article-section">
                  <p>239.00 Dhs</p>
            </Box>
      </div>
</template>

<script>
export default {
      name: "CartArticle",
};
</script>

<style lang="scss">
.cart-article {
      min-height: calc(70px + #{$padding * 2});
      margin-bottom: $margin * 3 !important;
      @include flex(
            $direction: row,
            $justify: stretch,
            $align: stretch,
            $wrap: nowrap
      );
      .cart-article-section {
            margin: 1px !important;
            flex: 1;
            &.article {
                  flex: 2;
                  min-width: $basic-height;
                  @include flex(
                        $direction: row,
                        $justify: flex-start,
                        $align: center,
                        $wrap: nowrap
                  );

                  img {
                        margin-right: $margin * 2;
                  }

                  div {
                        h2 {
                              margin-bottom: $margin * 2;
                        }
                        span {
                              @include flex(
                                    $direction: row,
                                    $justify: space-around,
                                    $align: center
                              );
                        }
                        a {
                              &:hover {
                                    color: $brand-color;
                              }
                        }
                  }
            }

            &.quantity {
                  max-width: $basic-height * 0.7;
                  @include flex(
                        $direction: row,
                        $justify: center,
                        $align: center
                  );
                  input {
                        max-width: $basic-height * 0.5;
                  }
            }
            &.item-price {
                  max-width: $basic-height;
                  @include flex(
                        $direction: column,
                        $justify: space-around,
                        $align: center
                  );

                  div {
                        small {
                              text-align: center;
                              display: block;
                              margin-bottom: $y-margin;
                              &:first-of-type {
                                    text-decoration: line-through;
                                    color: $less-important-gray;
                              }

                              &.economy {
                                    color: green;
                              }
                        }
                  }
            }
            &.sub-total {
                  max-width: $basic-height;
                  @include flex($justify: center, $align: center);
                  p {
                        color: $brand-color;
                  }
            }
      }
}
</style>
