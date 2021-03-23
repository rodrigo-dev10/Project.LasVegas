
function MegaSena() {
    Confirmacao = confirm(`${nome}, Deseja Sortear os Numero da Mega Sena`);
    if (Confirmacao == true) {
        Msg.innerHTML =(`Boa Sorte ${nome}`)
        console.log(`Mensagem2 ${Msg}`)
        for (i = 0; i <= 5; i++) {
            NumeroSorteados = Math.floor(Math.random(1) * 60);
            if (NumeroSorteados == NumeroSorteados) {
                NumeroSorteados = Math.floor(Math.random(1) * 60);
            };
            console.log(NumeroSorteados)
            NumeroSorteados1.innerHTML += (`${NumeroSorteados}, `)

            

        }

        


    }
}

