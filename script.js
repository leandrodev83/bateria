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
    let wait = 0;

    for(let sonsItem of sonsArray) {
        setTimeout(()=>{
            iniciarSom(`key${sonsItem}`);
        }, wait);

        wait +=250;
        
    }
}