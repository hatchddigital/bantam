// Typescript cannot support using import statements with custom
// pathes in require.config; setup requirejs and then import things
// properly in app.ts
declare var require;

// Setup paths
require.config({
    paths: {
        jquery: '../libs/jquery/dist/jquery'
    }
});

// Bootstrap application
require(['main'], function () {});
