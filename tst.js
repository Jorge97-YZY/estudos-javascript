const CONTAS = [
    {nome: 'JJJ', valor: 1000},
    {nome: 'Manuel', valor: 500}
];

const filt = CONTAS.filter((el)=>{
    return el.nome == 'JJJ';
});
filt.forEach((elemento, index)=>{
    elemento.valor += 500;
    console.log(elemento, index);
});



 

