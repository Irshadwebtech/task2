 // Palindrome Check
function isPalindrome(str) {
    // Implementation of isPalindrome function
  }
  
  function checkPalindrome() {
    const input = document.getElementById('inputPalindrome').value;
    const result = isPalindrome(input) ? 'Yes, it is a palindrome' : 'No, it is not a palindrome';
    document.getElementById('resultPalindrome').innerText = result;
  }
  
  // Min and Max Finder
  function findMinMax() {
    const input = document.getElementById('inputNumbers').value;
    const numbers = input.split(',').map(num => parseInt(num.trim()));
    const result = calculateMinMax(numbers);
    document.getElementById('resultMinMax').innerText = `Min: ${result.min}, Max: ${result.max}`;
  }
  
  // Missing Number Identification
  function findMissingNumber() {
    const series = [11,12,14,15,16,18,19,20];
    const input = document.getElementById('inputMissingNumbers').value;
    const numbers = input.split(',').map(num => parseInt(num.trim()));
    
    const missingNumber = findMissingNumberInSeries(series, numbers);
    document.getElementById('resultMissingNumber').innerText = `Missing number: ${missingNumber}`;
  }
  
  // Function to find missing number in a series
  function findMissingNumberInSeries(series, numbers) {
    for (let i = 0; i < series.length; i++) {
      if (!numbers.includes(series[i])) {
        return series[i];
      }
    }
    return null; // If no missing number found
  }
  
  // Corrected function for Min and Max Finder
  function calculateMinMax(numbers) {
    if (numbers.length === 0) {
      return null; // Handle empty array case
    }
  
    let min = numbers[0];
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    
    return { min, max };
  }
  