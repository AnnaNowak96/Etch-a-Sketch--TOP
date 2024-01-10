function addGrid() {
    const container = document.querySelector(".box");
    for (i=0; i <256; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        container.appendChild(gridBox);
}
}

const color = "#000000";
const pixel = document.getElementsByClassName("gridBox");

function colorPixel(event) {
    event.target.style.background = color;
}

for (i=0; i<pixel.length; i++) {
    pixel[i].addEventListener("mouseover", colorPixel);
}

window.addEventListener("load", addGrid);
