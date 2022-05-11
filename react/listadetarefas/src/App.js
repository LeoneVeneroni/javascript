import React from 'react';
import Main from './components/Main';
import './App.css';

// eu poderia criar function App() {} e depois colocar embaixo:
// export default App;

/*
Quando estamos trabalhando com jsx, não podemos usar dois elementos com a
mesma hierarquia soltos, temos que colocar algo para envolver os elementos, como uma <div> ou um <>.
*/
export default function App() {
  return <Main />;
}
