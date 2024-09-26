const verificarParImpar = numero => (numero % 2 === 0 ? "Par" : "Ímpar");

// Chamando a função com diferentes números
console.log(verificarParImpar(10));  // Par
console.log(verificarParImpar(7));   // Ímpar
console.log(verificarParImpar(0));   // Par
console.log(verificarParImpar(-3));  // Ímpar
