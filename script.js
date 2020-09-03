document.getElementById("picture-div").addEventListener("click", createButtons);

function createButtons() {
  let target = document.getElementById("main-div");
  const myOuterDiv1 = document.createElement("div");
  const myOuterDiv2 = document.createElement("div");
  const myOuterDiv3 = document.createElement("div");
  const myOuterDiv4 = document.createElement("div");
  const myOuterDiv5 = document.createElement("div");
  if (target.childElementCount === 1) {
    // create button
    //console.log("inside if");
    myOuterDiv1.style.display = "flex";
    myOuterDiv1.setAttribute("id", "menu1");
    myOuterDiv1.style.width = "10rem";
    myOuterDiv1.style.margin = "10px";
    // myOuterDiv1.style.border = "1px solid black";
    myOuterDiv1.style.padding = "5px";
    myOuterDiv1.style.position = "absolute";
    myOuterDiv1.style.top = "10px";
    myOuterDiv1.style.right = "10px";
    myOuterDiv1.setAttribute("class", "slide1");
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
    //console.log(document.getElementById("main-div").children);

    //create button
    myOuterDiv5.style.display = "flex";
    myOuterDiv5.setAttribute("id", "menu5");
    myOuterDiv5.setAttribute("align", "center");
    myOuterDiv5.style.width = "10rem";
    myOuterDiv5.style.margin = "10px";
    // myOuterDiv5.style.border = "1px solid black";
    myOuterDiv5.style.padding = "5px";
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
    //console.log(document.getElementById("main-div").children);

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

      //Process Table
      const currentElementId = event.target.getAttribute("id");
      let url = "";
      let country = "";

      //here the events kick off based off of what element is clicked
      switch (currentElementId) {
        case "main-img1":
          break;
        case "menuTitle1":
        case "myOuterDiv1":
        case "subImage1":
          url = "https://covid19-backend-2020.herokuapp.com/latest-status";
          axios.get(url).then((response) => {
            covidTable(response.data);
            createChart(response.data, currentElementId);
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
            //console.log(response.data);
          });
          break;
        case "menuTitle4":
        case "myOuterDiv4":
        case "subImage4":
          country = prompt(
            "Enter country name (eg: 'us' for United States, 'np' for Nepal)"
          );
          url = `https://covid19-backend-2020.herokuapp.com/prediction-by-country/${country}`;
          axios.get(url).then((response) => {
            covidTable(response.data);
            //console.log(response.data);
            createChart(response.data, currentElementId);
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
            //console.log(response.data);
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

        for (let index = 0; index < headerList.length; index++) {
          const thKey = document.createElement("th");
          thKey.setAttribute("scope", "col");
          thKey.innerHTML = `${headerList[index]}`;
          row.appendChild(thKey);
        }

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
          // console.log(Object.keys(list[i]).length);

          const valueList = Object.values(list[i]);
          //console.log(valueList);
          for (let j = 0; j < valueList.length; j++) {
            const tdData = document.createElement("td");
            tdData.setAttribute("scope", "col");

            tdData.innerHTML = `${valueList[j]}`;
            bRow.appendChild(tdData);
          }
        }
      }

      //creating chart on a button click
      function createChart(list, eventId) {
        //cosmetic changes
        const chartElement = document.getElementById("myChart");
        chartElement.innerHTML = "";
        chartElement.style.background =
          "linear-gradient(to top, #ccffff 0%, #cc99ff 100%)";
        chartElement.style.borderRadius = "15px";

        //generate labels and values from list
        const labelData = [];
        const valueData = [];
        for (let index = 0; index < list.length; index++) {
          let x_value;
          if (
            eventId === "menuTitle1" ||
            eventId === "myOuterDiv1" ||
            eventId === "subImage1"
          ) {
            x_value = list[index].country;
          } else if (
            eventId === "menuTitle4" ||
            eventId === "myOuterDiv4" ||
            eventId === "subImage4"
          ) {
            x_value = list[index].date;
          }

          let y_value = list[index].cases;
          labelData.push(x_value);
          valueData.push(y_value);
        }

        var ctx = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(ctx, {
          type: "line",

          data: {
            labels: labelData,
            datasets: [
              {
                label: "Total Covid Cases",
                backgroundColor: "white", //"rgb(255, 99, 132)",
                borderColor: "rgb(255, 255, 132)",
                data: valueData,
              },
            ],
          },

          options: {},
        });
      }
    }
  } else {
    // console.log("children count not equals to 1");

    //animate disapperance of menus on button click
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

    //set timer before refreshing the page
    setTimeout(reloadPage, 500);

    //refresh page
    function reloadPage() {
      location.reload(true);
    }
  }
}
