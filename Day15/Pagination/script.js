const perpage = 10;
let pagenumber = 1;
let firstpage = (pagenumber - 1) * perpage;
let lastpage = pagenumber * perpage;
let data = [];

function getuserdetails(result = []){
    let card = document.getElementById('page-content')
    if(result.length > 0){
        result.forEach((ele) => {
            const card1 = document.createElement('tr')
            card1.innerHTML = `
            <td>${ele.id}</td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
          </tr>`;
          card.append(card1);
        })
    }
}

const button0 = document.getElementById('btn0')
const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')
const button5 = document.getElementById('btn5')
const button6 = document.getElementById('btn6')
const button7 = document.getElementById('btn7')
const button8 = document.getElementById('btn8')
const button9 = document.getElementById('btn9')
const button10 = document.getElementById('btn10')
const button11 = document.getElementById('btn11')

button0.addEventListener('click',prevbutton)
button1.addEventListener('click',nextbutton1)
button2.addEventListener('click',nextbutton2)
button3.addEventListener('click',nextbutton3)
button4.addEventListener('click',nextbutton4)
button5.addEventListener('click',nextbutton5)
button6.addEventListener('click',nextbutton6)
button7.addEventListener('click',nextbutton7)
button8.addEventListener('click',nextbutton8)
button9.addEventListener('click',nextbutton9)
button10.addEventListener('click',nextbutton10)
button11.addEventListener('click',nextbutton0)

function nextbutton1(result = []){
    pagenumber = 1
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton2(result = []){
    pagenumber = 2
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton3(result = []){
    pagenumber = 3
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton4(result = []){
    pagenumber = 4
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton5(result = []){
    pagenumber = 5
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton6(result = []){
    pagenumber = 6
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton7(result = []){
    pagenumber = 7
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton8(result = []){
    pagenumber = 8
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton9(result = []){
    pagenumber = 9
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton10(result = []){
    pagenumber = 10
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
}

function nextbutton0(result = []){
    pagenumber += 1;
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage); 
    if(pagenumber > 10){
        location.reload()
    }
}

function prevbutton(result = []){
    pagenumber -= 1
    firstpage = (pagenumber - 1) * perpage;
    lastpage = pagenumber * perpage;
    const container = document.getElementById("page-content")
    container.append(result)
    container.innerHTML = "";
    sliceddata(data,firstpage,lastpage);
    if(pagenumber <= 0){
        location.reload()
    }    
}

function sliceddata(result = [],firstpage = 0,lastpage = 0){
    getuserdetails(result.slice(firstpage,lastpage))
}

async function fetchdata(){
    try {
        const url = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
        const response = await fetch(url);
        const result = await response.json();
        result.forEach((ele) => {
            data.push(ele);
        })
        sliceddata(result, firstpage, lastpage)
        } catch (error) {
            console.log("ERROR", error);
        }
}

fetchdata();