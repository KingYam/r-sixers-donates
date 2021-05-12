module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "node_modules/patternomaly/dist/patternomaly.js": "js/patternomaly.js",
        "node_modules/chart.js/dist/chart.min.js": "js/chart.min.js",
        "node_modules/@fortawesome/fontawesome-free/js/all.min.js": "js/all.min.js",
        "node_modules/@fortawesome/fontawesome-free/css/all.min.css": "css/all.min.css",
        "node_modules/@fortawesome/fontawesome-free/webfonts": "webfonts",
        "node_modules/bootstrap/dist/css/bootstrap.min.css": "css/bootstrap.min.css",
    })
    .setTemplateFormats("html,liquid,njk,md");
};