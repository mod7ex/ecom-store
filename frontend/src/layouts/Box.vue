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

<style lang="scss">
div.box {
      padding: $padding;
      margin: $margin;
      border-radius: $border-radius;
      @include shadow();
}
</style>
