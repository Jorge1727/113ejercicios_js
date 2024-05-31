function cambioIcono(indice){

    elemento = document.getElementById(indice);

    if(elemento.classList.value == "btn btn-success"){
        
        elemento.innerText = "Ocultar"
        elemento.className = "btn btn-warning"
    }
    else{
        elemento.innerText = "Ver"
        elemento.className = "btn btn-success"
    }
}
