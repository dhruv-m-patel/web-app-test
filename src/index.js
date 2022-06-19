const path = require("path");
const WebApp = require("@dhruv-m-patel/web-app");
const { runApp } = require("@dhruv-m-patel/web-app");

const app = WebApp.configureApp({
    paths: {
        routes: path.join(__dirname, "./routes"),
        webpackConfig: path.resolve(__dirname, "../webpack.config.js"),
        staticDirectories: [],
    },
    setup: () => {},
    sessionSecret: null,
});

runApp(app, { port: 3999, appName: "test-app" });
