// Exercise 3: Live Character Counter
// Your name: Heather Doland
//
// TODO list:
//   1. Select the textarea, the #remaining paragraph, and the Post button.
//   2. Write a function that calculates characters left (140 minus the length).
//   3. Update the message, and add/remove the warning and over-limit classes.
//   4. Disable the Post button when the count goes below zero.
//   5. Run the function on every 'input' event AND once when the page loads. (Table 1, Section 2)


// 1
const postText = document.querySelector("#postText");
const remaining = document.querySelector("#remaining");
const postBtn = document.querySelector("#postBtn");

const MAX_CHARACTERS = 140;
const WARNING_AT = 20;

// 2-4
function updateCounter() {
    const left = MAX_CHARACTERS - postText.value.length;
    remaining.textContent = `${left} characters remaining`;

    // Update the class for the #remaining paragraph for warning and overlimit 
    remaining.classList.toggle("warning", left < WARNING_AT && left >= 0);
    remaining.classList.toggle("over", left < 0);

    // Disable the post button if characters reamining is less than 0.
    postBtn.disabled = left < 0;
}

// 5 run the function for every input AND once on page load to ensure state of variables
postText.addEventListener("input", updateCounter);
postText.addEventListener("DOMContentLoaded", updateCounter);
