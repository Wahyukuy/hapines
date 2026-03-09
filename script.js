const items = document.querySelectorAll(".item");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closeBtn = document.querySelector(".close");

items.forEach(item => {

item.addEventListener("click", () => {

popup.style.display = "flex";
popupContent.innerHTML = "";

let element = item.querySelector("img, video").cloneNode(true);

if(element.tagName === "VIDEO"){
element.controls = true;
element.autoplay = true;
}

popupContent.appendChild(element);

});

});

closeBtn.onclick = () =>{
popup.style.display = "none";
popupContent.innerHTML="";
}

popup.onclick = (e)=>{
if(e.target === popup){
popup.style.display="none";
popupContent.innerHTML="";
}
}

.bubbles span{
position:fixed;
bottom:-100px;
width:20px;
height:20px;
background:rgba(255,255,255,0.3);
border-radius:50%;
animation:bubble 10s linear infinite;
}

.bubbles span:nth-child(1){left:10%; animation-duration:8s;}
.bubbles span:nth-child(2){left:30%; animation-duration:12s;}
.bubbles span:nth-child(3){left:50%; animation-duration:9s;}
.bubbles span:nth-child(4){left:70%; animation-duration:11s;}
.bubbles span:nth-child(5){left:85%; animation-duration:7s;}

@keyframes bubble{
0%{
transform:translateY(0) scale(0.5);
opacity:0;
}
50%{
opacity:1;
}
100%{
transform:translateY(-120vh) scale(1);
opacity:0;
}
}

const items = document.querySelectorAll(".item");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closeBtn = document.querySelector(".close");
const pageContent = document.querySelector(".page-content");

items.forEach(item => {

item.addEventListener("click", () => {

popup.style.display = "flex";
popupContent.innerHTML = "";

let element = item.querySelector("img, video").cloneNode(true);

if(element.tagName === "VIDEO"){
element.controls = true;
element.autoplay = true;
}

popupContent.appendChild(element);

/* aktifkan blur */
pageContent.classList.add("blur");

});

});

closeBtn.onclick = () =>{
popup.style.display = "none";
popupContent.innerHTML="";
pageContent.classList.remove("blur");
}

popup.onclick = (e)=>{
if(e.target === popup){
popup.style.display="none";
popupContent.innerHTML="";
pageContent.classList.remove("blur");
}
}
