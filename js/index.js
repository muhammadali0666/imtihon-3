const elLists = document.querySelector(".lists");


for ( let creates of pokemons){

  let createLi = document.createElement("li");
  let createImg = document.createElement("img");
  let createDiv = document.createElement("div");
  let createTitle = document.createElement("h5");
  let createtext = document.createElement("p");
  let createP = document.createElement("span");
  let createParagraph = document.createElement("span");
 
  createLi.setAttribute("class", "card mb-3 border  border-2 border-dark rounded-4 p-0 pt-3");
  createLi.style.width = "18rem";
  createImg.classList.add("card-img-top");
  createImg.setAttribute("src",creates.img);
  createDiv.setAttribute("class", "card-body border-2 border-top border-dark fw-bold");
  createTitle.setAttribute("class", "card-title fw-bold");
  createTitle.textContent = creates.name;
  createtext.classList.add("card-text");
  createtext.textContent = creates.type
  createP.classList.add("card-text");
  createP.textContent = creates.weight;
  createP.style.marginRight = "20px"
  createParagraph.textContent = creates.height;
  


  elLists.appendChild(createLi);
  createLi.appendChild(createImg);
  createLi.appendChild(createDiv);
  createDiv.appendChild(createTitle);
  createDiv.appendChild(createtext);
  createDiv.appendChild(createP);
  createDiv.appendChild(createParagraph);

}
  