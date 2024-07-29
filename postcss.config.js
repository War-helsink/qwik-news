export default {
  plugins: {
    tailwindcss: {
      config: "./tailwind.config.ts",
    },
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
  },
}