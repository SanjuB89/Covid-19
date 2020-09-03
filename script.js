// document.getElementsByTagName("h3").style.color = "red";
document.getElementById("picture-div").addEventListener("click", createButtons);

function createButtons() {
  let target = document.getElementById("main-div");
  const myOuterDiv1 = document.createElement("div");
  const myOuterDiv2 = document.createElement("div");
  const myOuterDiv3 = document.createElement("div");
  const myOuterDiv4 = document.createElement("div");
  const myOuterDiv5 = document.createElement("div");
  // console.log(target.children.length);
  // console.log(target.contains(myOuterDiv1));
  if (target.childElementCount === 1) {
    // console.log(target.children.length);
    // console.log(target.contains(myOuterDiv1));
    // create button
    console.log("inside if");
    myOuterDiv1.style.display = "flex";
    myOuterDiv1.setAttribute("id", "menu1");
    myOuterDiv1.style.width = "10rem";
    myOuterDiv1.style.margin = "10px";
    // myOuterDiv1.style.border = "1px solid black";
    myOuterDiv1.style.padding = "5px";
    //myOuterDiv1.setAttribute("src", "covid19-img/covid19-2.png");
    myOuterDiv1.style.position = "absolute";
    myOuterDiv1.style.top = "10px";
    myOuterDiv1.style.right = "10px";
    myOuterDiv1.setAttribute("class", "slide1");
    // myOuterDiv1.flexDirection = "column"
    // myOuterDiv1.style.animation = "slide";
    //myOuterDiv1.setAttribute("class", "slide1");
    target.appendChild(myOuterDiv1);

    // document.getElementById("picture-div").style.border = "2px solid blue";

    const subImage1 = document.createElement("input");
    subImage1.setAttribute("type", "image");
    subImage1.setAttribute("src", "covid19-img/covid19-3.png");
    subImage1.setAttribute("id", "subImage1");
    subImage1.style.width = "100%";
    subImage1.style.height = "100%";
    myOuterDiv1.appendChild(subImage1);

    const menuTitle1 = document.createElement("p");
    menuTitle1.setAttribute("id", "menuTitle1");
    menuTitle1.setAttribute("class", "text-block");
    menuTitle1.style.textAlign = "center";
    menuTitle1.innerHTML = "Latest Status";
    menuTitle1.position = "absolute";
    myOuterDiv1.appendChild(menuTitle1);

    //create button
    myOuterDiv2.style.display = "flex";
    myOuterDiv2.setAttribute("id", "menu2");
    myOuterDiv2.style.width = "10rem";
    myOuterDiv2.style.margin = "10px";
    // myOuterDiv2.style.border = "1px solid black";
    myOuterDiv2.style.padding = "5px";
    myOuterDiv2.style.position = "absolute";
    myOuterDiv2.style.top = "10px";
    myOuterDiv2.style.left = "10px";
    myOuterDiv2.setAttribute("class", "slide2");
    target.appendChild(myOuterDiv2);

    const subImage2 = document.createElement("input");
    subImage2.setAttribute("type", "image");
    subImage2.setAttribute("src", "covid19-img/covid19-3.png");
    subImage2.setAttribute("id", "subImage2");
    subImage2.style.width = "100%";
    subImage2.style.height = "100%";
    myOuterDiv2.appendChild(subImage2);

    const menuTitle2 = document.createElement("p");
    menuTitle2.setAttribute("id", "menuTitle2");
    menuTitle2.setAttribute("class", "text-block");
    menuTitle2.style.textAlign = "center";
    menuTitle2.innerHTML = "Status By Date";
    menuTitle2.position = "absolute";
    myOuterDiv2.appendChild(menuTitle2);

    //create button
    myOuterDiv3.style.display = "flex";
    myOuterDiv3.setAttribute("id", "menu3");
    myOuterDiv3.style.width = "10rem";
    myOuterDiv3.style.margin = "10px";
    // myOuterDiv3.style.border = "1px solid black";
    myOuterDiv3.style.padding = "5px";
    myOuterDiv3.style.position = "absolute";
    myOuterDiv3.style.bottom = "10px";
    myOuterDiv3.style.right = "10px";
    myOuterDiv3.setAttribute("class", "slide3");
    target.appendChild(myOuterDiv3);

    const subImage3 = document.createElement("input");
    subImage3.setAttribute("type", "image");
    subImage3.setAttribute("src", "covid19-img/covid19-3.png");
    subImage3.setAttribute("id", "subImage3");
    subImage3.style.width = "100%";
    subImage3.style.height = "100%";
    myOuterDiv3.appendChild(subImage3);

    const menuTitle3 = document.createElement("p");
    menuTitle3.setAttribute("id", "menuTitle3");
    menuTitle3.setAttribute("class", "text-block");
    menuTitle3.style.textAlign = "center";
    menuTitle3.innerHTML = "Status By country";
    menuTitle3.position = "absolute";
    myOuterDiv3.appendChild(menuTitle3);

    //create button
    myOuterDiv4.style.display = "flex";
    myOuterDiv4.setAttribute("id", "menu4");
    myOuterDiv4.style.width = "10rem";
    myOuterDiv4.style.margin = "10px";
    // myOuterDiv4.style.border = "1px solid black";
    myOuterDiv4.style.padding = "5px";
    // myOuterDiv4.setAttribute("src", "covid19-img/covid19-2.png");
    myOuterDiv4.style.position = "absolute";
    myOuterDiv4.style.bottom = "10px";
    myOuterDiv4.style.left = "10px";
    myOuterDiv4.setAttribute("class", "slide4");
    target.appendChild(myOuterDiv4);

    const subImage4 = document.createElement("input");
    subImage4.setAttribute("type", "image");
    subImage4.setAttribute("src", "covid19-img/covid19-3.png");
    subImage4.setAttribute("id", "subImage4");
    subImage4.style.width = "100%";
    subImage4.style.height = "100%";
    myOuterDiv4.appendChild(subImage4);

    const menuTitle4 = document.createElement("p");
    menuTitle4.setAttribute("id", "menuTitle4");
    menuTitle4.setAttribute("class", "text-block");
    menuTitle4.style.textAlign = "center";
    menuTitle4.innerHTML = "Prediction By country";
    menuTitle4.position = "absolute";
    myOuterDiv4.appendChild(menuTitle4);
    console.log(document.getElementById("main-div").children);

    //create button
    myOuterDiv5.style.display = "flex";
    myOuterDiv5.setAttribute("id", "menu5");
    myOuterDiv5.setAttribute("align", "center");
    myOuterDiv5.style.width = "10rem";
    myOuterDiv5.style.margin = "10px";
    // myOuterDiv5.style.border = "1px solid black";
    myOuterDiv5.style.padding = "5px";
    // myOuterDiv5.setAttribute("src", "covid19-img/covid19-2.png");
    myOuterDiv5.style.position = "absolute";
    myOuterDiv5.style.top = "10px";
    myOuterDiv5.setAttribute("class", "slide5");
    target.appendChild(myOuterDiv5);

    const subImage5 = document.createElement("input");
    subImage5.setAttribute("type", "image");
    subImage5.setAttribute("src", "covid19-img/covid19-2.png");
    subImage5.setAttribute("id", "subImage5");
    subImage5.style.width = "100%";
    subImage5.style.height = "100%";
    myOuterDiv5.appendChild(subImage5);

    const menuTitle5 = document.createElement("p");
    menuTitle5.setAttribute("id", "menuTitle5");
    menuTitle5.setAttribute("class", "text-block");
    menuTitle5.style.textAlign = "center";
    menuTitle5.innerHTML = "Timeline by Country";
    menuTitle5.position = "absolute";
    myOuterDiv5.appendChild(menuTitle5);
    console.log(document.getElementById("main-div").children);

    // clicking sub-menus
    myOuterDiv1.addEventListener("click", openDisplay);
    myOuterDiv2.addEventListener("click", openDisplay);
    myOuterDiv3.addEventListener("click", openDisplay);
    myOuterDiv4.addEventListener("click", openDisplay);
    myOuterDiv5.addEventListener("click", openDisplay);

    function openDisplay() {
      //make all picture buttons relative and fix the top right bottom and left
      myOuterDiv1.style.position = "relative";
      myOuterDiv1.style.top = "10px";
      myOuterDiv1.style.right = "0px";

      myOuterDiv2.style.position = "relative";
      myOuterDiv2.style.top = "5px";
      myOuterDiv2.style.left = "0px";

      myOuterDiv3.style.position = "relative";
      myOuterDiv3.style.top = "10px";
      myOuterDiv3.style.bottom = "0px";
      myOuterDiv3.style.right = "0px";

      myOuterDiv4.style.position = "relative";
      myOuterDiv4.style.top = "5px";
      myOuterDiv4.style.bottom = "0px";
      myOuterDiv4.style.left = "0px";

      myOuterDiv5.style.position = "relative";
      myOuterDiv5.style.top = "5px";
      myOuterDiv5.style.bottom = "0px";
      myOuterDiv5.style.left = "0px";

      //resize main image
      const mainImage = document.getElementById("img-div");
      mainImage.style.height = "200px";
      mainImage.style.width = "200px";

      // target.style.border = "1px solid black";
      target.style.flexDirection = "row";
      target.style.transition = "2s";
      target.style.flexWrap = "wrap";
      // target.style.height = "auto";
      // target.style.justifyContent = "flex-start";
      target.style.alignItems = "flex-start";

      const breakFlex = document.createElement("div");
      breakFlex.setAttribute("class", "break");
      target.appendChild(breakFlex);

      const tableDiv = document.createElement("div");
      tableDiv.setAttribute("id", "tableOutline");
      if (!target.contains(document.getElementById("tableOutline"))) {
        tableDiv.style.height = "auto";
        tableDiv.style.width = "100%";
        // tableDiv.style.border = "1px solid black";
        target.appendChild(tableDiv);
        target.style.height = "auto";
      }

      //console.log(target.contains(document.getElementById("tableOutline")));

      //Process Table
      const currentElementId = event.target.getAttribute("id");
      let url = "";
      let country = "";
      //console.log("i am clicked" + currentElementId);
      //console.log(currentElementId);
      switch (currentElementId) {
        case "main-img1":
          break;
        case "menuTitle1":
        case "myOuterDiv1":
        case "subImage1":
          // latestUpdate(currentElementId);
          url = "https://covid19-backend-2020.herokuapp.com/latest-status";
          axios.get(url).then((response) => {
            covidTable(response.data);
          });
          break;
        case "menuTitle2":
        case "myOuterDiv2":
        case "subImage2":
          country = prompt(
            "Enter country name (eg: 'us' for United States, 'np' for Nepal)"
          );
          const date = prompt("Enter date in Format(yyyy-mm-dd)");
          url = `https://covid19-backend-2020.herokuapp.com/country-date/${country}?date=${date}`;
          axios.get(url).then((response) => {
            covidTable([response.data]);
          });
          break;
        case "menuTitle3":
        case "myOuterDiv3":
        case "subImage3":
          country = prompt(
            "Enter country name (eg: 'us' for United States, 'np' for Nepal)"
          );
          url = `https://covid19-backend-2020.herokuapp.com/difference-by-country/${country}`;
          axios.get(url).then((response) => {
            covidTable([response.data]);
            console.log(response.data);
          });
          break;
        case "menuTitle4":
        case "myOuterDiv4":
        case "subImage4":
          // /prediction-by-country/:country
          country = prompt(
            "Enter country name (eg: 'us' for United States, 'np' for Nepal)"
          );
          url = `https://covid19-backend-2020.herokuapp.com/prediction-by-country/${country}`;
          axios.get(url).then((response) => {
            covidTable(response.data);
            console.log(response.data);
          });
          break;
        case "menuTitle5":
        case "myOuterDiv5":
        case "subImage5":
          country = prompt(
            "Enter country name (eg: 'us' for United States, 'np' for Nepal)"
          );
          url = `https://covid19-backend-2020.herokuapp.com/timeline-by-country/${country}`;
          axios.get(url).then((response) => {
            covidTable([response.data]);
            console.log(response.data);
          });

          break;
      }

      // Target Html Body for Table placement
      function covidTable(list) {
        //clean up data before population another table
        let tableData = document.getElementById("tableOutline");
        if (tableData.childElementCount > 0) {
          tableData.innerHTML = "";
        }

        //gives you the number of rows from list
        console.log(list.length);
        // gives you the numbe of column
        console.log(Object.keys(list[0]).length);

        const tableDiv = document.createElement("div");
        tableDiv.setAttribute("id", "tableDiv");
        document.getElementById("tableOutline").appendChild(tableDiv);

        const tbl = document.createElement("TABLE");
        tbl.setAttribute("class", "table table-hover");
        tableDiv.appendChild(tbl);

        const thead = document.createElement("tHead");
        tbl.appendChild(thead);
        const row = document.createElement("tr");
        row.setAttribute("align", "center");
        thead.appendChild(row);

        const thVar = document.createElement("th");
        thVar.setAttribute("scope", "col");
        thVar.innerHTML = "#";
        row.appendChild(thVar);

        const keys = Object.keys(list[0]);
        const headerList = [];
        const regex_remove = /_/gi;
        //process keys into headers
        for (let index = 0; index < keys.length; index++) {
          var editedHeader = keys[index].replace(regex_remove, " ");
          headerList.push(editedHeader);
        }
        console.log(headerList);

        for (let index = 0; index < headerList.length; index++) {
          const thKey = document.createElement("th");
          thKey.setAttribute("scope", "col");
          thKey.innerHTML = `${headerList[index]}`;
          row.appendChild(thKey);
        }
        // --------------------------------------------------------------
        // const thCountry = document.createElement("th");
        // thCountry.setAttribute("scope", "col");
        // thCountry.innerHTML = "Country";
        // row.appendChild(thCountry);

        // const thLastUpdate = document.createElement("th");
        // thLastUpdate.setAttribute("scope", "col");
        // thLastUpdate.innerHTML = "Last_Update";
        // row.appendChild(thLastUpdate);

        // const thCases = document.createElement("th");
        // thCases.setAttribute("scope", "col");
        // thCases.innerHTML = "Cases";
        // row.appendChild(thCases);

        // const thDeath = document.createElement("th");
        // thDeath.setAttribute("scope", "col");
        // thDeath.innerHTML = "Death";
        // row.appendChild(thDeath);

        // const thRecovered = document.createElement("th");
        // thRecovered.setAttribute("scope", "col");
        // thRecovered.innerHTML = "Recovered";
        // row.appendChild(thRecovered);
        // ----------------------------------------------------------------------
        const subDiv = document.createElement("div");
        document.getElementById("tableOutline").appendChild(subDiv);

        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("id", "rowDiv");
        subDiv.appendChild(rowDiv);

        const tbody = document.createElement("tbody");
        tbl.appendChild(tbody);

        //create data list
        for (let i = 0; i < list.length; i++) {
          //create empty row and appendChild
          let bRow = document.createElement("tr");
          bRow.setAttribute("align", "center");
          tbody.appendChild(bRow);

          //generate row numbers
          let thNum = document.createElement("th");
          thNum.setAttribute("scope", "row");
          thNum.innerHTML = `${i + 1}`;
          bRow.appendChild(thNum);
          //console.log("outside for");
          console.log(Object.keys(list[i]).length);

          //---------------------needs to be dynamic--------------------------->>
          // const propertySize = Object.keys(list[i]).length;
          const valueList = Object.values(list[i]);
          console.log(valueList);
          for (let j = 0; j < valueList.length; j++) {
            const tdData = document.createElement("td");
            tdData.setAttribute("scope", "col");

            tdData.innerHTML = `${valueList[j]}`;
            bRow.appendChild(tdData);
          }

          // const tdCountry = document.createElement("td");
          // tdCountry.setAttribute("scope", "col");
          // tdCountry.innerHTML = `${list[i].country}`;
          // bRow.appendChild(tdCountry);

          // const tdLastUpdate = document.createElement("td");
          // tdLastUpdate.setAttribute("scope", "col");
          // tdLastUpdate.innerHTML = `${list[i].last_update}`;
          // bRow.appendChild(tdLastUpdate);

          // const tdCases = document.createElement("td");
          // tdCases.setAttribute("scope", "col");
          // tdCases.innerHTML = `${list[i].cases}`;
          // bRow.appendChild(tdCases);

          // const tdDeath = document.createElement("td");
          // tdDeath.setAttribute("scope", "col");
          // tdDeath.innerHTML = `${list[i].deaths}`;
          // bRow.appendChild(tdDeath);

          // const tdRecovered = document.createElement("td");
          // tdRecovered.setAttribute("scope", "col");
          // tdRecovered.innerHTML = `${list[i].recovered}`;
          // bRow.appendChild(tdRecovered);
          //------------------------------------------------------------<<
        }
      }
    }
  } else {
    //const removeList = document.getElementById("main-div");
    console.log("I am here");

    // document.getElementById("main-text").addEventListener("click", () => {
    // location.reload(true);
    document.getElementById("menu1").removeAttribute("class", "slide1");
    document.getElementById("menu1").setAttribute("class", "slide1-reverse");

    document.getElementById("menu2").removeAttribute("class", "slide");
    document.getElementById("menu2").setAttribute("class", "slide2-reverse");

    document.getElementById("menu3").removeAttribute("class", "slide3");
    document.getElementById("menu3").setAttribute("class", "slide3-reverse");

    document.getElementById("menu4").removeAttribute("class", "slide4");
    document.getElementById("menu4").setAttribute("class", "slide4-reverse");

    document.getElementById("menu5").removeAttribute("class", "slide5");
    document.getElementById("menu5").setAttribute("class", "slide5-reverse");

    setTimeout(reloadPage, 500);

    function reloadPage() {
      location.reload(true);
    }

    // });

    //shrink the menu if clicked again
    // myOuterDiv1
    //createButtons();
    // console.log(document.getElementById("main-img1"));
    // event.target.parentElement.parentElement.parentElement.children[1];
    // console.log(
    //   event.target.parentElement.parentElement.parentElement.children[2]
    // );
    // console.log(
    //   event.target.parentElement.parentElement.parentElement.children[3]
    // );
    // console.log(
    //   event.target.parentElement.parentElement.parentElement.children[4]
    // );
    // // document
    //   .getElementById(
    //     event.target.parentElement.parentElement.parentElement.children[1].getAttribute(
    //       "id"
    //     )
    //   )
    //   .setAttribute("class", "rotate-counter-clockwise");

    // event.target.parentElement.parentElement.parentElement.children[1].setAttribute(
    //   "class",
    //   "slide4"
    // );

    //myOuterDiv1.setAttribute("class", "slide1-reverse");

    // console.log(removeList.children);
    // removeList.removeChild(removeList.childNodes[1]);
    // removeList.removeChild(removeList.childNodes[2]);
    // removeList.removeChild(removeList.childNodes[3]);
    // removeList.removeChild(removeList.childNodes[4]);
  }
}
