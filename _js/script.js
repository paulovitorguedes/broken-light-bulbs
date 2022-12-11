var lamp = Array();
lamp["container"] = Array();
lamp["tipo"] = Array();

lamp["container"][0] = '<img src="_imagens/lampada-apagada.jpg" id="0" onmousemove="mudaLampada(0,1) "onmouseout="mudaLampada(0,0)" onclick="mudaLampada(0,2)" />  ';
lamp["tipo"][0] = "apagada"

document.getElementById("lam").innerHTML = lamp["container"][0];




function adicionarLampada() {
    let q = lamp["container"].length;
    lamp["container"].push('<img src="_imagens/lampada-apagada.jpg" id="' + q + '" onmousemove="mudaLampada(' + q + ',1) "onmouseout="mudaLampada(' + q + ',0)" onclick="mudaLampada(' + q + ',2)" />');

    lamp["tipo"][q] = "apagada"
    console.log("adicionar lampada " + (q + 1));

    remonta();
    
}



function mudaLampada(id, troca) {

    tipo_atual = lamp["tipo"][id];
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


    if (tipo_atual != "quebrada") {
        lamp["container"][id] = '<img src="_imagens/lampada-' + troca + '.jpg" id="' + id + '" onmousemove="mudaLampada(' + id + ',1) "onmouseout="mudaLampada(' + id + ',0)" onclick="mudaLampada(' + id + ',2)" />';

        lamp["tipo"][id] = troca;
    }

    remonta();
}


function remonta() {
    let c = "";
    for (let i = 0; i < lamp["container"].length; i++) {
        c += lamp["container"][i];
    }
    document.getElementById("lam").innerHTML = c;
}