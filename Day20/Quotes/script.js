const btn = document.getElementById("btn")
btn.addEventListener('click',nextquote)

function nextquote(){
    location.reload();
}

function getdetails(){
    const card = document.getElementById("quotes")
    fetch(`https://api.kanye.rest/`)
    .then((response) => response.json())
    .then((res) => {
            const card1 = document.createElement('div')
            card1.innerHTML = `<p class="text-center"><b class="mt-5">Quotes: ${res.quote}</b></p>`
            card.append(card1);
    })
    .catch((error) => {
        console.log(error)
    });
}

getdetails();