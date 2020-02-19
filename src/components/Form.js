import React, {useContext, useState, Fragment } from 'react'
import BudgetContext from '../context/budgetContext/budgetContext';

const Form = () => {
    const budgetContext = useContext(BudgetContext);
    const { addExpense, addIncome, calculateMoney } = budgetContext;

    const [ value, setValue] = useState({
        money: 0,
        name: '',
        type: 'Expenses'
    });
    

    const onChange = (e) => setValue({ ...value, [e.target.name]: e.target.value})
    const onSubmit = (e) => {
        e.preventDefault();
        if (value.type === 'Expenses') {
            addExpense(parseInt(value.money), value.name);
            calculateMoney();
        } else {
            addIncome(parseInt(value.money), value.name);
            calculateMoney();
        }
    }

    return (
        <Fragment>
            <form className='mt-5' onSubmit={onSubmit}>

                <div className='form-row'>
                <div className="form-group col">
                        <label htmlFor="name">Name</label>
                        <input type="name" name='name' className="form-control" id="name" placeholder="Example" onChange={onChange} required/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="money">Value</label>
                        <input type="number" name='money' className="form-control" id="money" placeholder="1000" onChange={onChange} required/>
                    </div>

                </div>
                <div className="form-group">
                    <label htmlFor="type">Select type</label>
                    <select className="form-control" id="type" onChange={onChange} name='type'>
                        <option>Expenses</option>
                        <option>Income</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-warning mb-2">Submit</button>

            </form>
        </Fragment>
    )
}

export default Form
