import { useEffect, useState } from "react"

interface ClockProps {
    hours: number;
    minutes: number;
    seconds: number;
}

export const DigitalClock = () => {
    const [clock, setClock] = useState<ClockProps>({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const interval = setInterval(()=> {
            const now = new Date()
            setClock(clock => ({
                ...clock,
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            }))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return(
        <div className="bg-gradient-to-r from-violet-500 to-indigo-400 w-full h-screen">
            <div className="w-[550px] h-[150px] absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 flex items-center justify-between">
                <div className="relative bg-white h-full w-[150px] flex items-center justify-center text-6xl rounded-md shadow-lg tracking-[3px]">{clock.hours}</div>
                <span className="font-bold text-6xl text-white">:</span>
                <div className="relative bg-white h-full w-[150px] flex items-center justify-center text-6xl rounded-md shadow-lg tracking-[3px]">{clock.minutes}</div>
                <span className="font-bold text-6xl text-white">:</span>
                <div className="relative bg-white h-full w-[150px] flex items-center justify-center text-6xl rounded-md shadow-lg tracking-[3px]">{clock.seconds}</div>
            </div>
        </div>
    )
}