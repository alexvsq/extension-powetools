import React, { useState, useEffect } from 'react'
import * as math from 'mathjs';

const Calculator = () => {

  const [textInput, setTextInput] = useState('');

  const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '='];

  const handleInputChange = (digit) => {
    // Permitir solo números, operadores y teclas de control
    if (/^[0-9+\-*/.%]+$/.test(digit)) {
      return digit;
    } else {
      return null
    }
  };

  const limit = (x) => {

    if (textInput.length > 1 && textInput.slice(-1) == (x).slice(-1) && !Number.isInteger(Number(textInput.slice(-1)))) {

      return false
    } else {
      return true
    }
  }

  const result = () => {
    try {
      const evalResult = math.evaluate(textInput);
      setTextInput(evalResult.toString());
    } catch (error) {
      console.error(error);
      setTextInput('Error');
      setTimeout(() => {
        setTextInput('');
      }, 600);
    }
  };

  return (
    <>
      <section className="">

        <div >
          <div className=" my-[8px] border border-[#222222] h-10 rounded-[10px] px-3 py-2  font-semibold text-[15px]" data-testid="display">
            <form onSubmit={(e) => {
              e.preventDefault()
              result()
            }}>

              <input
                type="text"
                maxLength={30}
                className='text-right bg-transparent w-full h-full focus:outline-none'
                onChange={(e) => {
                  const item = e.target.value;
                  const value = handleInputChange(item);
                  if (value != null && limit(value)) {
                    setTextInput(value);
                  }

                }}
                value={textInput}
              />

            </form>
          </div>
          <div className=" grid grid-cols-4  gap-2 ">
           {
            buttons.map((cButton , i)=>{
        
                //Number.isInteger(Number(cButton )) ||

                return(
                <button type="button"
                className={` 
                border border-[#222222] rounded-[10px] h-10  hover:bg-[#222222] transition
                ${!isNaN(cButton) ? 'text-white font-[14px] ' : ''}
                ${isNaN(cButton) && cButton !== '=' || cButton === '.' ? 'text-[#ed52cb]  text-[16px] font-semibold' : ''}
                ${cButton === '=' && 'col-span-2 text-white bg-[#ed52cb]' }
                  `}
                onClick={() => {

                  if (cButton  === 'AC') {
                    setTextInput('');
                    return
                  } else if (cButton  === '=') {
                    result()
                    return
                  }
                  else if (cButton  === 'DEL') {
                    setTextInput(textInput.toString().slice(0, -1));
                    return
                  }
                  const value = handleInputChange(cButton );
                  if (value != null) {
                    const textIn = textInput + value
                    limit(textIn) && setTextInput(textIn)

                  }
                }}
                key={cButton }
                data-testid={cButton }>{cButton }</button>
              )
            })
           }
          </div>
        </div>
      </section>
         
    </>
  );
};

export default Calculator;
