<template>
      <div class="block">
            <div class="block-content">
                  <slot>Default content</slot>
            </div>
            <small>adnovado</small>
      </div>
</template>

<script>
export default {
      name: "Block",
};
</script>

<style lang="scss" scoped>
.block {
      margin-bottom: $x-margin * 3 !important;
      small {
            color: $brand-color;
            font-weight: bold;
            font-size: 11px;
            display: block;
            text-align: right;
      }
}
</style>
