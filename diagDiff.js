function diagonalDifference(arr) {
    // Write your code here
    var primaryDiff=0;
    var secondaryDiff=0;
    var diagDiff=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]==arr[0] || arr[i]==arr[4] || arr[i]==arr[8]){
            primaryDiff += arr[i];
            // console.log("First if");
            // console.log(primaryDiff);
        }
        if(arr[i]==arr[2] || arr[i]==arr[4] || arr[i]==arr[8]){
            secondaryDiff += arr[i];
            // console.log("Second if");
            // console.log(secondaryDiff);
        }
    }
    diagDiff = primaryDiff - secondaryDiff;
    return diagDiff < 0 ? -diagDiff : diagDiff;
}
console.log(diagonalDifference([1, 2, 3,
                                4, 5, 6,
                                9, 8, 9,  ]))
                                
// The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9=17. Their absolute difference is |15-17|=2.