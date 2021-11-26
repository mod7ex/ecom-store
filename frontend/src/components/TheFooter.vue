<template>
      <footer>
            <div class="footer-part first">
                  <div class="section">
                        <div>
                              <img
                                    class="img-logo"
                                    src="@/assets/avatar.png"
                                    alt=""
                              />
                        </div>
                        <form class="form">
                              <input type="email" name="" id="" />
                              <input type="submit" value="MAN" />
                              <input type="submit" value="WOMAN" />
                        </form>
                        <div>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing.
                        </div>
                  </div>
            </div>
            <div class="footer-part second">
                  <div class="section">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius, atque.
                        <hr />
                        <img
                              class="img-logo"
                              src="@/assets/avatar.png"
                              alt=""
                        />
                  </div>
            </div>
      </footer>
</template>

<script>
export default {
      name: "TheFooter",
};
</script>

<style lang="scss" scoped>
footer {
      .footer-part {
            .section {
                  padding: $y-padding * 3 !important;
                  @include center();

                  hr {
                        margin-top: $y-margin * 5 !important;
                  }
            }

            &.first {
                  background-color: $black-gray;
                  .section {
                        @include flex();
                        form {
                              @include flex();

                              input[type="submit"],
                              input[type="button"] {
                                    @include btn(
                                          $bg-color: transparent,
                                          $color: $white,
                                          $fwght: normal
                                    );

                                    @include border();
                              }
                        }
                        input {
                              display: inline !important;
                        }
                  }
            }

            &.second {
                  background-color: rgba($black-gray, 0.5);
            }
      }
}
</style>
