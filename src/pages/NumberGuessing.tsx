
export const NumberGuessing = () => {
    const play = () => {

    }

    return(
        <div className="bg-gradient-to-r from-violet-500 to-indigo-400 w-full h-screen">
            <div className="absolute w-1/2 min-w-[580px] translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 bg-white px-2.5 py-12 rounded-md grid justify-items-center">
                <h3 className="font-mono text-base font-semibold">I am thinking of a number between 1-100.</h3>
                <h3 className="font-mono text-base font-semibold">Can you guess it?</h3>

                <input className="font-mono w-24 font-semibold text-purple-800 py-5 text-center mt-8 rounded-md border-2 border-solid border-gray-700" type="text" placeholder="Num"/>
                <br/>
                <button className="font-mono w-40 py-4 bg-violet-800 text-white border-none rounded-md text-lg font-semibold mb-8" onClick={play}>GUESS</button>

                <p className="font-mono">No. of Guesses: 0</p>
                <p className="font-mono">Guessed Numbers are: None</p>
                <p className="font-mono"></p>
            </div>
        </div>
    )
}