
function rangeOfNumbers(startNum, endNum) {
    if((endNum-startNum) % 2 == 0){

        if((endNum - startNum) <= 0){
            return [endNum];
        }else{
            const myArray = rangeOfNumbers(startNum +1, endNum-1);
            myArray.push(endNum);
            myArray.unshift(startNum);
            return myArray;
        }
    }
    else{
        if((endNum - startNum) < 0){
            return [];
        }else{
            
            const myArray = rangeOfNumbers(startNum +1, endNum-1);
            myArray.unshift(startNum);
            myArray.push(endNum);
            return myArray;
        }
    }
};

valueEj112a.append(rangeOfNumbers(2, 10));
valueEj112b.append(rangeOfNumbers(4, 9));
