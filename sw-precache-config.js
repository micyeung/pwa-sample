module.exports = {
  "staticFileGlobs": [
    "public/javascripts/*",
    "public/stylesheets/*",
    "public/images/*"
  ],

  "stripPrefix": "public",

  "runtimeCaching": [
    {
      //"urlPattern": "/data/(.*)json",
      "urlPattern": "/data/categories.json",
      "handler": "fastest"
    }
  ],

  "navigateFallback": "/",

  "dynamicUrlToDependencies": {
    "/": [
      "views/index.ejs",
      "views/footer.ejs",
      "views/header.ejs"
    ]
  }
};