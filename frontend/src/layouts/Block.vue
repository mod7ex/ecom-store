<template>
      <div class="block">
            <div class="block-content">
                  <slot>Default content</slot>
            </div>
            <small class="block-badge">adnovado</small>
      </div>
</template>

<script>
export default {
      name: "Block",
};
</script>

<style lang="scss">
.block {
      margin-bottom: $y-between-margin !important;
      small.block-badge {
            color: $brand-color;
            font-weight: bold;
            font-size: 11px;
            display: block;
            text-align: right;
      }
}
</style>
