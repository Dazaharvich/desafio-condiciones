//APLICAR BORDE

function userClick() {
    const imagenSantiago = document.getElementById('image-border__imagenSantiago');
    if(imagenSantiago.style.border === ""){
        imagenSantiago.style.border = "solid 2px red";
        /* console.log("hiciste click"); */
    } else{
        imagenSantiago.style.border = ""
    }

    
}

//STICKERS

function calcularCant() {
    //agregar valores input
    let cantidad1 = document.getElementById('cantidad-stickers-1').value;
    let cantidad2 = document.getElementById('cantidad-stickers-2').value;
    let cantidad3 = document.getElementById('cantidad-stickers-3').value;

    //transformar String a Int
    cantidad1 = parseInt(cantidad1);
    cantidad2 = parseInt(cantidad2);
    cantidad3 = parseInt(cantidad3);

    //suma de todos los valores
    let total = cantidad1 + cantidad2 + cantidad3;

    //condiciones de entrega de stickers
    let info = document.getElementById('info');

    if(total <= 10 && total >= 0){
        info.innerHTML = "Llevas "+ total + " stickers en total";
    }
    if(total >10){
        info.innerHTML = "Llevas demasiados stickers";
    }
    if(isNaN(total)){
        info.innerHTML = "Debes elegir algun sticker";
    }
console.log(total);
}

//PASSWORD

function comprobarPaswword(){
    //agregar valores de cada select

    let digito1 = document.getElementById('digito1').value;
    let digito2 = document.getElementById('digito2').value;
    let digito3 = document.getElementById('digito3').value;

    //transformar String a Int

    digito1 = parseInt(digito1);
    digito2 = parseInt(digito2);
    digito3 = parseInt(digito3); 

    //condiciones para comprobación del Password
    let passValidation = document.getElementById('pass-validation');

    if(digito1 === 9 && digito2 === 1 && digito3 === 1){
        
        passValidation.innerHTML = 'Password 1 Correcto';
    }

    else if(digito1 === 7 && digito2 === 1 && digito3 === 4){
    
        passValidation.innerHTML = 'Password 2 Correcto';
    }

    else{
        passValidation.innerHTML = 'Password incorrecto';
    }
}
