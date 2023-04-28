export const DigitalClock = () => {
    return(
        <div className="bg-gradient-to-r from-violet-500 to-indigo-400 w-full h-screen">
            <div className="w-[550px] h-[150px] absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 flex items-center justify-between">
                <div className="relative bg-white h-full w-[150px] flex items-center justify-center text-6xl rounded-md shadow-lg tracking-[3px]">00</div>
                <span className="font-bold text-6xl text-white">:</span>
                <div className="relative bg-white h-full w-[150px] flex items-center justify-center text-6xl rounded-md shadow-lg tracking-[3px]">00</div>
                <span className="font-bold text-6xl text-white">:</span>
                <div className="relative bg-white h-full w-[150px] flex items-center justify-center text-6xl rounded-md shadow-lg tracking-[3px]">00</div>
            </div>
        </div>
    )
}