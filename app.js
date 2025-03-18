let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h1");
    let randomColor = generateRandomColor();
    h3.innerText = `Current Color: ${randomColor}`;
    
    let div = document.querySelector(".box");
    div.style.backgroundColor = randomColor;

    console.log("Generated Random Color:", randomColor);
});

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
