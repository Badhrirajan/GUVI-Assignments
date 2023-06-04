function totalpop() {
    const country = JSON.parse(this.responseText);
    const total = country.reduce((currpop,nextelement) => {
       return currpop + nextelement.population;
},0)
     console.log(total);
}

var request = new XMLHttpRequest();
request.addEventListener("load", totalpop);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();