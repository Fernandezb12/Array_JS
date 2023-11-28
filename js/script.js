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