<template>
      <div class="singleProduct">
            <img src="https://placeimg.com/200/200/tech" alt="" />

            <div class="desc">Lorem ipsum dolor sit amet.</div>

            <div class="price">
                  <p>31$</p>

                  <small>40$</small>
            </div>
      </div>
</template>

<script>
export default {
      name: "Product",
};
</script>

<style lang="scss">
.singleProduct {
      cursor: pointer;
      margin: $margin !important;
      padding: $padding !important;
      border-radius: $border-radius;
      @include shadow();

      .price {
            small {
                  text-decoration: line-through;
            }
      }

      transition: all 0.2s ease-in-out;
      &:hover {
            transform: scale(1.03);
      }
}
</style>
