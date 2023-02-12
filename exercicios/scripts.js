/*
1) Desenvolver um sistema para calcular o valor que será pago a um empregado horista. O
usuário deverá informar o valor do salário hora, a quantidade de horas trabalhadas no
mês e a quantidade de filhos menores de 14 anos. A partir daí o sistema deve calcular o
salário bruto, salário família e o salário líquido do empregado (salário bruto + salário
família). Para o cálculo do salário família, levar em consideração:
a) Se o salário bruto for até R$ 788,00 o salário família será de R$ 30,50 para cada
filho.
b) Se o salário bruto for acima de R$ 788,00 até R$ 1.100,00 o salário família será de
R$ 18,50 por filho.
c) Se o salário bruto for acima de R$ 1.100,00 o salário família será de R$ 11,90 por
filho. 
*/

let btnCalcular = document.getElementById("btn-calcular");
btnCalcular.addEventListener("click", function(e){
    
    var salarioHora = document.getElementById('salario-hora').value.replace(',', '.');
    var horaMes = document.getElementById('hora-mes').value;
    var quantFilho = document.getElementById('qnt-filho').value;

    var salarioBruto = horaMes * salarioHora;

    var salarioFamilia;
    
    if(salarioBruto <= 788) {
        salarioFamilia = 30.50 * quantFilho;
    } else if (salarioBruto > 788 && salarioBruto <= 1100) {
        salarioFamilia = 18.50 * quantFilho;
    } else {
        salarioFamilia = 11.90 * quantFilho;
    }
    
    var salarioLiquido = salarioBruto + salarioFamilia;

    /*console.log(salarioFamilia);
    console.log(salarioLiquido);
    console.log(salarioBruto);*/

    var resultado = `
    <tr>
        <th>Descrição</th>
        <th>Valor</th>
    </tr>
    <tr>
        <td>Salário bruto</td>
        <td>${salarioBruto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
    </tr>
    <tr>
        <td>Salário família</td>
        <td>${salarioFamilia.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
    </tr>
    <tr>
        <td>Salário líquido</td>
        <td>${salarioLiquido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
    </tr>
    
    `;

    document.getElementById('tabela-salario').innerHTML = resultado;
    
});


/*
2) Desenvolver um sistema que receba uma sequência de números digitada pelo usuário. O
primeiro valor informado será a quantidade de números a ser digitada, e em seguida, a
sequência de números. No final o sistema deverá apresentar:
a) A própria sequência digitada pelo usuário.
b) O menor e o maior número da sequência.
*/

let btnPrompt = document.getElementById('btn-prompt');
btnPrompt.addEventListener('click', (e) => {
    var numDigitados = prompt('Informe a quantidade de números a ser digitada: ');
    var numeros = [];
    var maior;
    var menor;

    if(numDigitados <= 0) {
        alert("Informe um valor maior que zero (0)!");
    } else {
        while(numDigitados) {
            var num = prompt('Digite o valor: ');
            numDigitados--;
        
            numeros.push(num);
        
            maior = Math.max(...numeros);
            menor = Math.min(...numeros);
            
        }
        let resultado = `
        <table id="tabela-numeros">
            <tr>
                <td>Valores digitados</td>
                <td>${numeros.join(', ')}</td>
            </tr>
            <tr>
                <td>Maior valor</td>
                <td>${maior}</td>
            </tr>
            <tr>
                <td>Menor valor</td>
                <td>${menor}</td>
            </tr>
        </table>
        `;
    
        document.getElementById('container-prompt').innerHTML = resultado;
    }
    
    
    
});


/*
3) Os números de Fibonacci formam uma sequência em que cada número é igual à soma
dos dois anteriores. Os dois primeiros números são, por definição, iguais a 1. Veja o
exemplo a seguir: 1 1 2 3 5 8 13 ...
Escreva um programa que carregue um valor N pelo teclado e:
a) Imprima os N primeiros números da sequência de Fibonacci;
b) Indique se N faz parte da sequência de Fibonacci.
*/

let btnFibonacci = document.getElementById('btn-mostrar');
btnFibonacci.addEventListener("click", function(e){
    var valorN = parseInt(document.getElementById('valor-n').value);
    var f1 = 0, f2 = 1, fn;
    var sequencia = [];
    var verificar;
    var count = valorN;
    

    if(valorN <= 0) {
        alert("Digite um valor maior que zero (0)!");
    } else {
        while (count) {
            sequencia.push(f2);

            fn = f1 + f2;
            f1 = f2;
            f2 = fn;

            count--;
        }

        if(sequencia.includes(valorN) || valorN <= 3){
            verificar = "faz";
        } else {
            verificar = "não faz";
        }
        
        let resposta = `
            <p>Sequência:</p>
            <p>${sequencia.join(', ')}</p>
            <p>O valor digitado ${valorN}, ${verificar} parte da sequência de Fibonacci.</p>
        `;

        document.getElementById('container-fibonacci').innerHTML = resposta;
    }

    
});