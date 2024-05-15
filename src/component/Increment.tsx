import { useState } from "react";
type incrementType = {
    itemCounter: number,
    isFull?: boolean,
    handleIncrement: (event: React.MouseEvent<HTMLElement>) => void
    handleDecrement: (event: React.MouseEvent<HTMLElement>) => void
    handleDeleteProduct: (event: React.MouseEvent<HTMLElement>) => void
}
function Increment({itemCounter, isFull, handleIncrement, handleDecrement, handleDeleteProduct}: incrementType) {
    const [inputValue, setInputValue] = useState(1)
    return (
        <div className={"flex items-center justify-center gap-4" + (isFull ? " w-full" : "") }>
            <div
                className="flex flex-1 shrink-0 items-center justify-center border border-1 border-gray-200 rounded-lg"
            >
                <button
                    onClick={handleIncrement}
                    className="shrink-0 text-md text-gray-500 py-2 px-3 transition-all hover:bg-green-700 rounded-s-lg hover:text-white"
                >+</button>
                <input
                    value={itemCounter}
                    type="number"
                    readOnly
                    onChange={e => setInputValue(Number(e.target.value))}
                    className="w-[50px] flex-1 text-center appearance-none bg-transparent p-2 focus-visible:outline-none focus-within:border-primary transition-colors"
                />
                <button
                    onClick={handleDecrement}
                    disabled={itemCounter < 1}
                    className="shrink-0 py-2 px-3 text-md text-gray-500 transition-all rounded-e-lg hover:bg-red-600 hover:text-white"
                >-</button>
            </div>
            <button
                onClick={handleDeleteProduct}
                aria-label="btn"
                disabled={inputValue < 1}
                className="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border transition-all border-red-500 text-red-500 rounded-full p-1 hover:bg-red-600 hover:text-white"
            >
                <i className="sicon-trash"></i>
            </button>
        </div>
    )
}

export default Increment;