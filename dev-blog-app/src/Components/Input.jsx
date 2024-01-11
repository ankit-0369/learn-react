import React from 'react'
import { useId, forwardRef } from 'react'

const Input = forwardRef(function Input(
    {
        label,
        className = "",
        type = "text",
        ...props
    }, ref) {
        
    const id = useId()
    return (
        <div className='w-full'>
            {   //if label text is given then will show a label or else not
                label &&
                <label
                    className='inline-block mb-1 pl-1'
                    htmlFor={id}
                >
                    {label}
                </label>
            }
            <input
                type={type}
                className={`
            px-3 py-2 rounded-lg bg-white text-black outline-none
            focus:bg-gray-50 duration-200 border border-gray-200
             w-full
            ${className}`}
                {...props}
                ref={ref}
                id={id}
            />

        </div>
    )

})

export default Input



/*
function Input() {
  return (
    <div>
      Input
    </div>
  )
}

forwardref takes a function or jsx which we need to refffred in components.
It requires when a component is defined in diffrent file and we need its state to 
access in diffrent file. So we pass a ref to import PropTypes from 'prop-types'

*/