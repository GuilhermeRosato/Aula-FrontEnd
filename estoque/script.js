var a = 154.90; // A = Produto X
var b = 9 // B = Quantidade X
var c = a * b // C = valor total X
var d = 99.90; // D = Produto Y
var e = 14 // Quantidade Y
var f = d * e // Valor total Y
var g = c + f // Valor total do estoque
document.write ("Temos 9 produtos X<br>");
document.write ("O valor do produto X é de 154.90RS<br>")
document.write ("Valor total do produto X: " + c.toFixed(2) + "R$<br>");
document.write ("Temos 14 produtos Y<br>")
document.write ("O valor do produto Y é de 99.90R$<br>")
document.write ("Valor total do produto Y: " + f.toFixed(2) + "R$<br>");
document.write ("Valor total do estoque é de: " + g.toFixed(2) + "R$");
