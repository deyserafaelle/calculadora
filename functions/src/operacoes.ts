export function soma(valor1: number, valor2: number) {
    return valor1 + valor2;
}

export function divisao(valor1: number, valor2: number) {
    if (valor2 == 0) {
        throw new Error("Não é possível fazer divisão por zero!");
    } else {
        return valor1 / valor2;
    }
}