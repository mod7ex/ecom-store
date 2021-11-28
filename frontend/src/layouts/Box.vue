<template>
      <div class="box" :style="cssProp">
            <slot>Box Default content</slot>
      </div>
</template>

<script>
export default {
      name: "Box",
      props: {
            whiteBackground: {
                  Type: Boolean,
                  default: true,
            },
      },

      computed: {
            cssProp() {
                  return {
                        "background-color": this.whiteBackground
                              ? "white"
                              : "none",
                  };
            },
      },
};
</script>

<style lang="scss" scoped>
.box {
      padding: $padding !important;
      margin: $margin !important;
      border-radius: $border-radius;
      box-shadow: 1px 1px 11px 0 rgba($white-gray, 0.3);
}
</style>
