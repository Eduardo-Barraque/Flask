var total_voto = 0
nulov = 0
brancov = 0
function votando() {

    var valor1 = parseInt(document.getElementById("voto").value);
    var candidato = valor1
    if(candidato == 0){
        /* O 0 não estava respeitando a restriçao da parte (valor1 == 1 ||valor1 == 2 ||valor1 == 3 ||valor1 == 4 ||valor1 == 5 ||valor1 == 6) */
    }
    else{
        if (sessionStorage.getItem(candidato) !== null) {
            votos = parseInt(sessionStorage.getItem(candidato)) + 1;
            sessionStorage.setItem(candidato, votos);
            if (valor1 == 1 ||valor1 == 2 ||valor1 == 3 ||valor1 == 4 ||valor1 == 5 ||valor1 == 6) {
                if(sessionStorage.getItem(total_voto)== null ){
                    sessionStorage.setItem(total_voto, 1);
                }
                
                else {
                    tudo = parseInt(sessionStorage.getItem(total_voto))+1;
                    sessionStorage.setItem(total_voto, tudo);
                }
            }
        } 

        else {
            sessionStorage.setItem(candidato, 1);
            if (valor1 == 1 ||valor1 == 2 ||valor1 == 3 ||valor1 == 4 ||valor1 == 5 ||valor1 == 6) {
                if(sessionStorage.getItem(total_voto)== null ){
                    sessionStorage.setItem(total_voto, 1)
                }
                
                else {
                    tudo = parseInt(sessionStorage.getItem(total_voto))+1;
                    sessionStorage.setItem(total_voto, tudo)
                }
            }
        }
    }
    document.getElementById("voto").value = "";
}



function resultado() {
    
    for(i=1;i<5;i++){
        if(i == 1){
            if (sessionStorage.getItem(i) !== null) {

                document.getElementById("candidato1").innerHTML += sessionStorage.getItem(i);
            }
            if (sessionStorage.getItem(i) == null) {

                document.getElementById("candidato1").innerHTML += "0";
            }
        }
        if(i == 2){
            if (sessionStorage.getItem(i) !== null) {

                document.getElementById("candidato2").innerHTML += sessionStorage.getItem(i);
            }
            if (sessionStorage.getItem(i) == null) {

                document.getElementById("candidato2").innerHTML += "0";
            }
        }
        if(i == 3){
            if (sessionStorage.getItem(i) !== null) {

                document.getElementById("candidato3").innerHTML += sessionStorage.getItem(i);
            }
            if (sessionStorage.getItem(i) == null) {

                document.getElementById("candidato3").innerHTML += "0";
            }
        }
        if(i == 4){
            if (sessionStorage.getItem(i) !== null) {

                document.getElementById("candidato4").innerHTML += sessionStorage.getItem(i);
            }
            if (sessionStorage.getItem(i) == null) {

                document.getElementById("candidato4").innerHTML += "0";
            }
        }
    }
    for(i=5;i<7;i++){
        if( i == 5 &&sessionStorage.getItem(i) !== null){
            document.getElementById("votonulo").innerHTML +=sessionStorage.getItem(i);
            nulov= sessionStorage.getItem(i);
        }
        if( i == 6 &&sessionStorage.getItem(i) !== null){
            document.getElementById("votobranco").innerHTML +=sessionStorage.getItem(i);
            brancov= sessionStorage.getItem(i);
        }
        if ( i == 5 &&sessionStorage.getItem(i) == null) {
            document.getElementById("votonulo").innerHTML += "0";
            nulov= sessionStorage.getItem(i);
        }
        if ( i == 6 && sessionStorage.getItem(i) == null) {
            document.getElementById("votobranco").innerHTML += "0";
            brancov= sessionStorage.getItem(i);
        }
    }
    
    if (sessionStorage.getItem(total_voto) == null){
        document.getElementById("total").innerHTML = "0"
        document.getElementById("porcentagem").innerHTML = "0%"
    }
    else{document.getElementById("total").innerHTML = sessionStorage.getItem(total_voto);
    document.getElementById("porcentagem").innerHTML = (((nulov*1+brancov*1)/sessionStorage.getItem(total_voto)*1)*100).toFixed(1)+"%";
    }
}

