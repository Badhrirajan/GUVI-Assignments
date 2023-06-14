function getmakeupdetails(result = []){
    const makeupdetails = document.getElementById("cards")
    result.forEach((ele) => {
        const makeupcard = document.createElement('div')
        makeupcard.setAttribute('class','text-center')
        makeupcard.setAttribute('id','content-card');
        makeupcard.innerHTML = `<img src="${ele.image_link}" class="rounded" alt="${ele.name}">
        <p class="card-text"><b>Name: ${ele.name}</b></p>
        <p class="card-text"><b>Brand: ${ele.brand}</b></p>
        <p class="card-text"><b>Description: ${ele.description}</b></p>
        <p class="card-text"><b><mark>Price: ${ele.price}</mark></b></p>
        <a href="${ele.product_link}" class="btn btn-primary" target="_blank">Click here to buy!!</a>
      </div>`;
        makeupdetails.appendChild(makeupcard);
    });
}

const perpage = 100;
let pagenumber = 1; 
let firstpage = (pagenumber -1) * perpage;
let lastpage = pagenumber * perpage;
let array = []

const next = document.getElementById('btn2')
const prev = document.getElementById('btn1')

next.addEventListener('click', nextbuttondetails)
prev.addEventListener('click', prevbuttondetails)

function nextbuttondetails(result = []){
    pagenumber += 1;
    firstpage = (pagenumber -1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("cards")
    container.append(result)
    container.innerHTML = "";
    slicedcontent(array,firstpage,lastpage);
    nextpage();
}

function prevbuttondetails(result = []){
    pagenumber -= 1
    firstpage = (pagenumber -1) * perpage;
    lastpage = pagenumber * perpage;
    const container1 = document.getElementById("cards")
    container1.append(result)
    container1.innerHTML = "";
    slicedcontent(array,firstpage,lastpage);
    prevpage();
}

function nextpage(){
    if(pagenumber > 10){
        location.reload(prevbuttondetails)
    }
}

function prevpage(){
    if(pagenumber <= 0){
        location.reload(nextbuttondetails)
    }
}

function slicedcontent(result = [], firstpage = 0, lastpage = 0){
    getmakeupdetails(result.slice(firstpage, lastpage))
}

async function fetchdata(){
    try {
        const url = "https://makeup-api.herokuapp.com/api/v1/products.json";
        const response = await fetch(url);
        const result = await response.json();
        result.forEach((data) => {
            array.push(data);
        })
        slicedcontent(result, firstpage, lastpage)
        } catch (error) {
            console.log("ERROR", error);
        }
}

fetchdata();