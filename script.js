function login(){

    let password = document.getElementById("password").value;

    if(password === "teamo123"){

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("contenido").style.display = "block";

    }else{
        document.getElementById("error").innerHTML = "Contraseña incorrecta ❤️";
    }
}

function mostrarCarta(){

    let carta = document.getElementById("carta");

    if(carta.style.display === "block"){
        carta.style.display = "none";
    }else{
        carta.style.display = "block";
    }
}