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
                        <div class="subscription-form">
                              <div>
                                    <h5>NEW ON ADNOVADO?</h5>
                                    <small>
                                          Subscribe to our newsletter and get
                                          our best offres!
                                    </small>
                              </div>

                              <form>
                                    <input
                                          type="email"
                                          name=""
                                          id=""
                                          placeholder="E-mail"
                                    />
                                    <input type="submit" value="MAN" />
                                    <input type="submit" value="WOMAN" />
                              </form>
                        </div>
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
      color: $white;
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
                        .subscription-form {
                              form {
                                    margin-top: $first-height !important;
                                    @include flex();
                                    input {
                                          padding: $y-padding 0 !important;
                                          margin: 0 !important;
                                    }
                                    input[type="email"] {
                                          min-width: $basic-height * 2;
                                    }

                                    input[type="submit"] {
                                          margin: 0 $x-margin !important;
                                          min-width: $first-width * 2;
                                          border-width: 1.5px;
                                          border-color: $white;
                                          color: $white;
                                          border-radius: $border-radius * 2;
                                          background-color: transparent;
                                          &:hover {
                                                border-color: $brand-color;
                                                color: $brand-color;
                                          }
                                    }
                              }
                        }
                  }
            }

            &.second {
                  background-color: rgba($black-gray, 0.5);
            }
      }
}
</style>
