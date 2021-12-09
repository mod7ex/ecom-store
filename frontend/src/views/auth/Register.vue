<template>
      <Auth :submitValue="'Register'">
            <template v-slot:title>
                  <h2>Register</h2>
            </template>

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
      </Auth>
</template>

<script>
import Auth from "@/layouts/Auth.vue";

export default {
      name: "Register",

      components: {
            Auth,
      },
};
</script>
