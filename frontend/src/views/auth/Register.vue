<template>
      <form class="form">
            <div class="form-field">
                  <label for="name">Full name </label>
                  <input type="text" id="name" placeholder="Full name" />
            </div>

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
                  <label for="remember"
                        >I agree to
                        <a href="#">privacy & security</a> conditions
                  </label>
                  <input type="checkbox" id="agree" />
            </div>

            <div class="form-field">
                  <input type="submit" value="Register" />
            </div>
      </form>
</template>

<script>
export default {
      name: "Register",
};
</script>

<style lang="scss" scoped></style>
