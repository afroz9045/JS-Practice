function fibonacciGenerator (n) {
    let initialNumber = -1;
        let secondNumber = 1;
        let arr =[];
        for (let i = 1; i<=n; i++) {
            let temporaryNumber = initialNumber + secondNumber;
           arr.push(temporaryNumber)
            initialNumber = secondNumber;
            secondNumber = temporaryNumber;
        }
        
        return arr;
    }
    
    console.log(fibonacciGenerator(5));