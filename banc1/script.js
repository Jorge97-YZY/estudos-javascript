const CONTAS = [
    { nome: 'Jorge Manuel', numConta: '123ABC00', valor: 1000 },
    { nome: 'Jorge Bahu', numConta: '123ABC01', valor: 5000 },
    { nome: 'Eunice Pedro', numConta: '123ABC02', valor: 10000 },
    { nome: 'Chelcia Nadir', numConta: '123ABC03', valor: 100000 },
    { nome: 'Maria Antonia', numConta: '123ABC06', valor: 0 }

];

function depositar() {
    let c = document.getElementById('conta');
    let v = document.getElementById('valor');


    let valor = Number(v.value);
    let conta = c.value;


    credito(conta, valor);

}
function levantar() {
    let c = document.getElementById('conta');
    let v = document.getElementById('valor');


    let valor = Number(v.value);
    let conta = c.value;


    debito(conta, valor);

}

function cadastrar(){
    let n = document.getElementById('nome');
    let c = document.getElementById('conta');
    let v = document.getElementById('valor');

    let nome = n.value;
    let valor = Number(v.value);
    let conta = c.value;
    abrirConta(nome, conta, valor);

}

function transferir(){
    let c = document.getElementById('conta');
    let v = document.getElementById('valor');
    let ct = document.getElementById('contaTrans');

    let conta = c.value;
    let valor = Number(v.value);
    let contaTrans = ct.value;
    traferencia(conta, valor, contaTrans);
    

}

const credito = (numCont, valorCred) => {
    let res = document.querySelector('div#res');
    let filConta = CONTAS.filter((el) => {
        if (el != null) {
            return el.numConta == numCont;
        } else {
            alert('Conta Invalida');
            console.log('Conta Invalida');

        }
    });
   
    return filConta.forEach((elemento) => {
        elemento.valor += valorCred;
        res.innerHTML = ` Valor Creditado com Sucesso! Nome: ${elemento.nome} , NºConta: ${elemento.numConta}, Valor: ${elemento.valor}Kz`
        console.log('==========================================================================================');
        console.log(`=== Valor Creditado com Sucesso! Nome: ${elemento.nome} , NºConta: ${elemento.numConta}, Valor: ${elemento.valor}Kz ===`);
        console.log('==========================================================================================');
    });
}

const debito = (numCont, valorDeb) => {
    let res = document.querySelector('div#res');
    let filConta = CONTAS.filter((el) => {
        if (el != null) {
            return el.numConta == numCont;
        } else {
            console.log('Conta Invalida');
        }
    });
    return filConta.forEach((elemento) => {
        if (elemento.valor < valorDeb) {
            res.innerHTML = `O valor existente na conta não é Suficiente! Saldo da Conta: ${elemento.valor}Kz`
            return console.log('O valor existente na conta não é Suficiente!');
        }
        elemento.valor -= valorDeb;
        res.innerHTML = `Dados da Conta: <br>`
        res.innerHTML += `Nome: ${elemento.nome} <br>`
        res.innerHTML += `NºConta: ${elemento.numConta} <br>`
        res.innerHTML += `Saldo: ${elemento.valor}Kz <br>`
        res.innerHTML += `Debito: ${valorDeb}Kz <br>`
        res.innerHTML += `Valor Debitado com Sucesso! `
        console.log('=======================================================================================');
        console.log(`=== Valor Debitado com Sucesso! Nome: ${elemento.nome} , NºConta: ${elemento.numConta}, Valor: ${elemento.valor}Kz ===`);
        console.log('=======================================================================================');
    });
}

const abrirConta = (nomeIn, numContaIn, valorAbertura) => {
    let res = document.querySelector('div#res');
    if (valorAbertura < 5000) {
        res.innerHTML = `O valor para Abertura de conta tem de ser igual ou superior a 5000 Kz!`
        return console.log('O valor para Abertura de conta tem de ser igual ou superior a 5000 Kz!');
    }
    else {
        CONTAS.push({ nome: nomeIn, numConta: numContaIn, valor: valorAbertura });
        res.innerHTML = `Conta Aberta com Sucesso! Nome: ${nomeIn}, NºConta: ${numContaIn}, Valor: ${valorAbertura}Kz`
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
    let res = document.querySelector('div#res');
    let filConta = CONTAS.filter((el) => {
        if (el != null) {
            return el.numConta == numCont;
        } else {
            alert('Conta Invalida!');
            console.log('Conta Invalida!');
        }
    });
    filConta.forEach((elemento) => {
        if (elemento.valor < valorTranf) {
            res.innerHTML = `Saldo Insuficiente`;
            console.log('Saldo Insuficiente');
        }
        else {
            debito(numCont, valorTranf);
            let filConta = CONTAS.filter((el) => {
                if (el != null) {
                    return el.numConta == contraTranf;
                } else {
                    alert('Conta Invalida');
                    console.log('Conta Invalida');
                }
            });
            filConta.forEach((elemento) => {
                credito(contraTranf, valorTranf);
                res.innerHTML = `Tranferencia para ${elemento.nome}, NºConta: ${elemento.numConta}, Valor: ${valorTranf}Kz Efectuada com Sucesso!`
                console.log(`Tranferencia para ${elemento.nome}, NºConta: ${elemento.numConta}, Valor: ${valorTranf}Kz Efectuada com Sucesso`);
            });
        }
    });

}
const saldo = (numCont)=>{
    let res = document.querySelector('div#res');
    let filConta = CONTAS.filter((el) => {
        if (el != null) {
            return el.numConta == numCont;
        } else {
            alert('Conta Invalida!');
            console.log('Conta Invalida!');
        }
    });
    filConta.forEach((elemento) => {
        res.innerHTML = `Dados da Conta: <br>`
        res.innerHTML += `Nome: ${elemento.nome} <br>`
        res.innerHTML += `NºConta: ${elemento.numConta} <br>`
        res.innerHTML += `Saldo: ${elemento.valor}Kz <br>`
    });

}

const valorTotal = CONTAS.reduce((res, prev) => {
    return res + prev.valor;

}, 0);

