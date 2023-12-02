import React, { useId } from 'react'

import '../src/App.css'

function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "inr",
        amountDisable = false,
        currencyDisable = false,
        className = "",
    }
) {

    const amountInputId = useId()
    return (
        // <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
        //     <div className="w-1/2">
        //         <label htmlFor={amountInputId} className="text-green-600 mb-2 inline-block bg-orange-700">
        //             {label}here
        //         </label>
        //         <input
        //             id={amountInputId}
        //             className="outline-none w-full bg-transparent py-1.5 mx-2 my-2 bg-green-200"

        //             placeholder="Amount"
        //             disabled={amountDisable}
        //             value={amount}
        //             onChange={(e) => onAmountChange &&
        //                 onAmountChange(Number(e.target.value))}
        //         />
        //     </div>
        //     <div className="w-1/2 flex flex-wrap justify-end text-right">
        //         <p className="text-black/40 mb-2 w-full">Currency Type</p>
        //         <select
        //             className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        //             value={selectCurrency}
        //             disabled={currencyDisable}
        //             onChange={(e) => onCurrencyChange &&
        //                 onCurrencyChange(e.target.value)}
        //         >
        //             {/* //remember the key in loops in react */}
        //             {currencyOptions.map((currency) =>
        //             (
        //                 <option key={currency} value={currency}>
        //                 {currency}
        //                 </option>
        //             ))}

        //         </select>
        //     </div>
        // </div>

       
         <div className={`input-container bg-white p-1 rounded-lg text-sm flex ${className} `}>
            <div className={`amount`}>
                <label htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    type='text'
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisable}
                    className='input'
                />

            </div>

            <div className="currency w-1/2 flex justify-end text-right">
                <div className=' mb-2 w-full text-black/40'>Currency Type
                </div>

                <select
                     onfocus='this.size=10;'
                     className=" options rounded-lg px-1 py-3 bg-gray-100 cursor-pointer outline-none"
                     value={selectCurrency}
                     disabled={currencyDisable}
                     onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                        {currencyOptions.map(
                            (currency) =>
                            (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            )
                        )}
                    </select>

            </div>

        </div>
    
    );
}

export default InputBox;

