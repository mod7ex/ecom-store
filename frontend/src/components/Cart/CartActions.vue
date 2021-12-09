<template>
      <Box id="cart-actions">
            <router-link to="/">Continue shopping</router-link>
            <router-link to="/login">Finish your order</router-link>
      </Box>
</template>

<script>
export default {
      name: "CartActions",
};
</script>

<style lang="scss">
#cart-actions {
      @include center($basic-width * 1.5);
      padding: $padding * 3;
      text-align: right;

      a {
            font-weight: bold;
            text-align: center;
            padding: $padding * 2.5 0;
            min-width: $first-width * 4;
            @include shadow();

            &:first-of-type {
                  background-color: white;
                  color: $brand-color;
            }
            &:last-of-type {
                  margin-left: $x-margin * 5;
                  background-color: $brand-color;
                  color: white;

                  &:hover {
                        background-color: rgba($brand-color, 0.9);
                  }
            }
      }
}
</style>
