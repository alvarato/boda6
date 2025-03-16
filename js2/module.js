import {loadBodaInfo} from './boda.js';
import { loadIntinerario } from './intinerario.js';
import { loadPrincipalObject,addQuantity,createAllergensPopUp} from './index.js';

const object = {
    "boda" : {
        "boda1":"Sofia Pons",
        "boda2":"Juan Manuel Fernandez",
        "day":"Sábado",
        "date":"27 de Septiembre de 2025",
        "text":["Tenemos algo que celebrar",
            "por eso tenemos el inmenso honor de invitarte a que nos acompañes en el día más especial de nuestras vidas."
        ],
        "info":{
            "salon":{
                "link":"https://maps.app.goo.gl/GZjo3qMk5162ZFrn8",
                "time":"17:00",
                "name":"Salón la Arboleda"
                },
            "iglesia":{
                "link":"https://maps.app.goo.gl/ZD67mwUVhi3bfabe9",
                "time":"16:00",
                "name":"Parroquia Nuestra Señora de la Caridad"
                }
        }
        
    },
    "intinerario" : [
        {
            "img":"img/icon/iglesia.png",
            "time":"16:00",
            "name":"Ceremonia"
            },
        {
            "img":"img/icon/copas.png",
            "time":"17:00",
            "name":"Cocktail"
        },
        {
            "img":"img/icon/comida.png",
            "time":"19:00",
            "name":"Comida"
        },
        {
            "img":"img/icon/musica.png",
            "time":"22:00",
            "name":"Baile"
        }
    ],
    "guestData" : {
    "id":"1",
    "name":"Alvaro Bernabey Izquierdo",
    "person":0,
    "quantity":2,
    "done":false,
    "guests":[
       { "allergens":['leche'],
        "name":"Alvaro Bernabey Izquierdo",},
        {"allergens":[],"name":"Maria"}
        ]
}

}

let indexImg = 1;
const changeImg = () =>{
    var imagen = document.getElementById('principalImg');
    imagen.src =  "img/bg/i"+indexImg+'.jpg';
    indexImg = (indexImg < 16)?indexImg+1:1;
}

//setInterval(changeImg, 3000);
window.load
document.addEventListener('DOMContentLoaded', function() {
    
    loadBodaInfo(object.boda);
    loadIntinerario(object.intinerario);
    loadPrincipalObject(object.guestData);

    const scriptTag = document.getElementById("dataObject");
   // const jsonData = JSON.parse(scriptTag.textContent);
    scriptTag.textContent = JSON.stringify(object, null, 2);

    if(!object.guestData.done){
        addQuantity();
        createAllergensPopUp();
    }else{
        form.innerHTML =`<div id="qrcode"></div>`;
        sliderGenerator(object.guestData.guests);
    }
    
  });

