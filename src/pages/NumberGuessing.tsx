import React, { useState, useReducer } from "react"

interface State {
    value: number;
    message: string;
    answer: number;
}

type Action =
  | { type: "SET_VALUE"; payload: number }
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "SET_ANSWER"; payload: number };


const initialState: State = {
    value: 0,
    message: "",
    answer: Math.floor(Math.random() * 100) + 1,
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, value: action.payload };
        case "SET_MESSAGE":
            return { ...state, message: action.payload };
        case "SET_ANSWER":
            return { ...state, answer: action.payload };
        default:
            return state;
    }
}

export const NumberGuessing = () => {
    const [guessedNums, setGuessedNums] = useState<number[]>([])

    const [state, dispatch] = useReducer(reducer, initialState)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        dispatch({ type: "SET_VALUE", payload: value });
    }

    const play = () => {
        const { value, answer } = state;

        setGuessedNums([...guessedNums, value]) //이 영역도 reducer로 처리하면댐
        if (value < answer) {
            dispatch({ type: "SET_MESSAGE", payload: "Your guess is too low." });
        } else if (value > answer) {
            dispatch({ type: "SET_MESSAGE", payload: "Your guess is too high." });
        } else {
            dispatch({ type: "SET_MESSAGE", payload: "Yipple You Win!!" });
        }
    }

    const reset = () => {
        setGuessedNums([])
        dispatch({ type: "SET_VALUE", payload: 0 });
        dispatch({ type: "SET_MESSAGE", payload: "" });
        dispatch({ type: "SET_ANSWER", payload: Math.floor(Math.random() * 100) + 1 });
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
                    value={state.value}
                />
                <br/>
                <button className="font-mono w-40 py-4 bg-violet-800 text-white border-none rounded-md text-lg font-semibold mb-8" onClick={play}>GUESS</button>

                <p className="font-mono">{state.message}</p>
                <p className="font-mono">No. of Guesses: {guessedNums.length}</p>
                <p className="font-mono">Guessed Numbers are: {state.value}</p>
                
                <br/>
                <button className="font-mono w-40 py-4 bg-violet-800 text-white border-none rounded-md text-lg font-semibold mb-8" onClick={reset}>RESET</button>
            </div>
        </div>
    )
}