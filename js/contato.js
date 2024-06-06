const form = document.querySelector("#formulario");
const campos = document.querySelectorAll(".required");
const requerimento = document.querySelectorAll(".requerimento");
const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}(?:\.[a-z]{2,})?$/i;
const telefoneRegex = /^\d+$/;

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    validarTelefone();
});


function erro(index) {
    campos[index].style.border = '2px solid red';
    requerimento[index].style.display = 'block';
}

function removerErro(index) {
    campos[index].style.border = '';
    requerimento[index].style.display = 'none';
}

function validarNome() {
    if (campos[0].value.length < 4 && campos[0].value.length != 0) {
        erro(0);
    }
    else if(campos[0].value.length === 0) {
        removerErro(0);
    }
    else{
        removerErro(0);
    }
}

function validarEmail() {
    if(!emailRegex.test(campos[1].value)) {
        erro(1);
    }
    else{
        removerErro(1)
    }
}

function validarTelefone() {    
    if ((campos[2].value.length !== 11 || !telefoneRegex.test(campos[2].value)) && campos[2].value.length !== 0) {
        erro(2);
    } else {
        removerErro(2);
    }
}

function validarMensagem() {
    if (campos[3].value.length == 0)
        erro(3)
    else{
        removerErro(3)
    }
}