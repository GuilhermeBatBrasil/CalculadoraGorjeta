import React from 'react';

interface Props {
  valorGorjeta: number;
}
/**
 * exibir o resultado da gorjeta calculada.
 * valorGorjeta - O valor da gorjeta a ser exibido.
 */
const ResultadoGorjeta: React.FC<Props> = ({ valorGorjeta }) => {
  return (
    <div>
      <h2>Valor da Gorjeta: R$ {valorGorjeta.toFixed(2)}</h2>
    </div>
  );
};

export default ResultadoGorjeta;