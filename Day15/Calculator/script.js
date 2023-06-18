const cal = document.createElement('div')
cal.innerHTML = `<h1 id="title" class="text-center">Calculator TASK</h1>
<p id="description" class="text-center"><b>Simple Calculator Task</b></p>
<div class="container">
<div class="calculator justify-content-center align-items-center">
    <input id="result" type="text" placeholder="0">
    <button id="clear" onclick="Clear()">Cl</button>
    <button onclick="del()">DEL</button>
    <button onclick="display('%')">%</button>
    <button onclick="display('/')">/</button>
    <button onclick="display('7')">7</button>
    <button onclick="display('8')">8</button>
    <button onclick="display('9')">9</button>
    <button onclick="display('*')">*</button>
    <button onclick="display('4')">4</button>
    <button onclick="display('5')">5</button>
    <button onclick="display('6')">6</button>
    <button onclick="display('-')">-</button>
    <button onclick="display('1')">1</button>
    <button onclick="display('2')">2</button>
    <button onclick="display('3')">3</button>
    <button onclick="display('+')">+</button>
    <button onclick="display('.')">.</button>
    <button onclick="display('0')">0</button>
    <button id="equal" onclick="calc()" class="equal">=</button>
</div>
</div>`;
document.body.append(cal)

let output = document.getElementById("result");

function Clear(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}

function display(num){
    output.value += num;
}

function calc(){
    try{
        output.value = eval(output.value)
    }
    catch(error){
        alert("Invalid");
    }
}    