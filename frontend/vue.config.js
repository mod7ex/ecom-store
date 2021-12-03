module.exports = {
      css: {
            loaderOptions: {
                  sass: {
                        // import in the same order
                        prependData: `
                        @import "@/assets/sass/main.scss";
            `,
                  },
            },
      },
};

/*
      @import "@/assets/sass/_variables.scss";
      @import "@/assets/sass/_mixins.scss";
      @import "@/assets/sass/_functions.scss";
      @import "@/assets/sass/_reset.scss";
*/
