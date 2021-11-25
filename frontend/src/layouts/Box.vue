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
      @include shape-setup($white-gray);
      padding: $x-padding !important;
      margin: $x-margin !important;
}
</style>
