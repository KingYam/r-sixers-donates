module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "node_modules/patternomaly/dist/patternomaly.js": "js/patternomaly.js"
    });
};