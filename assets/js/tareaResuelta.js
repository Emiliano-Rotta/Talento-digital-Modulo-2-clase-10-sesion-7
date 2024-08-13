var nombre = prompt("ingrese su nombre")
var apellido = prompt("ingrese su apellido")
var edad = parseInt(prompt("ingrese su edad"))
var numeroFavorito = parseInt(prompt("ingrese su numero favorito"))
var pais = prompt("ingrese su pais")

var suma = edad + numeroFavorito

alert("Hola " + nombre + " " + apellido + ", de " + pais)
alert("La suma de su edad mas su numero favorito es: " + suma)