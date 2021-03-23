
function Quina() {
    Confirmacao = confirm(`${nome}, Deseja Sortear os Numero da Quina`);


    if (Confirmacao == true) {
        Msg.innerHTML = (`Boa Sorte ${nome}`)
        for (i = 0; i <= 4; i++) {
            NumeroSorteados = Math.floor(Math.random(1) * 49);
            if (NumeroSorteados == NumeroSorteados) {
                NumeroSorteados = Math.floor(Math.random(1) * 49);
            };
            console.log(NumeroSorteados)
            NumeroSorteados1.innerHTML += (`${NumeroSorteados}, `)



        }


    }
}

