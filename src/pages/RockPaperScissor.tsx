import { faHandRock, faHandScissors, faHandPaper } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const RockPaperScissor = () => {
    const [playerPick, setPlayerPick] = useState('')
    const [computerPick, setComputerPick] = useState('')

    const screenStyle = {
        background: `linear-gradient(135deg, #ffcf1b, #ff8b1b)`
    }

    const play = (value: number) => {
        const cpuValue = Math.floor(Math.random() * 3) + 1

        setPlayerPick(getTextValue(value))
        setComputerPick(getTextValue(cpuValue))
        
    }

    const getTextValue = (value: number) => {
        switch (value) {
            case 1:
                return 'ROCK'    
            case 2:
                return 'SCISSORS'
            case 3:
                return 'PAPER'
            default:
                return ''
        }
    }


    return(
        <div style={screenStyle} className="w-full h-screen">
            <div className="w-[45%] min-w-[500px] bg-white py-10 px-[30px] absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 rounded-xl shadow-lg">
                <div className="mb-[50px] text-right">
                    <p>
                        Computer :  
                        <span> 0</span>
                    </p>
                    <p>
                        You : 
                        <span> 0</span>
                    </p>
                </div>
                <div className="w-[90%] m-auto flex justify-around">
                    <button 
                        onClick={() => play(1)}
                        className="bg-[#ffd51b] text-black border-none text-[50px] h-[100px] w-[100px] rounded-full outline-none cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faHandRock} />
                    </button>
                    <button 
                        onClick={() => play(2)}
                        className="bg-[#ffd51b] text-black border-none text-[50px] h-[100px] w-[100px] rounded-full outline-none cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faHandScissors} />
                    </button>
                    <button 
                        onClick={() => play(3)}
                        className="bg-[#ffd51b] text-black border-none text-[50px] h-[100px] w-[100px] rounded-full outline-none cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faHandPaper} />
                    </button>
                </div>
                <div className="mt-[30px] text-center">
                    <p>{playerPick === '' ? '' : `You choose ${playerPick}` }</p>
                    <p>{computerPick === '' ? '' : `Computer choose ${computerPick}` }</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}