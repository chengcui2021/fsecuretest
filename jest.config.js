module.exports = {
  // testEnvironment: 'jsdom',
  // transform: {
  //   '^.+.js$': 'babel-jest',
  //   '^.+.vue$': '@vue/vue2-jest',
  // },
  // moduleFileExtensions: ['js', 'vue'],
  // transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // testPathIgnorePatterns: ['<rootDir>/cypress/'],
  // preset: '@vue/cli-plugin-unit-jest'
  verbose: true,
  roots: ["<rootDir>/src/"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    ".*\\.(js)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/src/main.js",
    "!**/src/router/index.js",
  ],
};
