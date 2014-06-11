// Typescript cannot support using import statements with custom
// pathes in require.config; setup requirejs and then import things
// properly in app.ts
declare var require;

// Setup paths
require.config({
    paths: {
        jquery: '../libs/jquery/jquery',
        slide: '../libs/slide/dist/slide.min',
        pinmap: '../libs/pinmap/dist/pinmap.min',
        tabbed: '../libs/tabbed/dist/tabbed.min',
        async: '../libs/requirejs-plugins/src/async'
    }
});

// Bootstrap application
require(['main'], function () {});
