<template>
      <div>
            <Box class="form-container">
                  <div class="title">
                        <slot name="title">{Form Title}</slot>
                  </div>

                  <form action="" class="form">
                        <slot>{Form content}</slot>

                        <div class="form-field">
                              <input
                                    class="btn"
                                    type="submit"
                                    :value="submitValue"
                                    :disabled="disabled"
                              />
                        </div>
                  </form>
            </Box>
      </div>
</template>

<script>
export default {
      name: "Auth",

      props: {
            submitValue: {
                  type: String,
                  default: "Submit",
            },

            disabled: {
                  type: Boolean,
                  default: false,
            },
      },
};
</script>

<style lang="scss">
.form-container {
      border-radius: $border-radius * 2 $border-radius * 2 0 0 !important;
      @include center($basic-width * 1.2);
      padding-top: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      .title {
            font-weight: bolder;
            margin-bottom: $y-margin * 7 !important;
            padding: $padding * 3 !important;
            border-radius: $border-radius * 2 $border-radius * 2 0 0;
            background-color: $white-gray;
            color: $black-gray;
      }
}
</style>
