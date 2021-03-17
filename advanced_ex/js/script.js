var starters_table = [{
        foodName: "Steak Tartare",
        foodDescription: "Smelly meat and old stuff",
        foodPrice: 25.90,
        foodImg: "img/starter_1.png"
    }, {
        foodName: "Cheese plate",
        foodDescription: "Smelly cheese and lumpy stuff",
        foodPrice: 21.90,
        foodImg: "./img/starter_2.png"
    }, {
        foodName: "Avocado salad",
        foodDescription: "Overly ripe avocado with a tomato",
        foodPrice: 19.90,
        foodImg: "img/starter_3.png"
    }, {
        foodName: "Cereal",
        foodDescription: "Dusty cereal without milk",
        foodPrice: 12.90,
        foodImg: "img/starter_4.png"
    }];
function populateHTML() {
    for (var i in starters_table) {
        //The starters Menu
        var foodOutputPrice = void 0;
        var foodOutputName = starters_table[i].foodName;
        var foodOutputDescription = starters_table[i].foodDescription;
        var foodOutputPrice = starters_table[i].foodPrice;
        var foodOutputImg = starters_table[i].foodImg;
        foodOutputDescription = starters_table[i].foodDescription;
        document.getElementsByTagName("h5")[i].innerText = foodOutputName;
        document.getElementsByClassName("descriptionOutput")[i].innerText = foodOutputDescription;
        document.getElementsByClassName("priceOutput")[i].innerText = foodOutputPrice;
        document.getElementsByClassName("imgOutput")[i].src = foodOutputImg;
        //
    }
}
populateHTML();
