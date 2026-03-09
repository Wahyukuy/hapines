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
