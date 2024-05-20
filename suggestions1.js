let suggestions;
fetch("https://api.scryfall.com/catalog/card-names")
    .then((res) => res.json())
    .then((res) => {
        if (res.data.length > 0) {
            suggestions = res.data;
        } else {
            suggestions = [];
        }
    });
