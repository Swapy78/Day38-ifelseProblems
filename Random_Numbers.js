// Function to generate a random 3-digit number between 100 and 999 (inclusive)
function getRandom3DigitNumber() {
    return Math.floor(Math.random() * 900) + 100;
  }
  
  function main() {
    // Generate an array of 5 random 3-digit numbers
    const numbers = [];
    for (let i = 0; i < 5; i++) {
      numbers.push(getRandom3DigitNumber());
    }
  
    // Output the generated array
    console.log("Generated numbers:", numbers);
  
    // Find the minimum and maximum values
    let min_value = numbers[0];
    let max_value = numbers[0];
  
    for (let i = 1; i < 5; i++) {
      const currentNumber = numbers[i];
  
      if (currentNumber < min_value) {
        min_value = currentNumber;
      } else if (currentNumber > max_value) {
        max_value = currentNumber;
      }
    }
  
    // Output the results
    console.log("Minimum value:", min_value);
    console.log("Maximum value:", max_value);
  }
  
  main();
  