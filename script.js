// document.getElementsByTagName("h3").style.color = "red";
document.getElementById("main-img1").addEventListener("click", () => {
  let target = document.getElementById("main-div");

  const myOuterDiv = document.createElement("div");
  myOuterDiv.setAttribute("class", "card");
  myOuterDiv.style.width = "10rem";
  myOuterDiv.style.margin = "10px";
  myOuterDiv.style.padding = "5px";
  // myOuterDiv.style.backgroundColor = "aqua";
  myOuterDiv.setAttribute("src", "covid19-img/covid19-2.png");
  // myOuterDiv.style.display = "relative";
  // myOuterDiv.style.boxShadow = "5px 20px 20px lightblue";
  // myOuterDiv.style.border = "1px solid blue";
  // myOuterDiv.innerHTML = "i am here";
  myOuterDiv.setAttribute("class", "slide");
  // myOuterDiv.style.zIndex = "10";
  target.appendChild(myOuterDiv);

  const subImage = document.createElement("img");
  subImage.setAttribute("src", "covid19-img/covid19-2.png");
  subImage.style.width = "100%";
  subImage.style.height = "100%";
  myOuterDiv.appendChild(subImage);
});
