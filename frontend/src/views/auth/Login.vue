<template>
      <form class="form">
            <div class="form-field">
                  <label for="email">E-mail </label>
                  <input type="email" id="email" placeholder="E-mail" />
            </div>

            <div class="form-field">
                  <label for="password">Password </label>
                  <input
                        type="password"
                        id="password"
                        placeholder="***********"
                  />
            </div>

            <div class="form-field">
                  <label for="remember">Remember me </label>
                  <input type="checkbox" id="remember" />
            </div>

            <div class="form-field">
                  <input type="submit" value="Login" />
            </div>
      </form>
</template>

<script>
export default {
      name: "Login",
};
</script>

<style lang="scss" scoped></style>
