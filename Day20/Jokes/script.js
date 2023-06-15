let nextbtn = document.getElementById("btn")
nextbtn.addEventListener('click', nextbutton)

function nextbutton(){
    location.reload()
}

function jokedetails(){
    fetch("https://geek-jokes.sameerkumar.website/api?format=json")
    .then((response) => response.json())
    .then((data) => {
        const joke1 = document.getElementById("jokes")
        joke1.innerText = `Jokes: ${data.joke}`;
    })
    .catch((error) => {
        console.log(error);
    });
}

jokedetails();