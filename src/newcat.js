const catList = [
    "A Boy's Name","true",
    "Candy","true",
    "US Cities","true",
    "Things That Are Cold","true",
    "School Supplies","true",
    "Pro Sports Teams","true",
    "Military Hardware","true",
    "Insects","true",
    "Breakfast Foods","true",
    "Furniture","true",
    "TV Shows","true",
    "Things Found In The Ocean","true",
    "Presidents","true",
    "Product Names","true",
    "Famous Females","true",
    "Medicine/Drugs","true",
    "Things Made Of Metal","true",
    "Hobbies","true",
    "People In Uniform","true",
    "Kinds Of Cheese","true",
    "Things You Plug In","true",
    "Planets","true",
    "Kitchen Appliances","true",
    "Languages","true",
    "Names Used In The Bible","true",
    "Junk Food","true",
    "Things That Grow","true",
    "Companies","true",
    "Articles Of Clothing","true",
    "Desserts","true",
    "Things Found In A Hospital","true",
    "Car Parts","true",
    "Things Found On A Map","true",
    "Athletes","true",
    "4-Letter Words","true",
    "Items In A Refrigerator","true",
    "Cartoon Characters","true",
    "Street Names","true",
    "Things At The Beach","true",
    "Colors","true",
    "Tools","true",
    "Record Albums","true",
    "Things In Outer Space","true",
    "Grocery Items","true",
    "Fairy Tale Characters","true",
    "Singers","true",
    "Things to Drink","true",
    "Foreign Cities","true",
    "Song Titles","true",
    "Things That Are Round","true",
    "Animals In A Zoo","true",
    "Musical Instruments","true",
    "Things That Are Hot","true",
    "Band Names","true",
    "Things In A Bank","true",
    "Book Titles","true",
    "A Girl's Name","true",
    "Clothing Accessories","true",
    "Things To Eat","true",
    "Brands Of Cars","true",
    "Colors In A Rainbow","true",
    "Farm Animals","true",
    "Fictional Characters","true",
    "Things In A Carnival","true",
    "Occupations","true",
    "Tropical Locations","true",
    "Kinds Of Dances","true",
    "Things That Are Square","true",
    "Pizza Toppings","true",
    "Heros","true",
    "Gifts/Presents","true",
    "Terms Of Endearment","true",
    "Hollywood Actors/Actresses","true",
    "Things That Are Black","true",
    "Vehicles","true",
    "Animals","true",
    "College Majors","true",
    "Dairy Products","true",
    "Things In A Souvenir Shop","true",
    "Items In Your Purse/Wallet","true",
    "Movie Titles","true",
    "Sports","true",
    "Ice Cream Flavors","true",
    "World Records","true",
    "Things That Are Sticky","true",
];



for (i=1; i<=12;i++) {

let ranNum=Math.random();

ranNum *=catList.length;

ranNum =Math.floor(ranNum);
console.log(ranNum);

const item=(ranNum%2==0) ? null : ranNum--;

let randomItem=catList[ranNum];
let itemState=catList[ranNum+1];

console.log(ranNum,randomItem,itemState);

catList.splice(ranNum+1,1,"false");

console.log(ranNum,randomItem,itemState);
console.log(catList);

var categories=[];


categories.push(randomItem);
}
console.log(categories);
