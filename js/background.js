const images = ["canal.jpg", "cat.jpg", "italy.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

// const source = document.querySelector("img");
// source.src = `img/${randomImage}`;

const bgImage = document.createElement("img");
bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
