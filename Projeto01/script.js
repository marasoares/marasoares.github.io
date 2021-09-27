const textoHumor = document.querySelector("#titulo");
const elementoBotao = document.querySelector("#alterar");
const elementoImagem = document.querySelector("#imagem")

elementoBotao.addEventListener("click", function() {
    // btnTexto = "Docinho Vibrando"
    if (elementoBotao.value === "primeiro"){
        elementoImagem.src = "docinhoacordando.jpg";
        titulo.innerText = "Docinho Acordando";
        elementoBotao.value = "segundo"
    } else if (elementoBotao.value === "segundo"){
        elementoImagem.src = "docinhoenvergonhada.jpg";
        titulo.innerText = "Docinho Envergonhada";
        elementoBotao.value = "terceiro"
    } else if (elementoBotao.value === "terceiro"){
        elementoImagem.src = "docinhotriste.jpg"
        titulo.innerText = "Docinho Triste";
        elementoBotao.value = "quarto"
    } else {
        elementoImagem.src = "docinhoirritada.jpg"
        titulo.innerText = "Docinho Irritada"
        elementoBotao.value = "primeiro"
    }

}
);

// function btnTexto(){
//     const click = btnTexto 
//     if (click === elementoBotao){
//         imagem.scr = "docinhoacordando.jpg";
//         titulo.innerText = "Docinho Acordando";
//     } else if (click === elementoBotao){
//         imagem.src="docinhoenvergonhada.jpg";
//         titulo.innerText = "Docinho Envergonhada";
//     } else if (click === elementoBotao){
//         imagem.src="docinhotriste.jpg"
//         titulo.innerText = "Docinho Triste";
//     } else {
//         <img src="docinhoirritada.png" alt="Docinho Irritada"></img>
//         titulo.innerText = "Docinho Irritada"
//     }

// }
// btnTexto();