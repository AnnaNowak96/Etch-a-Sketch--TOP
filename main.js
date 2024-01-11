function addGrid() {
    const container = document.querySelector(".box");
    for (i=0; i <256; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        container.appendChild(gridBox);
}
}

function colorGridBlack() {
const grids = document.getElementsByClassName("gridBox");
for (let x=0; x<grids.length; x++) {
    grids[x].addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
    })
}
}


// function rainbowColor () {
//     const rgbMax = 255;
//     const a = Math.floor(Math.random()*rgbMax);
//     const b = Math.floor(Math.random()*rgbMax);
//     const c = Math.floor(Math.random()*rgbMax);
//     const randomColor = (a, b, c);
//     const grids = document.getElementsByClassName("gridBox");
// for (let x=0; x<grids.length; x++) {
//     grids[x].addEventListener("mouseover", function() {
//         this.style.backgroundColor = randomColor;
//     })
// }
// }


function colorGridRainbow() {
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

function restartGridBox() {
    location.reload();
}

function changeSize() {
    
}

document.getElementById("black").addEventListener("click", colorGridBlack);
document.getElementById("rainbow").addEventListener("click", colorGridRainbow);
document.getElementById("restart").addEventListener("click",restartGridBox);
document.getElementById("size").addEventListener("click", changeSize);

addGrid();


