//Model
const messyDrawer = ['Pen', 'Book', 'Charger', 'Gum', 'Wallet']
let aSecretDrawer = 'Closed Drawer'
let isDrawerOpen = 'false';
let aListOfItems = '';
let whatIsOnButton = 'Open Drawer';

//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <br/>
        <div id="drawer">${aSecretDrawer}</div>
        <br/>
        <div id="theDrawer">${aListOfItems} </div>
        <br/>
        <button id=openOrClose onclick="openTheDraw()">${whatIsOnButton}</button>
        <button onclick="listTheItems()">list items in drawer</button>
        <br/>
        <br/>
        <input id="itemInput" type ="text">
        <br/>
        <button onclick="putInDrawer()">Throw it into the Drawer</button>
        <br/>
        <br/>
        <div>You need you Wallet silly, take that out of the Drawer!</div>
        <button onclick="takeTheWallet()">grab the wallet!</button>


    `;
}

//Controll

function listTheItems() {
    aListOfItems = '';
    for (i = 0; i < messyDrawer.length; i++) {
        aListOfItems += `<li> In ${i} round of looking, I found a ${messyDrawer[i]}</li>`;
    }
    updateView()
}


function openTheDraw() {
    isDrawerOpen = !isDrawerOpen;
    if (isDrawerOpen == true) {
        aSecretDrawer = messyDrawer;
        whatIsOnButton = 'Close Drawer';
    }
    else {
        aSecretDrawer = 'Closed Drawer';
        whatIsOnButton = 'Open Drawer';
    }
    updateView()
}


function putInDrawer() {
    let item = document.getElementById("itemInput").value;
    messyDrawer.push(item)
    listTheItems()
    updateView()
}

function takeTheWallet() {
    messyDrawer.splice(4, 1);
    updateView()
}
