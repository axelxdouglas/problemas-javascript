//Código del cuadrado
console.group("Cuadrados"); //Agrupación de clgs

//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){
  return lado * 4
}
perimetroCuadrado()
//console.log(`El perímetro del cuadrado mide: ${perimetroCuadrado} cm`);

function areaCuadrado(lado){
  lado*lado
}
areaCuadrado()
//console.log(`El área del cuadrado mide: ${areaCuadrado} cm^2`);


console.groupEnd();

//Código del triángulo
// console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   `Los lados del triángulo miden: 
//     ${ladoTriangulo1} cm, 
//     ${ladoTriangulo2} cm, 
//     y ${baseTriangulo} cm`
// );

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es de: ${alturaTriangulo} cm`);

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}
perimetroTriangulo()

function areaTriangulo (base,altura){
  return (base * altura) / 2;
};
areaTriangulo()
console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es de: ${radioCirculo} cm`);

//Diámetro
function diametroCirculo(radio){
  return radio * 2;
}
diametroCirculo()


//PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

//Circunferencia
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio)
  return diametro*PI;
}
perimetroCirculo()


//Área
function areaCirculo(radio){
  return (radio*radio) * PI;
}
areaCirculo();


console.groupEnd();
