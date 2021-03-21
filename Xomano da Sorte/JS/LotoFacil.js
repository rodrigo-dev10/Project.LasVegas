
function LotoFacil() {
    Confirmacao = confirm(`${nome}, Deseja Sortear os Numero da Loto Facil`);

    if (Confirmacao == true) {
        Msg.innerHTML +=(`Boa Sorte ${nome}`)
        for (i = 0; i <= 14; i++) {
            NumeroSorteados = Math.floor(Math.random(1) * 25);
            if (NumeroSorteados == NumeroSorteados) {
                NumeroSorteados = Math.floor(Math.random(1) * 25);
            };
            console.log(NumeroSorteados)
            NumeroSorteados1.innerHTML += (`${NumeroSorteados}, `)



        }


    }
}

