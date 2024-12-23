
// let Para = document.getElementById("V101");

// Para.addEventListener("click", () => {
//     alert("You have succesfully added item to cart ");
//     console.log(" You have successfully clicked on the button");
// });

let Paras = document.getElementsByClassName("V101");
for (let i = 0; i < Paras.length; i++) {
    Paras[i].addEventListener("click", () => {
        alert("You have successfully added the item to the cart.");
        console.log("You have successfully clicked on the button.");
    });
}



const Button = document.getElementById("submitbutton");
const Input1 = document.getElementById("receipe-name");
const Input2 = document.getElementById("author-name");
const Input3 = document.getElementById("Famous-state");
const Input4 = document.getElementById("ingredients");
const Input5 = document.getElementById("share-image");
const Input6 = document.getElementById("timing");

Button.addEventListener("click", () => {
    const Value1 = Input1.value;
    const Value2 = Input2.value;
    const Value3 = Input3.value;
    const Value4 = Input4.value;
    const Value5 = Input5.value;
    const Value6 = Input6.value;
    
    localStorage.setItem("Receipe name", Value1);
    localStorage.setItem("Author name", Value2);
    localStorage.setItem("Famous State", Value3);
    localStorage.setItem("Ingredients", Value4);
    localStorage.setItem("Image-link", Value5);
    localStorage.setItem("Preperation timing", Value6);

    alert('Recipe details saved in localStorage!');
});


//----------------------------------------------Local storage for the rating form-------------------------------------------------------------------------------------------------------//

const RatingButton = document.getElementById("Rating-submit-button");

    const RatingInput1 = document.getElementById("Ratinginput1");
    const RatingInput2 = document.getElementById("Ratinginput2");
    const RatingInput3 = document.getElementById("Ratinginput3");

    RatingButton.addEventListener("click", () => {

    const VALUE1 = RatingInput1.value;
    const VALUE2 = RatingInput2.value;
    const VALUE3 = RatingInput3.value;

    localStorage.setItem("Receipe Name " , VALUE1);
    localStorage.setItem("Rating you want " , VALUE2);
    localStorage.setItem("Your Suggestions " , VALUE3);

    alert("You Succesfully gives rating to item");

});

  RatingButton.addEventListener("dblclick", () => {
    localStorage.clear();
});

//-------------------------------------------------Rating form clear data button ---------------------------------------------------------------------------------------//
let RatingClearButton = document.getElementById("Rating-clear-button");

RatingClearButton.addEventListener("click", () => {
    RatingInput1.value = " ";
    RatingInput2.value = " ";
    RatingInput3.value = " ";

    alert("Rating form data is cleared ");

    
    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
});