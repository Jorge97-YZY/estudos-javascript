const CONTAS = [
    { nome: 'Jorge Manuel', numConta: '123ABC00', valor: 1000 },
    { nome: 'Jorge Bahu', numConta: '123ABC01', valor: 5000 },
    { nome: 'Eunice Pedro', numConta: '123ABC02', valor: 10000 },
    { nome: 'Chelcia Nadir', numConta: '123ABC03', valor: 100000 },
    { nome: 'Maria Antonia', numConta: '123ABC06', valor: 0 }

];

const credito = (numCont, valorCred) => {
    let filConta = CONTAS.filter((el) => {
        if (el != null) {
            return el.numConta == numCont;
        } else {
            console.log('Conta Invalida');
        }
    });
    return filConta.forEach((elemento) => {
        elemento.valor += valorCred;
        console.log('==========================================================================================');
        console.log(`=== Valor Creditado com Sucesso! Nome: ${elemento.nome} , NºConta: ${elemento.numConta}, Valor: ${elemento.valor}Kz ===`);
        console.log('==========================================================================================');
    });
}

const debito = (numCont, valorDeb) => {
    let filConta = CONTAS.filter((el) => {
        if (el != null) {
            return el.numConta == numCont;
        } else {
            console.log('Conta Invalida');
        }
    });
    return filConta.forEach((elemento) => {
        if (elemento.valor < valorDeb) {
            return console.log('O valor existente na conta não é Suficiente!');
        }
        elemento.valor -= valorDeb;
        console.log('=======================================================================================');
        console.log(`=== Valor Debitado com Sucesso! Nome: ${elemento.nome} , NºConta: ${elemento.numConta}, Valor: ${elemento.valor}Kz ===`);
        console.log('=======================================================================================');
    });
}

const abrirConta = (nomeIn, numContaIn, valorAbertura) => {
    if (valorAbertura < 5000) {
        return console.log('O valor para Abertura de conta tem de ser igual ou superior a 5000 Kz!');
    }
    else {
        CONTAS.push({ nome: nomeIn, numConta: numContaIn, valor: valorAbertura });
        console.log('=======================================================================================');
        console.log(`==== Conta Aberta com Sucesso! Nome: ${nomeIn}, NºConta: ${numContaIn}, Valor: ${valorAbertura}Kz ==`);
        console.log('=======================================================================================');
    }
}

const fecharConta = (numCont) => {

    let filConta = CONTAS.filter((el) => {
        if (el != null) {
            return el.numConta == numCont;
        } else {
            console.log('Conta Invalida');
        }
    });

    filConta.forEach((elemento) => {
        if (elemento.valor < 0) {
            return console.log('O saldo da sua conta é negativo precisa Liquidar essa divida para poder fechar a conta!');
        } else if (elemento.valor > 0) {
            return console.log(`O seu saldo e de ${elemento.valor}Kz precisa Debitar esse valor para Fechar a Conta!`)

        } else {
            
            return CONTA;
        }

    });
}

const traferencia = (numCont, valorTranf, contraTranf) => {


    let filConta = CONTAS.filter((el) => {
        if (el != null) {
            return el.numConta == numCont;
        } else {
            console.log('Conta Invalida');
        }
    });
    filConta.forEach((elemento) => {
        if (elemento.valor < valorTranf) {
            console.log('Saldo Insuficiente');
        }
        else {
            debito(numCont, valorTranf);
            let filConta = CONTAS.filter((el) => {
                if (el != null) {
                    return el.numConta == contraTranf;
                } else {
                    console.log('Conta Invalida');
                }
            });
            filConta.forEach((elemento) => {
                credito(contraTranf, valorTranf);
                console.log(`Tranferencia para ${elemento.nome}, NºConta: ${elemento.numConta}, Valor: ${valorTranf}Kz Efectuada com Sucesso`);
            });
        }
    });

}

const valorTotal = CONTAS.reduce((res, prev) => {
    return res + prev.valor;

}, 0);

// credito('123ABC00', 3000);
// debito('123ABC01', 1000);
// abrirConta('Manuel Felix', '123ABC04', 20000);
// fecharConta('123ABC06');
traferencia('123ABC01', 1000, '123ABC00');
console.log('=============================================');
console.log(`==== Valor Total Contabilistico: ${valorTotal}Kz ====`);
console.log('=============================================');
console.log(CONTAS);
