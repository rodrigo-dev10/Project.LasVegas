function LotaMania() {
    Confirmacao = confirm(`${nome}, Deseja Sortear os Numero da Loto Mania`);

    if (Confirmacao == true) {
        Msg.innerHTML += (`Boa Sorte ${nome}!!!`)
        for (var i = 0; i <= 49; i++) {
            NumeroSorteados = Math.floor(Math.random(1) * 99);
            if (NumeroSorteados == NumeroSorteados) {
                NumeroSorteados = Math.floor(Math.random(1) * 99);
            };
            console.log(NumeroSorteados)
            NumeroSorteados1.innerHTML += (`${NumeroSorteados}, `);
        }
    }
}
