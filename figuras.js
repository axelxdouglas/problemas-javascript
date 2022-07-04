//Código del cuadrado
console.group("Cuadrados"); //Agrupación de clgs

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado mide: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado mide: ${areaCuadrado} cm^2`);
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  `Los lados del triángulo miden: 
    ${ladoTriangulo1} cm, 
    ${ladoTriangulo2} cm, 
    y ${baseTriangulo} cm`
);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es de: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es de: ${areaTriangulo} cm`);

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log(`El radio del círculo es de: ${radioCirculo} cm`);

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es de: ${diametroCirculo} cm`);

//PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del círculo es de: ${perimetroCirculo} cm`);

//Área
const areaCirculo = (radioCirculo*radioCirculo) * PI;
console.log(`El área del círculo es de: ${radioCirculo} cm`);


console.groupEnd();
