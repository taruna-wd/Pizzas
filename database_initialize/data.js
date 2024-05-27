const sampleListing =
  [
    {
      title: "Margherita Pizza",
      description: "Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/front-view-pizza-with-cheese-grey-floor_140725-14478.jpg?t=st=1713175878~exp=1713179478~hmac=adfa11e2b7ad1f70f5f2192b293f3bb59e7dbe6e248007e4e86431f5f2b00cd3&w=360",

      },
      price: 200,
      location: "Naples",
      country: "Italy"
    },
    {
      title: "Pepperoni Pizza",
      description: "American favorite with spicy pepperoni slices, tomato sauce, and melted cheese.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?t=st=1713177114~exp=1713180714~hmac=598e7fc1c9d1dbc78d16144aaa0948cde9d9b7591571aea2f94307194007c5b8&w=740",
      },
      price: 500,
      location: "New York City",
      country: "United States"
    },
    {
      title: "Quattro Stagioni Pizza",
      description: "Traditional Italian pizza divided into four sections with artichokes, mushrooms, ham, and olives.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/freshly-baked-homemade-pizza-rustic-wood-table-generated-by-ai_24640-81541.jpg?t=st=1713177153~exp=1713180753~hmac=b15ecb29d6d0e241342bfef1685841d150eec5ed37b6379f35ff28a0ac9ac27b&w=1060",
      },
      price: 500,
      location: "Rome",
      country: "Italy"
    },
    {
      title: "BBQ Chicken Pizza",
      description: "Delicious pizza topped with barbecue sauce, grilled chicken, onions, and cilantro.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/freshly-baked-pizza-rustic-wooden-cutting-board-generated-by-ai_24640-82189.jpg?t=st=1713177232~exp=1713180832~hmac=babe3e9e052f933419795954a334c064013e2de0a201b3f880d7ab2b4481b49f&w=1060",
      },
      price: 450,
      location: "Los Angeles",
      country: "United States"
    },
    {
      title: "Hawaiian Pizza",
      description: "Tropical delight with ham, pineapple, tomato sauce, and cheese.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/front-view-delicious-mushroom-pizza-with-cheese-olives-tomatoes-dark-purple-surface-italy-meal-dough-pizza-food_140725-101411.jpg?t=st=1713177280~exp=1713180880~hmac=76ce1a1cd2e11fd0658773dba0cee192a10e2f001d513213415e69d402a77c8f&w=996",
      },
      price: 460,
      location: "Honolulu",
      country: "United States"
    },
    {
      title: "Mushroom Pizza",
      description: "Simple yet flavorful pizza topped with mushrooms, tomato sauce, and cheese.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/flat-lay-delicious-mushroom-pizza_23-2148601589.jpg?t=st=1713177338~exp=1713180938~hmac=58ccee553c1e0e338c7a4e198624c3dc743dac201e09cbe1598ee5c277c27d15&w=996",
      },
      price: 600,
      location: "Paris",
      country: "France"
    },
    {
      title: "Veggie Supreme Pizza",
      description: "Healthy and delicious pizza loaded with assorted vegetables like bell peppers, onions, tomatoes, and olives.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/creative-arrangement-with-delicious-pizza_23-2148921354.jpg?t=st=1713177394~exp=1713180994~hmac=5cba76b7f8d8c7b235721d323ee64abbac40918269bdb61ae807c4ffa5623530&w=900",
      },
      price: 1200,
      location: "London",
      country: "United Kingdom"
    },
    {
      title: "Neapolitan Pizza",
      description: "Authentic pizza from Naples with simple toppings of tomato sauce, mozzarella cheese, fresh basil, and olive oil.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/top-view-appetizing-pizza-with-black-dough-various-vegetables_181624-48672.jpg?t=st=1713177450~exp=1713181050~hmac=314ce848bd0f62d2972d0e6197ad22d77369493600c4be028465a526783abe46&w=996",

      },
      price: 1000,
      location: "Naples",
      country: "Italy"
    },

    {
      title: "Sicilian Pizza",
      description: "Thick-crust pizza with toppings like tomato sauce, cheese, and optional extras like anchovies or olives.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/pepperoni-pizza-table_140725-9955.jpg?t=st=1713177514~exp=1713181114~hmac=a3d53cc472cf981c5da6994e42e959bb999f7f7218dc67192dab33dc396cc0a6&w=740",

      },
      price: 1300,
      location: "Palermo",
      country: "Italy"
    },
    {
      title: "Meat Lover's Pizza",
      description: "Hearty pizza loaded with various meats such as sausage, pepperoni, bacon, and ham.",
      image: {
        filename: "Listingimage",
        url: "https://as1.ftcdn.net/v2/jpg/03/56/20/74/1000_F_356207490_dJ3bproNdbBQF231flcqNRc6qD3ihO9A.jpg",

      },
      price: 1500,
      location: "Chicago",
      country: "United States"
    },
    {
      title: "Chesses & corn Pizza",
      description: "Flavorful pizza topped with tomato sauce, mozzarella cheese, ham, mushrooms, artichokes, and olives.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/premium-photo/hawaiian-pizza-wood-tray_1339-120076.jpg?w=996",
      },
      price: 1270,
      location: "Naples",
      country: "Italy"
    },
    {
      title: "Pesto Pizza",
      description: "Delicious pizza with pesto sauce, tomatoes, mozzarella cheese, and pine nuts.",
      image: {
        filename: "Listingimage",
        url: "https://img.freepik.com/free-photo/top-view-pizza-with-knife-mint_23-2148357161.jpg?t=st=1713177792~exp=1713181392~hmac=33c22f4942c1f39e419fd87f37b432380baada17b019734b2c8ab50209524e2a&w=996",
      },
      price: 1125,
      location: "Genoa",
      country: "Italy"
    },

    {
      title: "Tandoori  Pizza",
      description: "Indian-inspired pizza with tandoori chicken, onions, peppers, and a spicy yogurt sauce.",
      image: {
        filename: "Listingimage",
        url: " https://img.freepik.com/free-photo/front-view-pizza-with-red-tomatoes-cheese-brown-wooden-round-desk-grey-floor_140725-14480.jpg?t=st=1713177843~exp=1713181443~hmac=e8aee0e6707a6bd347563d8d5db9ebf4e41bb2c84bf889329c23e921af69ae01&w=740", 
        },
      
    price: 1350,
      location: "Mumbai",
      country: "India"
    }
  
  ]

module.exports = { data: sampleListing };