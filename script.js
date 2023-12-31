const button=document.querySelector("#btn");
const inputText=document.querySelector("#input-text");
const result = document.querySelector("#result");


// add event listener to the button
button.addEventListener("click",() => {
    //  get input value and trim any whitespaces
    const text=inputText.value.trim();

    // check input filed is empty
    if(text.length == 0){
        alert("Input cannot be empty");
        return;
    }


    //  remove any non-alphanumeric chara and convert to lowercase
    const cleantext=text.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    // check if the cleaned text is a palindrome by comparing the original and reversed strings
    const isPalindrome = cleantext === cleantext.split("").reverse("").join("");

    //  create a message based on whther the input is a palindrome or not
    const message= isPalindrome ? `<span>Yes.</span>It's a palindrome!` : `<span>Nope.</span>Not a palindrome!`;


    //  Update the result elements with the msg
    result.innerHTML =message;
    result.classList.remove("error" ,"success");
    setTimeout(() => {
        result.classList.add(isPalindrome ? "success" : "error");
    },10);
});

// shortcut keys that will be disabled
const disabledkeys = ["c", "C", "x", "J", "u", "I"];
const showAlert = e => {
e.preventDefault(); // prevent default behavior
return alert("This feature is restricted!");
}
// call showAlert on mouse right-click
document.addEventListener(" context menu", showAlert);
document.addEventListener("keydown", e => {
// call showAlert, if the pressed key is F12 or matched to disabled keys
if((e. ctrlkey && disabledkeys.includes (e.key)) ||
e.key === "F12") {
showAlert(e);
}
});
