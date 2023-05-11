import { faRandom, faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const RandomPasswordGenerator = () => {

    const screenStyle = {
        background: `linear-gradient(-135deg, #0048ce, #008bfd)`
    }


    return(
        <div style={screenStyle} className="w-full h-screen">
            <div className="w-[40%] min-w-[500px] bg-[#1c1e21] py-[80px] px-[30px] absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 rounded-xl shadow-lg">
                <input type="text" className="bg-transparent focus:outline-none border-b-2 border-solid border-[#e2e2e2] w-[75%] h-[35px] py-5 px-[5px] text-[#f5f5f5] text-lg tracking-[1px]" />
                <button className="w-[11%] h-[38px] bg-transparent border-none text-white text-lg float-right text-right cursor-pointer">
                    <FontAwesomeIcon icon={faRandom} />
                </button>
                <button className="w-[11%] h-[38px] bg-transparent border-none text-white text-lg float-right text-right cursor-pointer">
                    <FontAwesomeIcon icon={faCopy} />
                </button>
                <input className="appearance-none w-[85%] h-[3.5px] mt-[80px] bg-[#e2e2e2] rounded-md" type="range" min={8} max={20} value={8} />
                <h3 className="inline-block w-[10%] text-[#1c1e21] bg-white text-center py-[5px] ml-[3%] rounded-md text-lg">8</h3>
            </div>
        </div>
    )
}