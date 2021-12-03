<template>
      <Block class="cart-total-block">
            <div>
                  <p>Total in $:</p>
                  <h2>717 Dhs</h2>
            </div>
      </Block>
</template>

<script>
export default {
      name: "CartTotal",
};
</script>

<style lang="scss">
.cart-total-block {
      @include center($basic-width * 1.5);
      @include flex(
            $direction: column,
            $justify: space-between,
            $align: flex-end,
            $wrap: nowrap
      );
      div {
            @include flex(
                  $direction: row,
                  $justify: space-between,
                  $align: center,
                  $wrap: nowrap
            );
            h2 {
                  margin-left: $x-margin * 5;
                  color: $brand-color;
            }
      }
}
</style>
