import React from 'react'

function Container({children}) {
  return (
    <div className='w-full mx-auto px-4 max-w-7xl'>
      {children}
    </div>
  )
}

export default Container


// All children component will be rendered inside this box
