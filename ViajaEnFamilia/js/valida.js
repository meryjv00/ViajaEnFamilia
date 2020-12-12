/*_________________________LOGIN_____________________________*/
function consultaBD(login, pass) {
    /* Hariamos una consulta a la base para recuperar los logins */
    var logins = [
        ['diego', 'Chubaca2020'],
        ['maria', 'Chubaca2020'],
        ['pepa', 'Chubaca2020']
    ];

    for (var i = 0; i < logins.length; i++) {
        if (logins[i][0] == login && logins[i][1] == pass)
            return true;
    }

    return false;
}

document.querySelector("#enviar").addEventListener("click",
    function() {

        var login = document.querySelector("#usuario");
        var pass = document.querySelector("#pass");

        if (consultaBD(login.value, pass.value))
            window.open('teRecomendamos1.html');
    });


/*_________________________PAGINACION_____________________________*/
function flechaAtras() {
    var pag1 = document.getElementById('pagina1');
    var pag2 = document.getElementById('pagina2');
    var pag3 = document.getElementById('pagina3');

    if (pag1.classList.contains('active')) {
        location.href = "teRecomendamos1.html";
    }
    if (pag2.classList.contains('active')) {
        location.href = "teRecomendamos1.html";
    }
    if (pag3.classList.contains('active')) {
        location.href = "teRecomendamos2.html";
    }
}

function flechaAlante() {
    var pag1 = document.getElementById('pagina1');
    var pag2 = document.getElementById('pagina2');
    var pag3 = document.getElementById('pagina3');

    if (pag1.classList.contains('active')) {
        location.href = "teRecomendamos2.html";
    }
    if (pag2.classList.contains('active')) {
        location.href = "teRecomendamos3.html";
    }
    if (pag3.classList.contains('active')) {
        location.href = "teRecomendamos3.html";
    }
}