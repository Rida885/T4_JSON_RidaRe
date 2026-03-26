const enc_1 = document.querySelector("p").style.color = "blue";

const sect = document.querySelector("section");

const par_2 = document.createElement("p");
const texto_p_2 = document.createTextNode("Contenido del párrafo 2");

par_2.setAttribute("class", "par");

par_2.append(texto_p_2);

sect.append(par_2);

/*document.body.insertBefore(par_2,sect);*/
