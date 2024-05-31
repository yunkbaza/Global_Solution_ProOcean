const botaoPlataforma = document.querySelector("#botao-plataforma");
const botaoProOcean = document.querySelector("#botao-proocean");
const botaoNatureza = document.querySelector("#botao-natureza");


const modalPlataforma = document.querySelector("#modal-plataforma");
const modalProOcean = document.querySelector("#modal-proocean");
const modalNatureza = document.querySelector("#modal-natureza");

botaoPlataforma.addEventListener("click" , () => {
    modalPlataforma.showModal();
    document.body.classList.add('no-scroll');
});

botaoProOcean.addEventListener("click" , () => {
    modalProOcean.showModal();
    document.body.classList.add('no-scroll');
});

botaoNatureza.addEventListener("click" , () => {
    modalNatureza.showModal();
    document.body.classList.add('no-scroll');
});

const fecharPlataforma = document.querySelector("#btn-fechar-plataforma");
const fecharProOcean = document.querySelector("#btn-fechar-proocean");
const fecharNatureza = document.querySelector("#btn-fechar-natureza")

fecharPlataforma.addEventListener("click" , () => {
    modalPlataforma.close();
    document.body.classList.remove('no-scroll');
});

fecharProOcean.addEventListener("click" , () => {
    modalProOcean.close();
    document.body.classList.remove('no-scroll');
});

fecharNatureza.addEventListener("click" , () => {
    modalNatureza.close();
    document.body.classList.remove('no-scroll');
});

const fecharAoClicarFora = (modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
            document.body.classList.remove('no-scroll');
        }
    });
};

fecharAoClicarFora(modalPlataforma);
fecharAoClicarFora(modalProOcean);
fecharAoClicarFora(modalNatureza);