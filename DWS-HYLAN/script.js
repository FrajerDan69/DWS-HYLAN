
function showText() {
    alert('já jsem alert');

}

const text = document.createElement("p");
text.textContent = "Původní text"; 
document.body.appendChild(text); 


const button = document.createElement("button");
button.textContent = "Klikni a změň text"; 
document.body.appendChild(button); 

button.addEventListener("click", function() {
    text.textContent = "text se změnil"; 
});

function greetUser() {
    const nameInput = document.getElementById('nameinput').value;
    const greetingMessage = document.getElementById('greetingmessage');
    
    if (nameInput) {
        greetingMessage.innerHTML = `Ahoj, ${nameInput}!`;
    } else {
        greetingMessage.innerHTML = 'zadej svoje jméno';
    }
}


function showTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('finaltime').innerHTML = `Čas: ${currentTime}`;
}


function showDate() {
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('finaldate').innerHTML = `Dnešní datum: ${currentDate}`;
}


function pridejTri() {

    let cislo = parseFloat(document.getElementById("cislo").value);

    if (isNaN(cislo)) {
        document.getElementById("vysledek").innerText = "nevypočítám nic pokud nezadáš číslo";
    } else {
        let vysledek = cislo + 3;

        document.getElementById("vysledek").innerText = "Výsledek: " + vysledek;
    }
}


document.getElementById("pridejTriBtn").addEventListener("click", pridejTri);

function soucetCisel() {
    const cislo1 = document.getElementById('number1').value;
    const cislo2 = document.getElementById('number2').value;

    const soucet = parseFloat(cislo1) + parseFloat(cislo2);

    document.getElementById('vysledek').textContent = "Součet je: " + soucet;
}

const image = document.getElementById('myImage');

image.addEventListener('mouseover', function() {
    image.style.transform = 'scale(1.5)'; 
});

image.addEventListener('mouseout', function() {
    image.style.transform = 'scale(1)'; 
});

function addTask() {
    const taskText = document.getElementById('taskInput').value;
    if (taskText === "") return;

    const li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = function() {
        li.style.textDecoration = 'line-through'; // Označení jako dokončený
    };

    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = ""; // Vyčištění vstupu
}