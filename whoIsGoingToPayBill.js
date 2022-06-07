var names = ["Afroz khan","Shabaz khan","Syed Ibrahim","John","paul","mohit","parmesh"];
function whosPaying(names) {
        var numberOfPeoples=names.length;
        var randomNumber = Math.floor(Math.random()*numberOfPeoples);
        
        var billPayer = names[randomNumber];
        
        return `${billPayer} is going to buy lunch today!`;   
    }

console.log(whosPaying(names));