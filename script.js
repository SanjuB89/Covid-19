// document.getElementsByTagName("h3").style.color = "red";
document.getElementById("main-img1").addEventListener("click", createButtons);

function createButtons() {
  let target = document.getElementById("main-div");
  const myOuterDiv1 = document.createElement("div");
  const myOuterDiv2 = document.createElement("div");
  const myOuterDiv3 = document.createElement("div");
  const myOuterDiv4 = document.createElement("div");
  // console.log(target.children.length);
  // console.log(target.contains(myOuterDiv1));
  if (target.childElementCount === 1) {
    // console.log(target.children.length);
    // console.log(target.contains(myOuterDiv1));
    // create button
    myOuterDiv1.style.display = "flex";
    myOuterDiv1.style.width = "10rem";
    myOuterDiv1.style.margin = "10px";
    myOuterDiv1.style.padding = "5px";
    myOuterDiv1.setAttribute("src", "covid19-img/covid19-2.png");
    myOuterDiv1.style.position = "absolute";
    myOuterDiv1.style.top = "10px";
    myOuterDiv1.style.right = "10px";
    // myOuterDiv1.style.animation = "slide";
    myOuterDiv1.setAttribute("class", "slide1");
    target.appendChild(myOuterDiv1);

    const subImage1 = document.createElement("img");
    subImage1.setAttribute("src", "covid19-img/covid19-2.png");
    subImage1.style.width = "100%";
    subImage1.style.height = "100%";
    myOuterDiv1.appendChild(subImage1);

    const menuTitle1 = document.createElement("p");
    menuTitle1.innerHTML = "Latest Status";
    menuTitle1.position = "absolute";
    myOuterDiv1.appendChild(menuTitle1);

    //create button
    myOuterDiv2.style.display = "flex";
    myOuterDiv2.style.width = "10rem";
    myOuterDiv2.style.margin = "10px";
    myOuterDiv2.style.padding = "5px";
    myOuterDiv2.setAttribute("src", "covid19-img/covid19-2.png");
    myOuterDiv2.style.position = "absolute";
    myOuterDiv2.style.top = "10px";
    myOuterDiv2.style.left = "10px";
    myOuterDiv2.setAttribute("class", "slide2");
    target.appendChild(myOuterDiv2);

    const subImage2 = document.createElement("img");
    subImage2.setAttribute("src", "covid19-img/covid19-2.png");
    subImage2.style.width = "100%";
    subImage2.style.height = "100%";
    myOuterDiv2.appendChild(subImage2);

    const menuTitle2 = document.createElement("p");
    menuTitle2.innerHTML = "Status By Date";
    menuTitle2.position = "absolute";
    myOuterDiv2.appendChild(menuTitle2);

    //create button
    myOuterDiv3.style.display = "flex";
    myOuterDiv3.style.width = "10rem";
    myOuterDiv3.style.margin = "10px";
    myOuterDiv3.style.padding = "5px";
    myOuterDiv3.setAttribute("src", "covid19-img/covid19-2.png");
    myOuterDiv3.style.position = "absolute";
    myOuterDiv3.style.bottom = "10px";
    myOuterDiv3.style.right = "10px";
    myOuterDiv3.setAttribute("class", "slide3");
    target.appendChild(myOuterDiv3);

    const subImage3 = document.createElement("img");
    subImage3.setAttribute("src", "covid19-img/covid19-2.png");
    subImage3.style.width = "100%";
    subImage3.style.height = "100%";
    myOuterDiv3.appendChild(subImage3);

    const menuTitle3 = document.createElement("p");
    menuTitle3.innerHTML = "Status By country";
    menuTitle3.position = "absolute";
    myOuterDiv3.appendChild(menuTitle3);

    //create button
    myOuterDiv4.style.display = "flex";
    myOuterDiv4.style.width = "10rem";
    myOuterDiv4.style.margin = "10px";
    myOuterDiv1.style.border = "1px solid black";
    myOuterDiv4.style.padding = "5px";
    myOuterDiv4.setAttribute("src", "covid19-img/covid19-2.png");
    myOuterDiv4.style.position = "absolute";
    myOuterDiv4.style.bottom = "10px";
    myOuterDiv4.style.left = "10px";
    myOuterDiv4.setAttribute("class", "slide4");
    target.appendChild(myOuterDiv4);

    const subImage4 = document.createElement("img");
    subImage4.setAttribute("src", "covid19-img/covid19-2.png");
    subImage4.style.width = "100%";
    subImage4.style.height = "100%";
    myOuterDiv4.appendChild(subImage4);

    const menuTitle4 = document.createElement("p");
    menuTitle4.innerHTML = "Status By country";
    menuTitle4.position = "absolute";
    myOuterDiv4.appendChild(menuTitle4);
    console.log(document.getElementById("main-div").children);
  } else {
    const removeList = document.getElementById("main-div");
    // console.log(removeList.children);
    // removeList.removeChild(removeList.childNodes[1]);
    // removeList.removeChild(removeList.childNodes[2]);
    // removeList.removeChild(removeList.childNodes[3]);
    // removeList.removeChild(removeList.childNodes[4]);
  }
}
