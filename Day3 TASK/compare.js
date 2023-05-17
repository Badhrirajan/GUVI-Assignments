function flagdata() {
    const countries = JSON.parse(this.responseText);
    countries.forEach(co => console.log(co.flags));
}

var request = new XMLHttpRequest();
request.addEventListener("load", flagdata);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
