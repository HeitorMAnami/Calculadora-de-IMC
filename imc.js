const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Medidor de IMC(Índice de massa corpórea)");
console.log("-------------------------------------------");

// Função auxiliar para receber inputs no terminal (Node.js) de forma assíncrona
const perguntar = (pergunta) => {
    return new Promise(resolve => rl.question(pergunta, resolve));
};

// Função auxiliar para o delay simulando o time.sleep()
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function calcularIMC() {
    while (true) {
        let nome = await perguntar("  Qual seu nome? = ");
        let pesoInput = await perguntar("  Qual seu peso em Kg? = ");
        let alturaInput = await perguntar("  Qual sua altura em M? = ");

        // Convertendo as entradas para números de ponto flutuante
        let peso = parseFloat(pesoInput);
        let altura = parseFloat(alturaInput);
        console.log("");

        let pas1 = altura * altura;
        let formIMC = peso / pas1;

        if (formIMC < 2000) {
            console.log("Nome:", nome);
        }

        if (formIMC < 18.5) {
            console.log("  Classificação = Baixo Peso");
            console.log("  Risco De Comorbidades = Baixo");
            console.log(`  FórmulaIMC = ${formIMC.toFixed(3)}`);
        } else if (formIMC <= 24.9) {
            console.log("  Classificação = Peso Normal");
            console.log("  Risco De Comorbidades = Médio");
            console.log(`  FórmulaIMC = ${formIMC.toFixed(3)}`);
        } else if (formIMC <= 29.9) {
            console.log("  Classificação = Pré-Obeso");
            console.log("  Risco De Comorbidades = Aumentado");
            console.log(`  FórmulaIMC = ${formIMC.toFixed(3)}`);
        } else if (formIMC <= 34.9) {
            console.log("  Classificação = Obeso I");
            console.log("  Risco De Comorbidades = Moderado");
            console.log(`  FórmulaIMC = ${formIMC.toFixed(3)}`);
        } else if (formIMC <= 39.9) {
            console.log("  Classificação = Obeso II");
            console.log("  Risco De Comorbidades = Grave");
            console.log(`  FórmulaIMC = ${formIMC.toFixed(3)}`);
        } else if (formIMC <= 2000) {
            console.log("  Classificação = Obeso III");
            console.log("  Risco De Comorbidades = Muito Grave");
            console.log(`  FórmulaIMC = ${formIMC.toFixed(3)}`);
        } else {
            await sleep(2000); // Aguarda 2 segundos
            // \x1b[31m e \x1b[0m são os equivalentes em JS para as cores ANSI do Python
            console.log("\x1b[31mError: Processing limit exceeded!\x1b[0m"); 
            console.log("/tmp/ipykernel_2374/211454698839.py in <cell line: 0>()");
        }

        console.log("\x1b[37m-------------------------------------------\x1b[0m");
    }
}

calcularIMC();