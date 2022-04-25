//Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(
            [personaMitad1, personaMitad2]);
            return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//MEdiana General
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);

const medianaGenealCol = medianaSalarios(salariosColSorted);


//Mediana del top 10%
const spliceStar = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice(
    spliceStar,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGenealCol,
    medianaTop10Col,
});

