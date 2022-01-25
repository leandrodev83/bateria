document.body.addEventListener("keyup", (evento)=>{
    iniciarSom(evento.code.toLocaleLowerCase());
});
document.querySelector(".composer button").addEventListener("click", ()=>{
    let sons = document.querySelector("#input").value;
    if(sons !== "") {
        let sonsArray = sons.split("");
        iniciarComposicao(sonsArray);
    }
});

function iniciarSom(som) {
    let elementoAudio = document.querySelector(`#s_${som}`);
    let elementokey = document.querySelector(`div[data-key="${som}"]`);

    if(elementoAudio) {
        elementoAudio.currentTime = 0;
        elementoAudio.play();
    }

    if(elementokey) {
        elementokey.classList.add("active");
        setTimeout(()=>{
            elementokey.classList.remove("active");
        }, 200);
    }
}

function iniciarComposicao(sonsArray) {
    for(sonsItem of sonsArray) {
        iniciarSom(`key${sonsItem}`);
    }
}

