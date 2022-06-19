const path = require("path");
const WebApp = require("@dhruv-m-patel/web-app");

const config = WebApp.getWebpackConfig(
    process.env.NODE_ENV || "production",
    path.join(__dirname, "./src")
);

module.exports = config;
