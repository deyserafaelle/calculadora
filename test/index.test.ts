import 'jasmine';
import { soma, divisao } from '../src';

describe("Index", () => {
    it("soma: ok", () => {
        const result = soma(1, 2);

        expect(result).toBe(3);
    });

    it("divisao: ok", () => {
        const result = divisao(1, 2);

        expect(result).toBe(0.5);
    });

    it("divisao: divisão por zero", () => {
        expect(() => divisao(1, 0)).toThrow();
    });
});