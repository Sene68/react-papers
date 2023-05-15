import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const dices = [
    {
        "diceValue" : 1,
        "icon" : faDiceOne
    },
    {
        "diceValue" : 2,
        "icon" : faDiceTwo
    },
    {
        "diceValue" : 3,
        "icon" : faDiceThree
    },
    {
        "diceValue" : 4,
        "icon" : faDiceFour
    },
    {
        "diceValue" : 5,
        "icon" : faDiceFive
    },
    {
        "diceValue" : 6,
        "icon" : faDiceSix
    }
]

export const RollTheDice = () => {
    const [dice, setDice] = useState({
        firstDice : 0,
        secondDice : 0
    })

    const screenStyle = {
        background: `linear-gradient(#e92e3d, #ff6e6a) 0 100% no-repeat`,
        backgroundSize: `100% 50%`
    }

    const diceStyle = {
        color: `#e92e3d`
    }

    const roll = () => {
        const diceFirstValue = Math.floor(Math.random() * 6)
        const diceSecondValue = Math.floor(Math.random() * 6)

        setDice((prevDice) => ({
            ...prevDice,
            firstDice: diceFirstValue,
            secondDice: diceSecondValue
        }))
    }

    return(
        <div style={screenStyle} className="w-full h-screen">
            <div className="w-[400px] p-[50px] bg-white absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 rounded-xl shadow-lg flex flex-col items-center">
                <div className="w-[90%] flex justify-around">
                    <FontAwesomeIcon icon={dices[dice.firstDice].icon} style={diceStyle} className="w-24 h-24" />
                    <FontAwesomeIcon icon={dices[dice.secondDice].icon} style={diceStyle} className="w-24 h-24" />
                </div>
                <p className="text-base my-[30px] font-medium">
                    Text
                </p>
                <button 
                    className="bg-[#e92e3d] border-none outline-none text-white py-[15px] w-[150px] tracking-[1px] rounded-md"
                    onClick={() => roll()}
                >
                    ROLL THE DICE
                </button>
            </div>
        </div>
    )
}