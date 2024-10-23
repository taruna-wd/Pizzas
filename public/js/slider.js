
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")
let carousal = document.querySelector(".carousal")
let listItem = document.querySelector(".carousal .list")
let thumbnail = document.querySelector(".carousal .thumbnail")

let list = document.querySelector(".carousel .list");


let timeRunning = 4000;
let timeAutoNext = 5000;
let runTime ;
let runAutoTime =setTimeout(()=>{
    nextBtn.click()
   }, timeAutoNext) ;

nextBtn.addEventListener("click", () => slide("next"));
prevBtn.addEventListener("click", () => slide("prev"));

function slide(direction) {
  if (direction === "next") {
    list.appendChild(list.firstElementChild);
  } else {
    list.prepend(list.lastElementChild);
  }
  clearTimeout(runAutoTime)
   runAutoTime = setTimeout(()=>{
    nextBtn.click()
   }, timeAutoNext)


}





// filter


// Select all category filters and listings container
const categorys = document.querySelectorAll(".category-item");
const types =  document.querySelectorAll(".type-item")
const listingsContainer = document.getElementById("listings-container");

// Add event listeners to each category item
categorys.forEach(category => {
  category.addEventListener("click", () => {
    const selectedCategory = category.innerText;
    filterListings(selectedCategory);
  });
});
types.forEach(type =>{
  type.addEventListener("click" , ()=>{
    const selectedType = type.innerText
    filterListingtype(selectedType)
  })
})
// Function to filter listings based on category
function filterListings(category) {
  const allFoodItem = listingsContainer.querySelectorAll(".link");
     allFoodItem.forEach(foodItem =>{
      const foodItemCategory = foodItem.getAttribute("data-category")
      console.log(foodItemCategory)
      if(foodItemCategory ===  category || category === "All"){
        foodItem.style.display = "block"
      }else{
        foodItem.style.display = "none"
      }
     })
 
}
function filterListingtype(type){
const allFoodItem = listingsContainer.querySelectorAll(".link");
allFoodItem.forEach(foodItem =>{
  const foodItemType = foodItem.getAttribute("data-type")
  console.log(foodItemType)
  if(foodItemType ===  type || type === "ALL"){
    foodItem.style.display = "block"

  } else {
    foodItem.style.display = "none"
  }
})

}
