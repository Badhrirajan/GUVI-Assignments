function asiacheck() {
    const countries = JSON.parse(this.responseText);
    countries.filter((co) => {
        if(co.region === "Asia"){
            console.log(co.name.common)
        }
    });
}

var request = new XMLHttpRequest();
request.addEventListener("load", asiacheck);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();