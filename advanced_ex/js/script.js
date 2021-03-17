var starters_table = [{
        foodName: "Steak Tartare",
        foodDescription: "Smelly meat and old stuff",
        foodPrice: 25.90,
        foodImg: "img/starter_1.png"
    }, {
        foodName: "Cheese plate",
        foodDescription: "Smelly cheese and lumpy stuff",
        foodPrice: 21.90,
        foodImg: "img/starter_2.png"
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
// for (let i in starters_table) {
//     document.getElementsByTagName("h5")[i].innerText = starters_table[i].foodName;
// }
for (var i in starters_table) {
    var foodOutputName = void 0;
    foodOutputName = starters_table[i].foodName;
    document.getElementsByTagName("h5")[i].innerText = foodOutputName;
}
for (var i in starters_table) {
    var foodOutputDescription = void 0;
    foodOutputDescription = starters_table[i].foodDescription;
    // document.querySelector(".descriptionOutput")[i].innerText = foodOutputDescription;
    console.log(document.getElementsByClassName("descriptionOutput"));
}
