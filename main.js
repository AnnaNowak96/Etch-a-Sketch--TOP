function addGrid() {
    const container = document.querySelector("#box");
    for (i=0; i <256; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        container.appendChild(gridBox);
}
}

function colorGridBlackOld() {
const grids = document.getElementsByClassName("gridBox");
for (let x=0; x<grids.length; x++) {
    grids[x].addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
    })
}}


function colorGridBlackNew() {
const grids = document.getElementsByClassName("newGrid");
for (let x=0; x<grids.length; x++) {
    grids[x].addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
    })
}}

function colorGridBlack () {
let box = document.getElementById("box");
let checkClass = box.getElementsByClassName("gridBox");
if (checkClass.length > 0) {
    colorGridBlackOld();
} else {
    colorGridBlackNew();
}
}

function colorGridRainbowOld () {
const colors = ["#6f2041","#982c52","#d74167","#ff6f8d",
"#ffa3b2","#ffb68d","#ffdb6b","#0971a6","#08b599","#04f395"];
const numberColors = parseInt(colors.length);
const randomColor = colors[Math.floor(Math.random() * numberColors)];

const grids = document.getElementsByClassName("gridBox");
for (let x=0; x<grids.length; x++) {
    grids[x].addEventListener("mouseover", function() {
        const randomColor = colors[Math.floor(Math.random() * numberColors)];
        this.style.backgroundColor = randomColor;
    })
}
}

function colorGridRainbowNew () {
const colors = ["#6f2041","#982c52","#d74167","#ff6f8d",
"#ffa3b2","#ffb68d","#ffdb6b","#0971a6","#08b599","#04f395"];
const numberColors = parseInt(colors.length);
const randomColor = colors[Math.floor(Math.random() * numberColors)];

const grids = document.getElementsByClassName("newGrid");
for (let x=0; x<grids.length; x++) {
    grids[x].addEventListener("mouseover", function() {
        const randomColor = colors[Math.floor(Math.random() * numberColors)];
        this.style.backgroundColor = randomColor;
    })
}
}

function colorGridRainbow() {
let box = document.getElementById("box");
let checkClass = box.getElementsByClassName("gridBox");
if (checkClass.length > 0) {
    colorGridRainbowOld();
} else {
    colorGridRainbowNew();
}
}

function restartGridBox() {
    location.reload();
}


function removeOldDivs () {
const box = document.querySelector("#box");
while (box.firstChild) {
    box.removeChild(box.firstChild);
}}


function changeSize() {
const amountOfDivs = parseInt(prompt("Select the size of a sketch-note (1-100): "));
if (isNaN(amountOfDivs) || amountOfDivs <1 || amountOfDivs > 100) {
    alert("Please give a number between 1-100");
    return;
} 

removeOldDivs();

const box = document.querySelector("#box");

const boxHight = box.clientHeight;
const boxWidth = box.clientWidth;

const newGridBox = Math.floor(amountOfDivs*amountOfDivs);

const newGridHeight = boxHight/amountOfDivs;
const newGridWidth = boxWidth/amountOfDivs;

for (i=0; i<newGridBox; i++) {
    const newGrid = document.createElement("div");
    newGrid.classList.add("newGrid");
    newGrid.setAttribute("style", "height: "+ newGridHeight+ "px; width: "+ newGridWidth+"px");
    box.appendChild(newGrid);
    console.log(document.getElementsByClassName("newGrid").length);
}
}

document.getElementById("black").addEventListener("click", colorGridBlack);
document.getElementById("rainbow").addEventListener("click", colorGridRainbow);
document.getElementById("restart").addEventListener("click",restartGridBox);
document.getElementById("size").addEventListener("click", changeSize);

addGrid();