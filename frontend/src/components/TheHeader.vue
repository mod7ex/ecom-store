<template>
      <header>
            <div class="container">
                  <router-link :to="{ name: 'home' }">
                        <img class="img-logo" src="@/assets/svg/avatar.svg" />
                  </router-link>

                  <form>
                        <input
                              type="search"
                              placeholder="Search a product, mark, book..."
                              name=""
                              id=""
                        />
                        <button>
                              <router-link :to="{ name: 'search' }"
                                    >Search</router-link
                              >
                        </button>
                  </form>

                  <div ref="menu">
                        <button @click="toggleAuth">Toggle ></button>

                        <ul v-if="authIsVisible">
                              <li>
                                    <router-link :to="{ name: 'login' }"
                                          >Login</router-link
                                    >
                              </li>
                              <li>
                                    <router-link :to="{ name: 'register' }"
                                          >Register</router-link
                                    >
                              </li>
                              <li>
                                    <router-link :to="{ name: 'profile' }"
                                          >Profile</router-link
                                    >
                              </li>

                              <li>
                                    <router-link :to="{ name: 'logout' }"
                                          >Log out</router-link
                                    >
                              </li>
                        </ul>
                  </div>
                  <router-link :to="{ name: 'cart' }">
                        <img src="@/assets/svg/cart.svg" alt="" />
                        <small>Cart</small>
                  </router-link>
            </div>
      </header>
</template>

<script>
export default {
      name: "TheHeader",
      data() {
            return {
                  authIsVisible: false,
            };
      },

      methods: {
            toggleAuth() {
                  this.authIsVisible = !this.authIsVisible;
            },
      },

      mounted() {
            window.onclick = (ev) => {
                  let clickedInside = this.$refs.menu.contains(ev.target);
                  if (!clickedInside) {
                        this.authIsVisible = false;
                  }
            };
      },
};
</script>

<style lang="scss">
header {
      background-color: white;
      padding: $first-height !important;
      margin-bottom: $y-margin * 3 !important;

      .container {
            @include center();
            @include flex();
            flex-wrap: wrap;

            button {
                  @extend .btn;
            }

            div {
                  position: relative;

                  button {
                        background-color: rgba($white-gray, 0.7);
                        box-shadow: none;
                        color: black;
                        &:hover {
                              color: $brand-color;
                              background-color: $white-gray;
                        }
                  }

                  ul {
                        text-align: center;
                        position: absolute;
                        background-color: white;
                        width: 130px;
                        top: 120%;
                        // @include shape-setup();
                        li {
                              padding: $x-padding !important;
                              a {
                                    display: block;
                              }
                              &:hover {
                                    background-color: rgba($white-gray, 0.3);
                              }
                        }
                  }
            }

            form {
                  max-width: $basic-width;
                  flex: 1;
                  @include flex();
                  input[type="search"] {
                        flex: 1;
                        margin-right: $x-margin * 3 !important;
                  }
            }
      }
}
</style>
