import React from "react"

function Button({ value, onClick }) {
    return (
        <div className="buttondiv">
            <button className="button" value={value} onClick={onClick}>{value}</button>
        </div>
        
    )
}

export default Button;