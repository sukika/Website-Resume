// TODO 1 (Wednesday): make a variable called siteName on the line below.
const siteName = "Resume"

// TODO 2 (Thursday): make a variable called visitCount holding a number.
let visitCount = 10;

// TODO 3 (Thursday): give visitCount a new, bigger number.
visitCount = 100; 

// TODO 4 (Thursday): make a variable called showNewLabel holding true or false.
 const showNewLabel = false

// Don't change the lines below. They put your variables on the page.
// You'll learn how they work in Week 2 (Hero section).
document.querySelector(".logo").textContent = siteName;
document.querySelector(".visits").textContent = "Visits: " + visitCount;
document.querySelector(".new-label").hidden = !showNewLabel;

document.querySelector("h1").textContent = siteName;

const heroTitle = document.querySelector('h1');
heroTitle.textContent = `Welcome to my ${siteName}`;

let clickCount = 0;

function showMessage() {
     clickCount = clickCount + 1;
     console.log(clickCount);
     document.querySelector("#hero-message").textContent = `You've clicked about ${clickCount} times!`;
}
function resetCount (){
    clickCount = 0;
    document.querySelector("#hero-message").textContent = "The count has reset KEEP CLICKING!!!";
}
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetCount);



const heroButton = document.querySelector("#hero-button");
heroButton.addEventListener("click", showMessage);