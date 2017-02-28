fetch("/data/categories.json").then(function(res) {
    return res.json();
}).then(function(categoriesJson) {    
    pwa.processJSON(categoriesJson);
});

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
            categoriesContainer.appendChild(card);

        }
    }
        // categoriesContainer.innerHTML = 

};