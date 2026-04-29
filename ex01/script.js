//parseInt (para inteiros) ou 
// parseFloat (para números com vírgula)
let n = parseInt(prompt("Digite um número:"));
let mensagem = "";
for (let i = 1; i <= n; i++) {
   // "i" é a substituição de "contador"//
    mensagem = `${mensagem} ${i}`; 
}
alert(`${mensagem}`);
