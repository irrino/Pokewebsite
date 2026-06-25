
import * as Data from "./collection.js";



function clearButtonClass(){
    let objects = document.getElementsByClassName("active");
    
    while(objects.length > 0){
        objects[0].classList.remove("active");
    }
}



let promo = document.getElementById("promo");

promo.addEventListener("click", (event)=>{

    clearButtonClass();
    promo.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    for(const [key, val] of Object.entries(Data.promos)){
    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    let source = "./Promos/" + key;
    imCard.innerHTML = `<img src= "${source}">`;
    priceCard.innerHTML = "$" + val + " + Taxes"; 

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});



let vintage = document.getElementById("vintage");

vintage.addEventListener("click", (event)=>{

    clearButtonClass();
    vintage.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    
    for (const [Key, value] of Object.entries(Data.vintage)){

    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    let source = "./Vintage/" + Key;
    imCard.innerHTML = `<img src="${source}">`;
    priceCard.innerHTML = "$"+value + " + Taxes";

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});

let Ex = document.getElementById("Ex");

Ex.addEventListener("click", (event)=>{

    clearButtonClass();
    Ex.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    for(let i=0; i<4; i++){
    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    imCard.innerHTML = "<img src='151pika.jpg'>";
    priceCard.innerHTML = "$30";

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});

let Slabs = document.getElementById("Slabs");

Slabs.addEventListener("click", (event)=>{

    clearButtonClass();
    Slabs.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    for(let i=0; i<5; i++){
    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    imCard.innerHTML = "<img src='151pika.jpg'>";
    priceCard.innerHTML = "$30";

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});

let Ssr = document.getElementById("Ssr");

Ssr.addEventListener("click", (event)=>{

    clearButtonClass();
    Ssr.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    for(let i=0; i<4; i++){
    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    imCard.innerHTML = "<img src='151pika.jpg'>";
    priceCard.innerHTML = "$30";

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});

let Ar = document.getElementById("Ar");

Ar.addEventListener("click", (event)=>{

    clearButtonClass();
    Ar.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    for(let i=0; i<4; i++){
    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    imCard.innerHTML = "<img src='151pika.jpg'>";
    priceCard.innerHTML = "$30";

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});

let Sar = document.getElementById("Sar");

Sar.addEventListener("click", (event)=>{

    clearButtonClass();
    Sar.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    for(let i=0; i<4; i++){
    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    imCard.innerHTML = "<img src='151pika.jpg'>";
    priceCard.innerHTML = "$30";

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});

let Mar = document.getElementById("Mar");

Mar.addEventListener("click", (event)=>{

    clearButtonClass();
    Mar.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    for(const [key, val] of Object.entries(Data.mar)){
    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    let source = "./Mar/" + key;
    imCard.innerHTML = `<img src= "${source}">`;
    priceCard.innerHTML = "$" + val + " + Taxes"; 

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});

let GR = document.getElementById("Hr");

GR.addEventListener("click", (event)=>{

    clearButtonClass();
    GR.classList.add("active");
    let gallery = document.getElementsByClassName("content");
    gallery[0].replaceChildren();

    for(const [key, val] of Object.entries(Data.ghr)){
    let card = document.createElement("div")

    card.className = "card";

    let imCard = document.createElement("div");
    let priceCard = document.createElement("div");

    imCard.className = "image";
    priceCard.className = "price";

    let source = "./Hr/" + key;
    imCard.innerHTML = `<img src= "${source}">`;
    priceCard.innerHTML = "$" + val + " + Taxes"; 

    card.appendChild(imCard);
    card.appendChild(priceCard);
    gallery[0].appendChild(card);
    }
});