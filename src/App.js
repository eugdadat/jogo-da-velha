import { useState } from 'react';
import './App.css'; 

function Square({ valor, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {valor}
    </button>
  );
}

export default function Tabuleiro() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Estado para os valores dos quadrados
  const [isXNext, setIsXNext] = useState(true);  // Controla se é 'X' ou 'O' a ser colocado

  function handleClick(index) {
    const newSquares = squares.slice();  // Faz uma cópia do estado atual
    if (newSquares[index]) return; // Evita sobrescrever quadrados já preenchidos
    newSquares[index] = isXNext ? 'X' : 'O';  // Coloca 'X' ou 'O' no quadrado
    setSquares(newSquares);  // Atualiza o estado
    setIsXNext(!isXNext);  // Alterna entre 'X' e 'O'
  }

  return (
    <div>
      <div>
        <Square valor={squares[0]} onClick={() => handleClick(0)} />
        <Square valor={squares[1]} onClick={() => handleClick(1)} />
        <Square valor={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div>
        <Square valor={squares[3]} onClick={() => handleClick(3)} />
        <Square valor={squares[4]} onClick={() => handleClick(4)} />
        <Square valor={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div>
        <Square valor={squares[6]} onClick={() => handleClick(6)} />
        <Square valor={squares[7]} onClick={() => handleClick(7)} />
        <Square valor={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
