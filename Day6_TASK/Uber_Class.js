class uber {
    constructor(kilometer){
       this.kilometer = kilometer;
    }
    
    calculate(num){
       let km = 8;
       if(num === 0){
          console.log("Please enter valid input")
       } else if(num === 1){
          console.log(`you have travelled ${num} kilometer and your total charge is ${km} rupees`)
       } else{
         let total = num * km;
         console.log(`you have travelled ${num} kilometer and your total charge is ${total} rupees`)
       }
    }
 }
 
 let first = new uber()
 
 console.log(first.calculate(1));