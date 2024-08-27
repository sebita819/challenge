const ingresodeTexto = document.getElementById("ingresodeTexto");

const buttonEncriptar = document.getElementById("buttonEncriptar");

const buttonDesencriptar = document.getElementById("buttonDesencriptar");

const buttonCopiar = document.getElementById("buttonCopiar");

const mensajeFinal = document.getElementById("mensajeFinal");

const muñeco = document.getElementById("muñeco");

const rightInfo = document.getElementById("rightInfo");

const right = document.getElementById("right");




//e-enter
//i-imes
//a-ai
//o-ober
//u-ufat

let remplazar =[
    ["e" , "enter"],
    ["i" , "imes"],
    ["a"  ,"ai"],
    ["o" , "ober"],
    ["u" , "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor
    
    muñeco.classList.add("oculto");

    ingresodeTexto.value="";

    rightInfo.style.display="none";

    buttonCopiar.style.display = "block";

    right.classList.add("ajustar")

    mensajeFinal.classList.add("ajustar")


}

buttonEncriptar.addEventListener("click", () =>{
  const texto =  ingresodeTexto.value.toLowerCase()
  function encriptar(newText){
        for ( let i = 0; i < remplazar.length; i++ ){
            if(newText.includes(remplazar[i][0])){
             newText=newText.replaceAll(remplazar[i][0],remplazar[i][1])

            };
        };
        return newText

    }
    //const textoEncriptado = encriptar(texto)

    remplace(encriptar(texto))

    mensajeFinal.innerHTML = encriptar(texto);
    
    
});

buttonDesencriptar.addEventListener("click", ()=>{
    const texto = ingresodeTexto.value.toLowerCase();
    function desencriptar (newText){
        for(let i=0;i<remplazar.length; i++){
            if(newText.includes(remplazar[i][1])){
                newText=newText.replaceAll(remplazar[i][1],remplazar[i][0])
            };
        };
        return newText
    }

    remplace(desencriptar(texto))
}) 

buttonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);
    alert("Texto Copiado");

    mensajeFinal.innerHTML="";
    muñeco.classList.remove("oculto");
    rightInfo.style.display="block";
    buttonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresodeTexto.focus();

})

