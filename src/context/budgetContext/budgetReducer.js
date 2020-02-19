import { ADD_EXPENSE, ADD_INCOME, REMOVE_EXPENSE, REMOVE_INCOME, CALCULATE } from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_EXPENSE: 
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };

        case ADD_INCOME:
            return {
                ...state,
                income: [...state.income, action.payload]
            }

        case REMOVE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(data => data.id !== action.payload)
            }

        case REMOVE_INCOME:
            return {
                ...state,
                income: state.income.filter(data => data.id !== action.payload)
            }
        
        case CALCULATE:
            let total = 0;
            state.income.map((income) => total += income.money);
            state.expenses.map((expenses) => total += -expenses.money);                            
            return {
                ...state,
                sum: total
            }

        default:
            return state;
    }
}