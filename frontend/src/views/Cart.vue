<template>
      <Block class="cart-articles-container">
            <h1>Cart <small>(2 items)</small></h1>

            <div class="cart-article-headers">
                  <h2 class="cart-article-header article">Article</h2>
                  <h2 class="cart-article-header quantity">Quantity</h2>
                  <h2 class="cart-article-header item-price">Price</h2>
                  <h2 class="cart-article-header sub-total">Sub-total</h2>
            </div>

            <div>
                  <CartArticle />
                  <CartArticle />
                  <CartArticle />
            </div>
      </Block>
      <CartTotal />
</template>

<script>
import CartArticle from "@/components/Cart/CartArticle.vue";
import CartTotal from "@/components/Cart/CartTotal.vue";

export default {
      name: "Cart",
      components: {
            CartArticle,
            CartTotal,
      },
};
</script>

<style lang="scss">
.cart-articles-container {
      @include center($basic-width * 1.5);
      .cart-article-headers {
            @include flex(
                  $direction: row,
                  $justify: stretch,
                  $align: stretch,
                  $wrap: nowrap
            );
            margin-top: $y-margin * 5 !important;

            .cart-article-header {
                  flex: 1;
                  color: rgba($black-gray, 0.7);
                  font-weight: bold;

                  &.article {
                        flex: 2;
                        min-width: $basic-height;
                  }

                  &.quantity {
                        text-align: center;
                        max-width: $basic-height * 0.7;
                  }

                  &.item-price {
                        text-align: center;
                        max-width: $basic-height;
                  }

                  &.sub-total {
                        text-align: center;
                        max-width: $basic-height;
                  }
            }
      }
}
</style>
