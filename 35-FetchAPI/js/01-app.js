const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    fetch('data/datos.txt') 
        .then( respuesta => {
            console.log(respuesta);

            console.log(respuesta.headers.get("Content-Type"));
            console.log(respuesta.status);
            console.log(respuesta.statusText); 
            console.log(respuesta.url); 
            console.log(respuesta.type); 


            return respuesta.text(); 

        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        })
}