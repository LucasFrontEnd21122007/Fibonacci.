function calcularFibonacci(n) {
    let fibonacci = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    return fibonacci;
  }
  
  const n = 10; // Você pode alterar o valor de 'n' para obter mais números na sequência.
  const resultado = calcularFibonacci(n);
  
  console.log(`Os primeiros ${n} números da sequência de Fibonacci são: ${resultado.join(', ')}`);  