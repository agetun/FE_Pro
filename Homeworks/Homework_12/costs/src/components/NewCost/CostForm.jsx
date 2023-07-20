import React, { useState } from 'react'
import './CostForm.css'

export default function CostForm(props) {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // в этом подходе есть задержка обновления состояния (могут попасть или не обновиться какие-то данные и попасть предидущие)
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })
        //этот ещё другой способ учитывает задержку обновления состояния
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // })
    };
    
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

  return (
    <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input 
                value={inputName} 
                onChange={nameChangeHandler}
                type="text"  />
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input 
                value={inputAmount} 
                onChange={amountChangeHandler}
                type="number" 
                min="0.01" 
                step="0.01" />
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input 
                value={inputDate}
                onChange={dateChangeHandler} 
                type="date"   
                min="2019-01-01" 
                step="2023-12-31" />
            </div>
            <div className='new-cost__actions'>
                <button type='submit' >Добавить Расход</button>
            </div>
        </div>
    </form>
  )
}
