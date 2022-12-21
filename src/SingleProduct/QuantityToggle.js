import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa"

const QuantityToggle = ({ amount, decrement, increment }) => {
    return (
        <>
            <div className="quantityToggle">
                <div className="amount-toggle">
                    <button onClick={() => decrement()}><FaMinus /></button>
                    <div className="amount-style">{amount}</div>
                    <button onClick={() => increment()}><FaPlus /></button>
                </div>
            </div>
        </>
    )
}

export default QuantityToggle