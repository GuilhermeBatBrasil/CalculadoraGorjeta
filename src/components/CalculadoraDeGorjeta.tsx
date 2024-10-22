import React, { useState } from 'react';

//Permite ao usuário inserir o valor da conta e o percentual da gorjeta e calcula o valor da gorjeta com base nesses dados.

const CalculadoraDeGorjeta: React.FC = () => {
  const [valorConta, setValorConta] = useState<number>(0);
  const [percentualGorjeta, setPercentualGorjeta] = useState<number>(10);
  const [valorGorjeta, setValorGorjeta] = useState<number>(0);
  
//Função para calcular o valor da gorjeta com base no valor total e no percentual de gorjeta inserido pelo usuário
  const calcularGorjeta = () => {
    const gorjetaCalculada = (valorConta * percentualGorjeta) / 100;
    setValorGorjeta(gorjetaCalculada);
  };

  return (
    <div>
      <h1>Calculadora de Gorjeta</h1>
      <div>
        <label htmlFor="valorConta">Valor total:</label>
        <input
          type="number"
          id="valorConta"
          value={valorConta}
          onChange={(e) => setValorConta(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="percentualGorjeta">Percentual da Gorjeta:</label>
        <input
          type="number"
          id="percentualGorjeta"
          value={percentualGorjeta}
          onChange={(e) => setPercentualGorjeta(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calcularGorjeta}>Calcular Gorjeta</button>
      <div>
        <h2>Valor da Gorjeta: R$ {valorGorjeta.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CalculadoraDeGorjeta;