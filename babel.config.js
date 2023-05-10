module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["react-native-reanimated/plugin"],
      ["module:react-native-dotenv"],
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["."],
          alias: {
            configuration: "./src/configuration",
            components: "./src/components",
            interfaces: "./src/interfaces",
            constants: "./src/constants",
            services: "./src/services",
            screens: "./src/screens",
            assets: "./src/assets",
            types: "./src/types",
            hooks: "./src/hooks",
            tests: "./src/tests",
          },
        },
      ],
    ],
  };
};
