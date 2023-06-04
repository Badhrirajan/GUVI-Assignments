function countrydetails() {
    const country = JSON.parse(this.responseText);
    country.forEach((co) => console.log(co.name.common,co.capital,co.flag))
}

var request = new XMLHttpRequest();
request.addEventListener("load", countrydetails);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();