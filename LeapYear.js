function isLeapYear(year) {
    // Check if the year is a 4-digit number
    if (year < 1000 || year > 9999) {
      return false;
    }
  
    // Check if the year is divisible by 4 and not divisible by 100 unless also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function main() {
    // Get the year from command line arguments
    const args = process.argv.slice(2); // Exclude the first two elements (node path and script name)
    if (args.length !== 1) {
      console.log("Usage: node script.js <year>");
      return;
    }
  
    const year = parseInt(args[0]);
  
    // Check if the year is valid
    if (isNaN(year)) {
      console.log("Please enter a valid year as a 4-digit number.");
      return;
    }
  
    // Call the function to check if the year is a leap year
    const isLeap = isLeapYear(year);
  
    // Output the result
    if (isLeap) {
      console.log(`${year} is a Leap Year.`);
    } else {
      console.log(`${year} is not a Leap Year.`);
    }
  }
  
  main();
