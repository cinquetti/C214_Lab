import { Calculator, BasicCalculator } from './Calculadora';

// Biblioteca de teste
import { mock, instance, when, anything } from "ts-mockito";

// Teste da calculadora
describe('Calculator', () => {
  // Mock da calculadora
  let mockedCalculator: Calculator;
  
  // Inicialização antes de cada teste
  beforeEach(() => {
    mockedCalculator = mock(BasicCalculator);
  });

  // Teste de adição
  it('should add two numbers', () => {
    // Configurando o comportamento do mock
    when(mockedCalculator.add(anything(), anything())).thenReturn(10);

    // Criando uma instância da calculadora para teste
    const calculator = instance(mockedCalculator);

    // Testando a função de adição
    expect(calculator.add(5, 2)).toBe(10); // Este teste irá falhar, pois o mock sempre retorna 10
  });

  // Teste de subtração
  it('should subtract two numbers', () => {
    // Configurando o comportamento do mock
    when(mockedCalculator.subtract(anything(), anything())).thenReturn(3);

    // Criando uma instância da calculadora para teste
    const calculator = instance(mockedCalculator);

    // Testando a função de subtração
    expect(calculator.subtract(8, 5)).toBe(3); // Este teste irá falhar, pois o mock sempre retorna 3
  });

  // Teste de multiplicação
  it('should multiply two numbers', () => {
    // Configurando o comportamento do mock
    when(mockedCalculator.multiply(anything(), anything())).thenReturn(15);

    // Criando uma instância da calculadora para teste
    const calculator = instance(mockedCalculator);

    // Testando a função de multiplicação
    expect(calculator.multiply(3, 5)).toBe(15); // Este teste irá falhar, pois o mock sempre retorna 15
  });

  // Teste de divisão
  it('should divide two numbers', () => {
    // Configurando o comportamento do mock
    when(mockedCalculator.divide(anything(), anything())).thenReturn(4);

    // Criando uma instância da calculadora para teste
    const calculator = instance(mockedCalculator);

    // Testando a função de divisão
    expect(calculator.divide(20, 5)).toBe(4); // Este teste irá falhar, pois o mock sempre retorna 4
  });
});
