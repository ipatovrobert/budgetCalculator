import React, { useReducer } from 'react'
import uuid from 'uuid'
import BudgetContext from './budgetContext'
import BudgetReducer from './budgetReducer'
import {
    ADD_EXPENSE,
    ADD_INCOME,
    REMOVE_EXPENSE,
    REMOVE_INCOME,
    CALCULATE
} from '../types'

const BudgetState = (props) => {
    const initialState = {
        expenses: localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [],
        income: localStorage.getItem('incomes') ? JSON.parse(localStorage.getItem('incomes')) : [],
        sum: 0
    };

    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    // Actions //
    const addExpense = (money, name) => {
        const id = uuid.v4();

        dispatch({
            type: ADD_EXPENSE,
            payload: {money, name, id}
        })

        if(!localStorage.getItem('expenses')) {
            localStorage.setItem('expenses', JSON.stringify([{money, name, id}]));
        } else {
            let existingExpense;
            existingExpense = JSON.parse(localStorage.getItem('expenses'));
            existingExpense.push({money, name, id});
            localStorage.setItem('expenses', JSON.stringify(existingExpense));
        }
    }

    const addIncome = (money, name) => {
        const id = uuid.v4();

        dispatch({
            type: ADD_INCOME,
            payload: {money, name, id}
        })

        if(!localStorage.getItem('incomes')) {
            localStorage.setItem('incomes', JSON.stringify([{money, name, id}]));
        } else {
            let existingExpense;
            existingExpense = JSON.parse(localStorage.getItem('incomes'));
            existingExpense.push({money, name, id});
            localStorage.setItem('incomes', JSON.stringify(existingExpense));
        }
    }

    const removeExpense = (id) => {
        dispatch({
            type: REMOVE_EXPENSE,
            payload: id
        })

        let localSaved = JSON.parse(localStorage.getItem('expenses'));
        localSaved = localSaved.filter(data => data.id !== id);
        localStorage.setItem('expenses', JSON.stringify(localSaved));
    }
    
    const removeIncome = (id) => {
        dispatch({
            type: REMOVE_INCOME,
            payload: id
        })

        let localSaved = JSON.parse(localStorage.getItem('incomes'));
        localSaved = localSaved.filter(data => data.id !== id);
        localStorage.setItem('incomes', JSON.stringify(localSaved));
    }

    const calculateMoney = () => {
        dispatch({
            type: CALCULATE
        })
    }

    return (
        <BudgetContext.Provider 
        value={{
            expenses: state.expenses,
            income: state.income,
            sum: state.sum,
            removeExpense,
            removeIncome,
            calculateMoney,
            addExpense,
            addIncome
        }}>
            {props.children}
        </BudgetContext.Provider>
    )

}
export default BudgetState;