<template>
      <Auth :submitValue="'Login'">
            <template v-slot:title>
                  <h2>Login</h2>
            </template>

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
      </Auth>
</template>

<script>
import Auth from "@/layouts/Auth.vue";

export default {
      name: "Login",

      components: {
            Auth,
      },
};
</script>
