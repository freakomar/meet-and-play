module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"], //Удалил  "@vue/prettier" ибо конфликтовал с eslint//
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
