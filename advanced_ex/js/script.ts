const starters_table = [{
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

function populateHTML(){
    for (let i in starters_table) {
        //The starters Menu
        let foodOutputPrice : string;
        let foodOutputName = starters_table[i].foodName;
        let foodOutputDescription = starters_table[i].foodDescription;
        let foodOutputPrice = starters_table[i].foodPrice;
        let foodOutputImg = starters_table[i].foodImg;
        foodOutputDescription = starters_table[i].foodDescription;
        document.getElementsByTagName("h5")[i].innerText = foodOutputName;
        document.getElementsByClassName("descriptionOutput")[i].innerText = foodOutputDescription;
        document.getElementsByClassName("priceOutput")[i].innerText = foodOutputPrice;
        document.getElementsByClassName("imgOutput")[i].src = foodOutputImg;
        //
    }
}
populateHTML();


