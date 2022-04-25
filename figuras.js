//--------------CODIGO CUADRADO--------------
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();


//--------------CODIGO TRIANGULO--------------
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();


//--------------CODIGO CIRCULO--------------
console.group("Circulo");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();



//Aqui interactuamos con el HTML

//--------------CODIGO CUADRADO--------------
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


//--------------CODIGO TRIANGULO--------------
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = Number(input2.value);

    const inputBase = document.getElementById("InputTrianguloBase");
    const base = Number(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const base = Number(inputBase.value);

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const altura = Number(inputAltura.value);

    const area = areaTriangulo(base, altura);
    alert(area);
}

function trianguloIssoceles(ladoA, ladoB, b){
    const lado1 = Number(ladoA);
    const lado2 = Number(ladoB);
    const base = Number(b);


    if(lado1 === lado2){
        return Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2) / 4));
    }else{
        return alert("Los lados A y B no son iguales"); 
    }
}

//--------------CODIGO CIRCULO--------------
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = Number(input.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = Number(input.value);

    const area = areaCirculo(radio);
    alert(area);
}