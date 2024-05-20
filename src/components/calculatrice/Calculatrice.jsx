import React, {useState} from 'react'
import './calculatrice.css'

function Calculatrice() {

    const [display,setDisplay,history] = useState('')

    const handleClick = (value) =>{
        setDisplay(display + value)
    }

    const calculateResult = () => {
        try{
            setDisplay(eval(display).toString())
        }catch(error){
            setDisplay('Erreur')
        }
    }

    const clearDisplay = () => {
        setDisplay('')
    }

  return (
    <div className="calculatrice">
        <div className="display">{display}</div>
        <div className="buttons">
            <button className='operators' onClick={() => handleClick('(')}>（</button>
            <button className='operators' onClick={() => handleClick(')')}>）</button>
            <button className='operators' onClick={() => handleClick('%')}>%</button>
            <button className='operators' onClick={clearDisplay}>AC</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button className='operators' onClick={() => handleClick('/')}>÷</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button className='operators' onClick={() => handleClick('*')}>×</button>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button className='operators' onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button className='result' onClick={calculateResult}>=</button>
            <button className='operators' onClick={() => handleClick('+')}>+</button>
        </div>
    </div>

  )
}

export default Calculatrice