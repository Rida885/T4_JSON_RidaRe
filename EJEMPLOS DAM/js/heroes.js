
const header = document.querySelector("header");
const section = document.querySelector("section");

// Ruta del archivo JSON local
const requestURL = "../json/datosHeroes.json";


// Cargar el JSON con fetch()
async function cargarJSON() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();

    populateHeader(data);
    showHeroes(data);

  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function populateHeader(jsonObj) {
    const myH1 = document.createElement("h1");
    myH1.textContent = jsonObj["squadName"];
    header.append(myH1);

    const myPara = document.createElement("p");
    myPara.textContent =
        "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
    header.append(myPara);
}

function showHeroes(jsonObj) {
   

    jsonObj["members"].forEach(heroe=> {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        myH2.textContent = heroe.name;
        myPara1.textContent = "Secret identity: " + heroe.secretIdentity;
        myPara2.textContent = "Age: " + heroe.age;
        myPara3.textContent = "Superpowers:";

        const superPowers = heroe.powers;
        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement("li");
            listItem.textContent = superPowers[j];
            myList.append(listItem);
        }

        myArticle.append(myH2);
        myArticle.append(myPara1);
        myArticle.append(myPara2);
        myArticle.append(myPara3);
        myArticle.append(myList);

        section.append(myArticle);
    });
}          
