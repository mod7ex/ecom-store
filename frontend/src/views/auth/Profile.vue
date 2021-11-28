<template>
      <Auth :submitValue="'Save'" :disabled="true">
            <template v-slot:title>
                  <h2>Profile</h2>
            </template>

            <fieldset disabled="disabled">
                  <div class="form-field">
                        <label for="name">Full name </label>
                        <input
                              type="text"
                              id="name"
                              placeholder="Full name"
                              value="full name"
                        />
                  </div>

                  <div class="form-field">
                        <label for="email">E-mail </label>
                        <input
                              type="email"
                              id="email"
                              placeholder="E-mail"
                              value="mouradex@gmail.com"
                        />
                  </div>

                  <div class="form-field">
                        <label for="password">Password </label>
                        <input
                              type="password"
                              id="password"
                              placeholder="***********"
                              value="password"
                        />
                  </div>
            </fieldset>
      </Auth>
</template>

<script>
import Auth from "@/layouts/Auth.vue";

export default {
      name: "Profile",

      components: {
            Auth,
      },
};
</script>
