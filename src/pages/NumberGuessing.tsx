import React, { useState } from "react"

export const NumberGuessing = () => {
    const [value, setValue] = useState<number>(0)
    const [answer, setAnswer] = useState<number>(Math.floor(Math.random() * 100) + 1)
    const [message, setMessage] = useState<string>('')
    const [guessedNums, setGuessedNums] = useState<number[]>([])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value))
    }

    const play = () => {
        setGuessedNums([...guessedNums, value])

        if (value < answer) {
            setMessage('Your guess is too low.')
        } else if (value > answer) {
            setMessage('Your guess is too high.')
        } else if (value === answer) {
            setMessage('Yipple You Win!!')
        }
    }

    return(
        <div className="bg-gradient-to-r from-violet-500 to-indigo-400 w-full h-screen">
            <div className="absolute w-1/2 min-w-[580px] translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 bg-white px-2.5 py-12 rounded-md grid justify-items-center">
                <h3 className="font-mono text-base font-semibold">I am thinking of a number between 1-100.</h3>
                <h3 className="font-mono text-base font-semibold">Can you guess it?</h3>

                <input 
                    className="font-mono w-24 font-semibold text-purple-800 py-5 text-center mt-8 rounded-md border-2 border-solid border-gray-700" 
                    type="text"
                    placeholder="Num"
                    pattern="[0-9]*"
                    onChange={onChange}
                    value={value}
                />
                <br/>
                <button className="font-mono w-40 py-4 bg-violet-800 text-white border-none rounded-md text-lg font-semibold mb-8" onClick={play}>GUESS</button>

                <p className="font-mono">{message}</p>
                <p className="font-mono">No. of Guesses: {guessedNums.length}</p>
                <p className="font-mono">Guessed Numbers are: {value}</p>
                
            </div>
        </div>
    )
}