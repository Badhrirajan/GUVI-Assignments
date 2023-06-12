async function getcountrydetails(){
    const cardnode = document.getElementById("cards");
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    data.forEach((ele) => {
        const cardnode1 = document.createElement('div')
        cardnode1.setAttribute("class","card col-lg-4 col-sm-12 mt-2")
        cardnode1.innerHTML = `<div class="card-header"><h6>${ele.name.common}</h6></div>
        <div class="card-body">
          <img src="${ele.flags.png}">
          <p class="card-text"><b>Native Name: ${ele.name.official}</b></p>
          <br><p class="card-text"><b>Region: ${ele.region}</b></p>
          <p class="card-text"><b>Capital: ${ele.capital}</b></p>
          <p class="card-text"><b>Country Code: ${ele.cca3}</b></p>
          <p class="card-text"><b>Population: ${ele.population}</b></p>
          <p class="card-text"><b>Lat,Lng: ${ele.latlng}</b></p>
          <button class="btn btn-primary" onclick=weatherrep() style="hidden"><a href="https://api.openweathermap.org/data/2.5/weather?q=${ele.name.common}&appid=336f3dcd46dcc13d9ac5dc893aee21e1" target="_blank">Click here for weather</button>
        </div>`;
        cardnode.append(cardnode1);
    });
    weatherrep(data)
}

async function weatherrep(data = []){
    let namearray = [];
    data.forEach((ele) => {
      namearray.push(ele.name.common);
    })
    for(let i=0;i<namearray.length;i++){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${namearray[i]}&appid=336f3dcd46dcc13d9ac5dc893aee21e1`)
    const weather = await response.json();
    }
}
weatherrep();
getcountrydetails();