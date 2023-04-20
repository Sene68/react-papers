import { useState } from 'react'

export const RandomColor = () => {
    const [color, setColor] = useState({
        backgroundColor: `#283faa`
    })

    const changeColor = () => {
        setColor({
            backgroundColor: getRandomRGBColor()
        })
    }

    const getRandomRGBColor = () => {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    return (
        <div 
            style={color}
            className="w-full h-screen grid place-items-center"
        >
            <button 
                className="text-xl px-11 py-5 bg-transparent border-[5px] border-white text-white tracking-wide rounded-[50px] cursor-pointer"
                onClick={changeColor}
            >
                Click Me
            </button>
        </div>
    );
}