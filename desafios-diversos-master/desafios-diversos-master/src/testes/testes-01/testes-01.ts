// Exemplo 1: Função de Adição
function add(a: number, b: number): number {
    return a + b;
}

// Exemplo 2: Verificação de Números Pares
function isEven(number: number): boolean {
    return number % 2 === 0;
}

// Exemplo 3: Calculadora Simples
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}

// Exemplo 4: Validação de E-mail Simples
function validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Exemplo 5: Reversão de String
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export { add, isEven, Calculator, validateEmail, reverseString };
