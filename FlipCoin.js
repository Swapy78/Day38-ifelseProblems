function coinFlip() {
    // Generate a random number between 0 and 1
    const random = Math.random();
  
    // If the random number is less than 0.5, consider it as "Heads", otherwise "Tails"
    if (random < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
  
  function main() {
    // Call the coinFlip() function to simulate the coin flip
    const result = coinFlip();
  
    // Output the result
    console.log("The coin landed on:", result);
  }
  
  main();
  