<template>
      <form class="form">
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

                  <div class="form-field">
                        <input class="btn" type="submit" value="Save" />
                  </div>
            </fieldset>
      </form>
</template>

<script>
export default {
      name: "Profile",
};
</script>

<style lang="scss"></style>
