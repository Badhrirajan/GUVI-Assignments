function region() {
    const countries = JSON.parse(this.responseText);
    countries.forEach(co => console.log(co.name.official,co.region,co.subregion,co.population));
  }
  
  var request = new XMLHttpRequest();
  request.addEventListener("load", region);
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send();