import React, {Fragment, useContext, useEffect} from 'react'
import BudgetContext from '../context/budgetContext/budgetContext';

const Calculator = () => {
    const budgetContext = useContext(BudgetContext);
    const { expenses, income, sum, removeExpense, removeIncome, calculateMoney } = budgetContext;

    useEffect(() => {
        if(!localStorage.getItem('expenses')) {
            localStorage.setItem('expenses', [])
        }
        if(!localStorage.getItem('incomes')) {
            localStorage.setItem('incomes', [])
        }
        calculateMoney();
        // eslint-disable-next-line
    }, [])
    
    const rmvExpense = (e) => {
        removeExpense(e.target.getAttribute('data'));
        calculateMoney();
        console.log(e.target.getAttribute('data'));
    }
    const rmvIncome = (e) => {
        removeIncome(e.target.getAttribute('data'));
        calculateMoney();
        console.log(e.target.getAttribute('data'));
    }

    return (
        <Fragment>
            <h1 className='text-center'>Current budget: <span>{sum}$</span></h1>
            <div class="alert alert-light text-center" role="alert">
                Click on the items to delete them
            </div>
            <div className='row'>

            <div className='col-6'>
                <ul className="list-group">
                {income.map((income) => {
                    return <li key={income.id} data={income.id} className="list-group-item text-success bg-light lead text-center" onClick={rmvIncome}>{income.name}: +{income.money}</li>
                    })}
                </ul>
            </div>

            <div className='col-6'>
                <ul className="list-group">
                {expenses.map((expense) => {
                    return <li key={expense.id} data={expense.id} className="list-group-item text-danger bg-light lead text-center" onClick={rmvExpense}>{expense.name}: -{expense.money}</li>
                })}
                </ul>
            </div>

            </div>
        </Fragment>
    )
}

export default Calculator
