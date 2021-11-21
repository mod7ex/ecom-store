<template>
      <header>
            <div>
                  <img src="@/assets/avatr.png" />

                  <form>
                        <input type="search" name="" id="" />
                  </form>

                  <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Cart</a></li>
                  </ul>
            </div>
      </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_mixins.scss";
header {
      div {
            // @include flex(row, space-between, center);
      }
      img {
            height: 70px;
      }
}
</style>
