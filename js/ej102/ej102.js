function sum102(arr, n) {
    // Only change code below this line
  if (n <= 0) {
        return 0;
      } else {
        return sum102(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
  }


valueEj102.append(sum102([1,2,3], 2));