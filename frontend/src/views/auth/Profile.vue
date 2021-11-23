<template>
      <form aria-disabled="true">
            <fieldset disabled="disabled">
                  <div class="form-field text-field">
                        <label for="name">Full name </label>
                        <input
                              type="text"
                              id="name"
                              placeholder="Full name"
                              value="full name"
                        />
                  </div>

                  <div class="form-field text-field">
                        <label for="email">E-mail </label>
                        <input
                              type="email"
                              id="email"
                              placeholder="E-mail"
                              value="mouradex@gmail.com"
                        />
                  </div>

                  <div class="form-field text-field">
                        <label for="password">Password </label>
                        <input
                              type="password"
                              id="password"
                              placeholder="***********"
                              value="password"
                        />
                  </div>

                  <div class="form-field">
                        <input type="submit" value="Save" />
                  </div>
            </fieldset>
      </form>
</template>

<script>
export default {
      name: "Profile",
};
</script>

<style lang="scss" scoped>
form {
      background-color: white;
      padding: 3rem !important;
      .form-field {
            margin-bottom: $y-margin * 7 !important;

            &.text-field {
                  input {
                        margin-top: $y-margin * 2 !important;
                        display: block;
                        width: 100%;
                        @extend .input-field;
                  }
            }
      }
}
</style>
