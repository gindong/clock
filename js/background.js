const images = [
    "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url(img/img${chosenImage}) no-repeat center center fixed`;
document.body.style.backgroundSize = "cover";
//const bgImage = document.createElement("img");
//bgImage.src = `img/img${chosenImage}`;
//document.body.appendChild(bgImage);