const num = parseInt(prompt("Enter an even number:"));

if (num % 2 === 0) {
    console.log("Next three even numbers:", num + 2, num + 4, num + 6);
} else {
    console.log("Please enter an even number.");
}