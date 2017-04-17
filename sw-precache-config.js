module.exports = {
  "staticFileGlobs": [
    "public/javascripts/*",
    "public/stylesheets/*",
    "public/images/*",
    "bower_components/*"
  ],

  "stripPrefix": "public",

  "runtimeCaching": [
    {
      "urlPattern": "/data/(.*)json",
      //"urlPattern": "/data/categories.json",
      "handler": "fastest"
    },
    {
      "urlPattern":"/content/(.*)",
      "handler":"cacheFirst"
    }
  ],

  // "navigateFallback": "/app-shell",

  "dynamicUrlToDependencies": {
    "/": [
      "views/index.ejs",
      "views/footer.ejs",
      "views/header.ejs",
    ],
    "/app-shell": [
      "views/content.ejs",
      "views/footer.ejs",
      "views/header.ejs",
    ]
  }
};