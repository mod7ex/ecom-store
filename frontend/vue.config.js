module.exports = {
      css: {
            loaderOptions: {
                  sass: {
                        prependData: `
                        @import "@/assets/sass/_variables.scss";
                        @import "@/assets/sass/_mixins.scss";
                        @import "@/assets/sass/_reset.scss";
                        @import "@/assets/sass/main.scss";
            `,
                  },
            },
      },
};
