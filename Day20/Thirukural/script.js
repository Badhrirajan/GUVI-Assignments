//function to get details.
function getdetails(){
    let quote = document.getElementById("book")
    
    //Printing random thirukural by giving randomnum
    
    for(let i=1;i<1330;i+=100){
        //fetching the data from api
        fetch(`https://api-thirukkural.vercel.app/api?num=${i}`) /*here i value will change by +100 so we will get random thirukural which matches the number*/
        .then(response => response.json())
        .then((result) => {
            //Printing the data using DOM
            let quote1 = document.createElement('div')
            quote1.setAttribute("class","card mt-4")
            quote1.innerHTML = `<div class="card-header">${result.sect_tam},அதிகாரம்: ${result.chap_tam}</div>
            <div class="card-body">
            <p><b>குறள்: ${result.line1}<br>${result.line2}</b></p>
            <p><b>விளக்கம்: ${result.tam_exp}</b></p>
            </div>
            </div>`;
            //Appending the data
            quote.append(quote1);
        })
        //Error Block
        .catch((error) => {
        console.log(error);
    });
}
}
//function calling
getdetails();