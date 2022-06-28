function abbreviate(string) {
  // + sign in regex not needed
  let arr = string.split(/([-,\s]+)/g);  
/* parentheses split string at these characters but also stores 
   them in array since we need these characters 
   (like commas, dashes and spaces) when we join them back into a string. */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
      arr[i] = arr[i];
    }
    else {
      arr[i] = arr[i][0] + (arr[i].length - 2) + arr[i][arr[i].length - 1];
    }
  }
  return arr.join("");
/* can just join array without parameters since commas, dashes, 
   and spaces are already part of the array. */
}
