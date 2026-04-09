const principal = document.querySelector("#datos");

// Ruta del archivo JSON local
const requestURL = "../Json/RegraguiZamour_ofertas.json";

// Cargar el JSON con fetch()
async function cargarJSON() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();

    mostrarDatos(data);
  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}
    
cargarJSON();

function mostrarDatos(jsonObj) {
  
    //Datos principales del videojuego
    const sec_datos = document.createElement("section");
    sec_datos.setAttribute("id","datos")
    const h1_nom = document.createElement("h1");


    const div_infor = document.createElement("div");
    const h2_infor = document.createElement("h2");
    const p_telef = document.createElement("p");
    const p_email = document.createElement("p");


    const nom_agen = document.createTextNode("nombre");
    const infor_contc = document.createTextNode("informacion");
    const telef = document.createTextNode("telefono");
    const email = document.createTextNode("Email")
    
    p_email.append(email);
    p_telef.append(telef);
    h2_infor.append(infor_contc);
    div_infor.append(h2_infor,p_telef,p_email)

    h1_nom.append(nom_agen);
    sec_datos.append(div_infor,h1_nom);
    

    //Excursiones
    const sec_excurs = document.createElement("section");
    sec_excurs = document.setAttribute("id", "excursiones");

    jsonObj.forEach((excurs) => {
        const card_excur = document.createElement("card");
        const h3_ciudad = document.createElement("h3");
        const h3_pais  = document.createElement("h3");
        const h3_precio = document.createElement("h3");

        const nom_ciudad = document.createTextNode(excurs["ciudad"]);
        const pais = document.createTextNode(excurs["pais"]);
        const precio = document.createTextNode(excurs["precio"]);

        h3_precio.append(precio);
        h3_pasi.append(pais);
        h3_ciudad.append(nom_ciudad);
        card_excur.append(h3_ciudad,h3_pais,h3_precio); 

        //Actividades
        excurs["actividades"].forEach((actividadesUn) => {
            const div_activ = document.createElement("div");
            const span_act = document.createElement("span");
            const act_text = document.createElement(actividadesUn);
            span_act.append(act_text);

            div_activ.append(span_act)
            
        })
        sec_excurs.append(card_excur);
        principal.append(sec);

    });
   

   

    
  
}