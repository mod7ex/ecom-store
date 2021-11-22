<template>
      <header>
            <div>
                  <router-link :to="{ name: 'home' }">
                        <img src="@/assets/avatr.png" />
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

                  <ul>
                        <li>
                              <router-link :to="{ name: 'cart' }"
                                    >Cart</router-link
                              >
                        </li>
                        <li>
                              <router-link :to="{ name: 'login' }"
                                    >Login</router-link
                              >
                        </li>
                  </ul>
            </div>
      </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
      padding: $first-height !important;

      div {
            @extend .center;
            @include flex();
            flex-wrap: wrap;
            ul {
                  @include flex();
                  li {
                        padding: 0 17px !important;
                  }
            }

            form {
                  margin: 0 $x-padding * 7 !important;
                  flex: 1;
                  @include flex();
                  input[type="search"] {
                        @extend .input-field;
                        flex: 1;
                  }

                  button {
                        @extend .btn;
                  }
            }
      }
      img {
            height: 70px;
      }
}
</style>
