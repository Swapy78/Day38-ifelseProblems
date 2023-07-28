function isDateBetweenMarchAndJune(day, month) {
    // Convert day and month to numbers
    day = parseInt(day);
    month = parseInt(month);
  
    // Check if the date is between March 20 and June 20
    if (month === 3 && day >= 20) {
      return true;
    } else if (month > 3 && month < 6) {
      return true;
    } else if (month === 6 && day <= 20) {
      return true;
    } else {
      return false;
    }
  }
  
  function main() {
    // Get day and month from command line arguments
    const args = process.argv.slice(2); // Exclude the first two elements (node path and script name)
    if (args.length !== 2) {
      console.log("Usage: node script.js <day> <month>");
      return;
    }
  
    const day = args[0];
    const month = args[1];
  
    // Check if day and month are valid numbers
    if (isNaN(day) || isNaN(month)) {
      console.log("Please enter valid day and month as numbers.");
      return;
    }
  
    // Call the function to check if the date is between March 20 and June 20
    const result = isDateBetweenMarchAndJune(day, month);
  
    // Output the result
    console.log(result);
  }
  
  main();
  