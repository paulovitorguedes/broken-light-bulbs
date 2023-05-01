var lamp = Array();
lamp["container"] = Array();
lamp["tipo"] = Array();

//Adiciona a primeira lâmpada a página index
//Para cada elemento do mouse, carrega as informaçoes evento(num, num)
//o primeiro num será o mesmo numero do id da lâmpada
//o segundo num será a informação para mudar a lampada
lamp["container"][0] = '<img src="_imagens/lampada-apagada.jpg" alt="lampada" id="0" onmousemove="mudaLampada(0,1) "onmouseout="mudaLampada(0,0)" onclick="mudaLampada(0,2)" />  ';

//Adiciona em um Array a informação da lampada, o indice corresponde ao id da lanpada
lamp["tipo"][0] = "apagada";

document.getElementById("lam").innerHTML = lamp["container"][0];




//Função adicionar lâmpadas ao clicar no icone plus
function adicionarLampada() {
    let q = lamp["container"].length;
    lamp["container"].push('<img src="_imagens/lampada-apagada.jpg" alt="lampada" id="' + q + '" onmousemove="mudaLampada(' + q + ',1) "onmouseout="mudaLampada(' + q + ',0)" onclick="mudaLampada(' + q + ',2)" />');

    lamp["tipo"][q] = "apagada"
    console.log("adicionar lampada " + (q + 1));

    remonta();

}




//Função buscada para cada evento do mouse
function mudaLampada(id, troca) {

    tipo_atual = lamp["tipo"][id];

    //Quando a lâmpada estiver quebrada, não terá mais função
    if (tipo_atual == "quebrada") {
        console.log("quebrada");
        return false;
    }

    //identifica os parametros passado pelo evento do mouse
    switch (troca) {
        case 0:
            troca = "apagada";
            break;
        case 1:
            troca = "acesa";
            break;
        default:
            troca = "quebrada";
            break;
    }

    if (tipo_atual == troca) {
        console.log("nao muda");
        return false;

    } else {
        lamp["container"][id] = '<img src="_imagens/lampada-' + troca + '.jpg" id="' + id + '" onmousemove="mudaLampada(' + id + ',1) "onmouseout="mudaLampada(' + id + ',0)" onclick="mudaLampada(' + id + ',2)" />';

        lamp["tipo"][id] = troca;
        console.log("mudou");
        remonta();
    }   
}





//remonta a index.html com o novo tipo de lâmpada solicitada
function remonta() {
    let c = "";
    for (let i = 0; i < lamp["container"].length; i++) {
        c += lamp["container"][i];
    }
    document.getElementById("lam").innerHTML = c;
}