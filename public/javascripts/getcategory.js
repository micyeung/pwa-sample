//fetch("/data/landmarks.json").then(function(res) {
fetch("/data/"+category+".json").then(function(res) {
    return res.json();
}).then(function(POIsJson) {    
    pwa.processPOIsJSON(POIsJson);
    console.log(POIsJson);

});