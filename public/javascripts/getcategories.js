fetch("/data/categories.json").then(function(res) {
    return res.json();
}).then(function(categoriesJson) {    
    pwa.processJSON(categoriesJson);
});