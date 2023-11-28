// Acceder a los alementos de un array

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>");
const numbers = [1, 2, 3, 4, 5];

document.write("El arreglo en su primera posicion es: "+numbers[0]+"<br>");
document.write("El arreglo en su segunda posicion es: "+numbers[1]+"<br>");
document.write("El arreglo en su tercera posicion es: "+numbers[2]+"<br>");
document.write("El arreglo en su cuarta posicion es: "+numbers[3]+"<br>");
document.write("El arreglo en su quinta posicion es: "+numbers[4]+"<br>");

// usar variables para acceder a los elementos de un array

document.write("<h3>USAR VARIABLES PARA ACCEDER A LOS ELEMENTOS DE UN ARRAY</h3>");

let index = 4
document.write("La variable index corresponder a: "+numbers[index]+"<br>");

// modificar elementos de un array

document.write("<h3>MODIFICAR ELEMENTOS DE UN ARRAY</h3>");
numbers[0] = 10
numbers[2] = 30

document.write("El array modificado es: "+numbers[0]+"<br>");

// la longitud de un array

document.write("<h3>LA LONGITUD DE UN ARRAY</h3>");
const frutas = ["manzana", " pera", " platano", " fresa"];
document.write("El array de frutas es: "+frutas+"<br>");
document.write("La longitud del array de frutas es: "+frutas.length+"<br>");

// la longitud de arrays con length

document.write("<h3>LA LONGITUD DE UN ARRAY CON LENGHT</h3>")

const frutas2 = ["manzana", " pera", " platano", " fresa"];
frutas2.length = 2;

document.write("El array de frutas es: "+frutas2+"<br>");
document.write("La longitud del array de frutas es: "+frutas2.length+"<br>");

// metodos de arrays

document.write("<h3>METODOS DE ARRAYS</h3>");

// Metodo Push
document.write("<h4>METODO PUSH</h4>");

const frutas3 = ["manzana", " pera", " platano", " fresa"];
frutas3.push("mango");

document.write("El array de frutas es: "+frutas3+"<br>");
document.write("La longitud del array de frutas es: "+frutas3.length+"<br>");

// metodo pop
document.write("<h3>METODO POP</h3>");

const frutas4 = ["manzana", " pera", " platano", " fresa"];
frutas4.pop();

document.write("El array de frutas es: "+frutas4+"<br>");
document.write("El array de frutas ultima es:  "+frutas4.length+"<br>");

// metodo shift
document.write("<h3>METODO SHIFT</h3>");

const frutas5 = ["manzana", " pera", " platano", " fresa"];
frutas5.shift();

document.write("El array de frutas es: "+frutas5+"<br>");
document.write("El array de frutas primera es: "+frutas5.length+"<br>");

// metodo unshift
document.write("<h3>METODO UNSHIFT</h3>");

const frutas6 = ["manzana", " pera", " platano", " fresa"];
frutas6.unshift("mango");

document.write("El array de frutas es: "+frutas6+"<br>");
document.write("El array de frutas agregando una al inicio es: "+frutas6.length+"<br>");

// metodo concat
document.write("<h3>METODO CONCAT</h3>");

const frutas7 = ["manzana", " pera", " platano", " fresa"];
const frutas8 = ["mango", " uva", " sandia", " melon"];
const frutas9 = frutas7.concat(frutas8);

document.write("El array de frutas es: "+frutas9.length+"<br>");
document.write("El arrays de frutas se concatenan con la misma linea como muestra:  "+frutas9+"<br>");

// metodo concat de otra forma

document.write("<h3>METODO CONCAT DE OTRA FORMA</h3>");

const numbers01 = [1, 2, 3]
const numbers02 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNumbers = [...numbers01, ...numbers02]

document.write("El arrays de frutas se concatenan con la misma linea como muestra:  "+allNumbers+"<br>");

// Ejercicio practico ProcesarPedido

document.write("<h3>EJERCICIO PRACTICO PROCESAR PEDIDO</h3>");
function procesarPedido(pedidos) {
    const cliente = pedidos.shift();
    pedidos.unshift("bebida");
    pedidos.push(cliente);
    return pedidos
}
const pedido = ["Pedro", " Café", " Huevos", " Pan"]
document.write("El pedido sería: "+procesarPedido(pedido)+"<br>")