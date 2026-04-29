let soma = 0;
for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Digite o ${i}° número:`));
    soma = soma + num; // Soma o valor ao total acumulado
}
alert(`A soma total é : ${soma}`);