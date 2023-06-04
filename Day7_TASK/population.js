function populationcheck() {
    const country = JSON.parse(this.responseText);
    country.filter((co) => {
        if(co.population < 200000){
            console.log(co.name.common)
        }
    });
}

var request = new XMLHttpRequest();
request.addEventListener("load", populationcheck);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();