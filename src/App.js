import React from 'react';
import './style.css';
import Title from './components/Title';
import Calculator from './components/Calculator';
import Form from './components/Form';
import BudgetState from './context/budgetContext/BudgetState';



function App() {
  return (
    <BudgetState>
      <div className='continut'>
        <Title name='Expenses calculator' version='1'/>
        <Calculator />
        <Form />
      </div>
    </BudgetState>
  );
}

export default App;
