class movies{
    constructor(title,studio,ratings = 'PG'){
       this.title = title;
       this.studio = studio;
       this.ratings = ratings;
    }
    
    getPG(arr){
      let newarray  = [];
      for(let i=0;i<arr.length;i++){
         if(arr[i].ratings === 'PG'){
             newarray.push(arr[i]);
         }
      }
       return newarray;
     }
 }
 
 let mov = new movies();
 let fir = new movies('Veeram','SathyaJothi','PG13');
 let sec = new movies('Vedhalam','SathyaJothi'); //Ratings is not given default will be taken
 let thi = new movies('Vivegam','SathyaJothi','PG');
 let fou = new movies("Viswasam","Sathyajothi",'R');
 let fiv = new movies('Casino Royale','Eon Produtions','PG13')
 let arr = [fir,sec,thi,fou,fiv];
 
 console.log(mov.getPG(arr))