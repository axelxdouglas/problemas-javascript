//Código del cuadrado
function perimetroCuadrado(lado){
  return lado * 4
}
perimetroCuadrado()

function areaCuadrado(lado){
  return lado*lado
}
areaCuadrado()

//Cuadrado - Interacción con HTML
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado")
  const value = input.value;

  const perimetro = perimetroCuadrado(value)
  alert(perimetro)
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado")
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
//-------------Finaliza Calculadora de Cuadrado----------------------------



//Código del triángulo
function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
};
perimetroTriangulo();

function areaTriangulo (base,altura){
  return (base * altura) / 2;
};
areaTriangulo();

//Triángulo - Interacción con HTML

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById('inputTriangulo1');
  const inputLado2 = document.getElementById('inputTriangulo2');
  const inputBase = document.getElementById('inputTriangulo3');
  const valueLado1 = Number(inputLado1.value);
  const valueLado2 = Number(inputLado2.value);
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

  alert(`El perimetro es: ${perimetro} cm`);
}




function calcularAreaTriangulo() {
  const inputBase = document.getElementById('inputTriangulo3');
  const inputAltura = document.getElementById('inputTriangulo4');
  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;
  const area = areaTriangulo(valueBase, valueAltura);

  alert(`El área es: ${area} cm^2`);
}


//Triangulo Isósceles
function trianguloIso(){
  let lado1 = document.getElementById("isoLado1");
  let iLado1 = parseFloat(lado1.value);

  let lado2 = document.getElementById("isoLado2");
  let iLado2 = parseFloat(lado2.value);

  let base = document.getElementById("isoBase");
  let iBase = parseFloat(base.value);

  if(iLado1 != iLado2){
      alert("No se puede calcular debido a que los lados son diferentes");
  }else{
      const pequenoLado2 = iBase /2; 
      const pequenoBase = iLado1;

      const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
      const pequenoBaseCuadrado = pequenoBase * pequenoBase;
       
      let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

      const grandeAltura = pequenoLado1;
      alert(`La altura del triangulo es: ${grandeAltura}cm`);
  }
}
//-------------Finaliza Calculadora de Triangulo----------------------------



//Código del círculo
//Diámetro
function diametroCirculo(radio){
  return radio * 2;
}
diametroCirculo()

//PI
const PI = Math.PI;

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
//Circulo - Interacción con HTML

function calcularPerimetroCirculo() {
  const input = document.getElementById('InputCirculo');
  const value = input.value;
  const perimetro = perimetroCirculo(value);

  alert(`El perimetro es: ${perimetro}  cm`);
}


function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo")
  const value = input.value;
  const area = areaCirculo(value)
  alert(`El área es: ${area} cm^2 `);
}