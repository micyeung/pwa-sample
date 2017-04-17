if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/generated-service-worker.js')
    .then(function(reg) {
        console.log("Service worker registration successful " + reg.scope);
    }).catch(function(err) {
        console.log("Service worker registration failed with " + err);
    });
}

var pwa = {
    processJSON: function(jsonData) {
        //console.log('Updating page with JSON', jsonData);

        var canonical = window.location.toString();
        var categoriesContainer = document.querySelector("#categories-container");
        var categoriesJson = jsonData.categories;

        for (var i=0; i<categoriesJson.length; i++) {
            var category = categoriesJson[i];
            console.log(category);

            var card = document.createElement("DIV");
            card.id = "mycard";
            card.className = "demo-card-image mdl-card mdl-shadow--2dp";
            
            var cardExpand = document.createElement("DIV");
            cardExpand.className = "mdl-card__title mdl-card--expand";
            card.appendChild(cardExpand);

            var cardActions = document.createElement("DIV");
            cardActions.className = "mdl-card__actions";
            var cardText = document.createElement("SPAN");
            cardText.className = "demo-card-image__filename";
            cardText.innerHTML = category.desc;  // Assigning text
            cardActions.appendChild(cardText);
            card.appendChild(cardActions);
            
            card.style.backgroundImage = "url('"+category.imageUrl+"')";

            var anchor = document.createElement("A");
            anchor.setAttribute("href","/content/"+category.catLink);
            anchor.appendChild(card);

            categoriesContainer.appendChild(anchor);

        }
    },
    processPOIsJSON: function(jsonData) {
        var canonical = window.location.toString();
        var categoriesContainer = document.querySelector("#categories-container");
        var poisJson = jsonData.pois;
        var ul = document.createElement("UL");

        for (var i=0; i<poisJson.length; i++) {
            var poi = poisJson[i];
            console.log(poi);

            var li = document.createElement("LI");
            li.innerHTML = poi.desc;
            ul.appendChild(li);
        }
        categoriesContainer.appendChild(ul);       
    }
};