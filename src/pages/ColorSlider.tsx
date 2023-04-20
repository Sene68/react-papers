import React, { useState } from "react";

interface colorProps {
    r: number;
    g: number;
    b: number;
}

export const ColorSlider = () => {
    const [colors, setColors] = useState<colorProps>({
        r: 0,
        g: 0,
        b: 0
    })
    
    const [color, setColor] = useState({
        backgroundColor: `rgb(0,0,0)`
    })

    const [displayColor, setDisplayColor] = useState<string>('rgb (0, 0, 0)')

    const changeR = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColors({
            ...colors,
            r: parseInt(event.target.value)
        })
        setColor({
            backgroundColor: `rgb(${event.target.value}, ${colors.g}, ${colors.b})`
        })
        setDisplayColor('rgb (' + event.target.value + ', ' + colors.g + ', ' + colors.b + ')')
    }

    const changeG = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColors({
            ...colors,
            g: parseInt(event.target.value)
        })
        setColor({
            backgroundColor: `rgb(${colors.r}, ${event.target.value}, ${colors.b})`
        })
        setDisplayColor('rgb (' + colors.r + ', ' + event.target.value + ', ' + colors.b + ')')
    }

    const changeB = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColors({
            ...colors,
            b: parseInt(event.target.value)
        })
        setColor({
            backgroundColor: `rgb(${colors.r}, ${colors.g}, ${event.target.value})`
        })
        setDisplayColor('rgb (' + colors.r + ', ' + colors.g + ', ' + event.target.value + ')')
    }

    return (
        <div style={color} className="w-full h-screen">
            <div className="bg-white w-3/5 absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 py-5 shadow-lg text-xl text-green-950 rounded-[5px] grid justify-items-center">
                <div className="w-full text-center">
                    R <input className="inline-block w-4/5 ml-2.5 mt-6" type="range" min={0} max={255} step={1} value={colors.r} onChange={changeR}/>
                </div>
                <div className="w-full text-center">
                    G <input className="inline-block w-4/5 ml-2.5 mt-6" type="range" min={0} max={255} step={1} value={colors.g} onInput={changeG}/>
                </div>
                <div className="w-full text-center">
                    B <input className="inline-block w-4/5 ml-2.5 mt-6" type="range" min={0} max={255} step={1} value={colors.b} onInput={changeB}/>
                </div>
                <span className="inline-block text-center my-5 bg-blue-600 text-white py-5 px-8 text-xl tracking-[0.5px] rounded-[2px]">
                    {displayColor}
                </span>
            </div>
        </div>
    );
}