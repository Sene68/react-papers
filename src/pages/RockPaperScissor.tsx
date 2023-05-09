import { faHandRock, faHandScissors, faHandPaper } from "@fortawesome/free-solid-svg-icons"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface VersusState {
    you: number;
    computer: number;
}

interface PlayButtonProps {
    onClick: () => void;
    icon: IconDefinition;
}

const initialVersusState: VersusState = {
    you: 0,
    computer: 0
}

const answers = [
    [
        "DRAW",
        "YOU WIN",
        "YOU LOSE"
    ],
    [
        "YOU LOSE",
        "DRAW",
        "YOU WIN"
    ],
    [
        "YOU WIN",
        "YOU LOSE",
        "DRAW"
    ]
]

const Choices = [
    { value: 0, text: 'ROCK', icon: faHandRock },
    { value: 1, text: 'SCISSORS', icon: faHandScissors },
    { value: 2, text: 'PAPER', icon: faHandPaper },
  ];
  
const PlayButton: React.FC<PlayButtonProps> = ({ onClick, icon }) => (
    <button
        onClick={onClick}
        className="bg-[#ffd51b] text-black border-none text-[50px] h-[100px] w-[100px] rounded-full outline-none cursor-pointer"
    >
        <FontAwesomeIcon icon={icon} />
    </button>
);

export const RockPaperScissor = () => {
    const [playerPick, setPlayerPick] = useState('')
    const [computerPick, setComputerPick] = useState('')
    const [result, setResult] = useState('')
    const [versusState, setVersusState] = useState<VersusState>(initialVersusState)

    const screenStyle = {
        background: `linear-gradient(135deg, #ffcf1b, #ff8b1b)`
    }

    const play = (value: number) => {
        const cpuValue = Math.floor(Math.random() * 3)

        setPlayerPick(getTextValue(value))
        setComputerPick(getTextValue(cpuValue))
        setResult(answers[value][cpuValue])

        if (answers[value][cpuValue] === 'YOU WIN') {
            setVersusState((prevState) => ({
                ...prevState,
                you: prevState.you + 1
            }))
        }

        if (answers[value][cpuValue] === 'YOU LOSE') {
            setVersusState((prevState) => ({
                ...prevState,
                computer: prevState.computer + 1
            }))
        }
    }

    const getTextValue = (value: number) => {
        switch (value) {
            case 0:
                return 'ROCK'    
            case 1:
                return 'SCISSORS'
            case 2:
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
                        <span> {versusState.computer}</span>
                    </p>
                    <p>
                        You : 
                        <span> {versusState.you}</span>
                    </p>
                </div>
                <div className="w-[90%] m-auto flex justify-around">
                    {Choices.map((choice) => (
                        <PlayButton
                        key={choice.value}
                        onClick={() => play(choice.value)}
                        icon={choice.icon}
                        />
                    ))}
                </div>
                <div className="mt-[30px] text-center">
                    <p>{playerPick === '' ? '' : `You choose ${playerPick}` }</p>
                    <p>{computerPick === '' ? '' : `Computer choose ${computerPick}` }</p>
                    <p>{result}</p>
                </div>
            </div>
        </div>
    )
}