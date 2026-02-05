import React from 'react'

function ProductRange({ setMinValue, setMaxValue }) {
    function setMin (event){
        setMinValue(event.target.value);    
    }

    function setMax (event){
        setMaxValue(event.target.value);
    }
  return (
    <div className="my-4">
        Min Price :
        <input type='number' onChange={setMin} />
        Max Price : 
        <input type='number' onChange={setMax} />
    </div>
  )
}

export default ProductRange