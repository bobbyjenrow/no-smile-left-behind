var vars = require("./css.config.json");


module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customMedia: {
          extensions: {
          '--xs': `(min-width: ${vars.bp.xs})`,
          '--sm': `(min-width: ${vars.bp.sm})`,
          '--md': `(min-width: ${vars.bp.md})`,
          '--lg': `(min-width: ${vars.bp.lg})`,
          '--xl': `(min-width: ${vars.bp.xl})`
        }},
        customProperties: {
          variables: {
            headerHeightLs: vars.sizing.headerLs,
            headerHeight: vars.sizing.header,
            footerHeight: vars.sizing.footer,
            navHeightSm: vars.sizing.navHeighSm,
            navHeightLg: vars.sizing.navHeighLg,
            maxWidth: vars.sizing.maxWidth,
            colorPrimaryDark: vars.color.primary,
            colorPrimary: vars.color.primary,
            colorSecondaryDark: vars.color.secondary,
            colorSecondary: vars.color.secondary,
            colorNeutralDark: vars.color.dark,
            colorNeutral: vars.color.neutral,
            colorNeutralLight: vars.color.light,
            colorText: vars.color.dark,
            btnOpacity: vars.color.opacity.btn,
            bgFilterOpacity: vars.color.opacity.bgFilter,
            bgTextOpacity: vars.color.opacity.bgText,
            borderRadius: vars.borderRadius,
            transitionDefault: vars.transition.default,
            shadowLow: vars.color.shadow.low,
            shadowHigh: vars.color.shadow.high,
            headingFam: vars.font.headingFam,
            bodyFam: vars.font.bodyFam,
            remBase: vars.font.rem,
            bpXs: vars.bp.xs,
            bpSm: vars.bp.sm,
            bpMd: vars.bp.md,
            bpLg: vars.bp.lg,
            bpXl: vars.bp.xl,
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
