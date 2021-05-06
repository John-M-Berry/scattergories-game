import { useState } from 'react';
import './Categories.css'

const catList = [
    "A Boy's Name",
    "Candy",
    "US Cities",
    "Things That Are Cold",
    "School Supplies",
    "Pro Sports Teams",
    "Military Hardware",
    "Insects",
    "Breakfast Foods",
    "Furniture",
    "TV Shows",
    "Things Found In The Ocean",
    "Presidents",
    "Product Names",
    "Famous Females",
    "Medicine/Drugs",
    "Things Made Of Metal",
    "Hobbies",
    "People In Uniform",
    "Kinds Of Cheese",
    "Things You Plug In",
    "Planets",
    "Kitchen Appliances",
    "Languages",
    "Names Used In The Bible",
    "Junk Food",
    "Things That Grow",
    "Companies",
    "Articles Of Clothing",
    "Desserts",
    "Things Found In A Hospital",
    "Car Parts",
    "Things Found On A Map",
    "Athletes",
    "4-Letter Words",
    "Items In A Refrigerator",
    "Cartoon Characters",
    "Street Names",
    "Things At The Beach",
    "Colors",
    "Tools",
    "Record Albums",
    "Things In Outer Space",
    "Grocery Items",
    "Fairy Tale Characters",
    "Singers",
    "Things to Drink",
    "Foreign Cities",
    "Song Titles",
    "Things That Are Round",
    "Animals In A Zoo",
    "Musical Instruments",
    "Things That Are Hot",
    "Band Names",
    "Things In A Bank",
    "Book Titles",
    "A Girl's Name",
    "Clothing Accessories",
    "Things To Eat",
    "Brands Of Cars",
    "Colors In A Rainbow",
    "Farm Animals",
    "Fictional Characters",
    "Things In A Carnival",
    "Occupations",
    "Tropical Locations",
    "Kinds Of Dances",
    "Things That Are Square",
    "Pizza Toppings",
    "Heros",
    "Gifts/Presents",
    "Terms Of Endearment",
    "Hollywood Actors/Actresses",
    "Things That Are Black",
    "Vehicles",
    "Animals",
    "College Majors",
    "Dairy Products",
    "Things In A Souvenir Shop",
    "Items In Your Purse/Wallet",
    "Movie Titles",
    "Sports",
    "Ice Cream Flavors",
    "World Records"
]

const lists = [
  {
    num: 1,
    categories: [
      "A Boy's Name",
      "US Cities",
      "Things That Are Cold",
      "School Supplies",
      "Pro Sports Teams",
      "Insects",
      "Breakfast Foods",
      "Furniture",
      "TV Shows",
      "Things Found In The Ocean",
      "Presidents",
      "Product Names"
    ]
  },
  {
    num: 2,
    categories: [
      "Famous Females",
      "Medicine/Drugs",
      "Things Made Of Metal",
      "Hobbies",
      "People In Uniform",
      "Things You Plug In",
      "Animals",
      "Languages",
      "Names Used In The Bible",
      "Junk Food",
      "Things That Grow",
      "Companies"
    ]
  },
  {
    num: 3,
    categories: [
      "Articles Of Clothing",
      "Desserts",
      "Car Parts",
      "Things Found On A Map",
      "Athletes",
      "4-Letter Words",
      "Items In A Refrigerator",
      "Farm Animals",
      "Street Names",
      "Things At The Beach",
      "Colors",
      "Tools"
    ]
  },
  {
    num: 4,
    categories: [
      "Heros",
      "Gifts/Presents",
      "Terms Of Endearment",
      "Kinds Of Dances",
      "Things That Are Black",
      "Vehicles",
      "Tropical Locations",
      "College Majors",
      "Dairy Products",
      "Things In A Souvenir Shop",
      "Items In Your Purse/Wallet",
      "World Records"
    ]
  }
];

const Categories = ({ hide, setHide }) => {
  const [list, setList] = useState(0);

  const nextList = () => {
    // Checking if the final list is being displayed (AKA "list" is equal to the final index in the "lists" array)
    if(list < lists.length - 1){
      setList(list + 1);
    } else {
      // Displaying the first list again (AKA The list/object at the index of zero in the "lists" array)
      setList(0);
    }
    // Hides the text/content for the categories (AKA List items) after a new list is displayed
    setHide(true);
  }

  return(
    <div className='Categories'>
      <div className='Categories-Main'>
        <div className="Categories-Main-Top">
          <h1>CATEGORIES</h1>
          <h1>List {lists[list].num}</h1>
        </div>
        <ol className="Categories-Main-Display">
          {/* Using the Map method to create lis (AKA List items) using the categories for the current list. The current list is determind by the current value for the "list" state value. */}
          {lists[list].categories.map(item => (
            // Using the value for the "hide" state/props to determine whether the ".hide" class will be applied to the lis (AKA List items)
            <li className={hide ? 'hide' : null}>{item}</li>
          ))}
        </ol>
      </div>
      <div onClick={nextList} className="Categories-Secondary">
        <h1 className='Categories-Secondary-H1'>NEXT LIST</h1>
      </div>
    </div>
  );
}
export default Categories;