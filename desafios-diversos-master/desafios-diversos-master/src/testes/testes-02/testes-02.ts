// Exemplo 1: Função de Adição com Validação Opcional
function addWithValidation(a: number, b: number, validate?: boolean): number {
  // Verifica se a validação é necessária e se os números são positivos
  if (validate) {
    if (a < 0 || b < 0) {
      throw new Error('Os números devem ser positivos');
    }
  }
  // Retorna a soma dos números
  return a + b;
}

// Exemplo 2: Verificação de Números Pares com Mensagem
function isEvenWithMessage(number: number): string {
  // Verifica se o número é par e retorna uma mensagem correspondente
  const isEven = number % 2 === 0;
  return isEven ? 'O número é par' : 'O número é ímpar';
}

// Exemplo 3: Calculadora Avançada com Operação Dinâmica
class AdvancedCalculator {
  // Realiza a operação escolhida (adição ou subtração)
  calculate(a: number, b: number, operation: string): number {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      default:
        throw new Error('Operação inválida');
    }
  }
}

// Exemplo 4: Validação de E-mail com Detalhes
function validateEmailWithDetails(email: string): { isValid: boolean; reason?: string } {
  // Expressão regular para validar o formato do e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Verifica se o e-mail é válido e fornece detalhes
  if (regex.test(email)) {
    return { isValid: true };
  } else {
    return { isValid: false, reason: 'O formato do e-mail é inválido' };
  }
}

// Exemplo 5: Reversão de String com Opção de Uppercase
function reverseStringWithOptions(str: string, toUpperCase?: boolean): string {
  // Reverte a string e a converte para maiúsculas, se necessário
  const reversed = str.split('').reverse().join('');
  return toUpperCase ? reversed.toUpperCase() : reversed;
}

// Exporta as funções e a classe para uso em outros arquivos
export {
  addWithValidation,
  isEvenWithMessage,
  AdvancedCalculator,
  validateEmailWithDetails,
  reverseStringWithOptions,
};
